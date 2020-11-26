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

    const pipedriveData = await pipedriveParser()

    const xml = pipedriveData.map((transaction) => buildXML(transaction))

    const blingResult = blingPost(xml[0])

    const bling = await Promise.all(xml.map(async (order) => await blingPost(order)))

    const createdOrders = bling.filter((order) => order.status === 201)

    createdOrders.map(async (order) => await this.integrationMongo.create(order.data))

    const mongoAggregate = await this.integrationMongo.aggregate()

    const formatted = AggregateFormatter(mongoAggregate)

    return formatted
  }
}

export default IntegrationService
