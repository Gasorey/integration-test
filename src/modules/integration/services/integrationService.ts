import blingPost from '@shared/utils/BlingIntegration'
import pipedriveParser from '@shared/utils/PipedriveIntegration'
import { buildXML } from '@shared/utils/XMLCreator'
import {injectable, inject} from 'tsyringe'
import IIntegrationRepository from '@modules/integration/repositories/IIntegrationRepository'
import connect from '../../../shared/infra/mongoose'
import AggregateFormatter from '../../../shared/utils/AggregateFormatter'
interface order {
  status: number,
  statusText: string,
  data: {
    data: string
    cliente: {
      nome: string,
      endereco: string,
      email: string,
    },
    volume: {
      servico: string,
    },
    items: {
      item: {
        codigo: string,
        descricao: string,
        qtde: number,
        vlr_unit: number
      }
    }
  }
}

@injectable()
class IntegrationService {
  constructor(
    @inject('IntegrationRepository')
    private integrationMongo: IIntegrationRepository,

  ){}

  public async execute(){

    await connect()

    let integrationStatus = {
      blingStatus: '',
      pipedriveStatus: ''
     }

    const pipedriveData = await pipedriveParser()

    if(Array.isArray(pipedriveData)){

      integrationStatus.pipedriveStatus = 'Dados coletados'

      const xml = pipedriveData.map((transaction) => buildXML(transaction))

      const bling = await Promise.all(xml.map(async (order) => await blingPost(order)))

      const createdOrders = bling.filter((order) => order.status === 201)

      if(createdOrders.length === 0){
        integrationStatus.blingStatus = 'Nenhum pedido de venda novo'
      } else {
      integrationStatus.blingStatus = `${createdOrders.length} novos pedidos foram criados`
      }

      await Promise.all(createdOrders.map(async (order) => await this.integrationMongo.create(order.data)))
    }

    const mongoAggregate = await this.integrationMongo.aggregate()

    const response = {
      Consolidado: AggregateFormatter(mongoAggregate) ,
      integrationStatus
    }

    return response
  }
}

export default IntegrationService
