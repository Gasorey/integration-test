import axios from 'axios'
import blingPost from '../../../shared/utils/blingIntegration'
import pipedriveParser from '../../../shared/utils/pipedriveParser'
import { buildXML } from '../../../shared/utils/xmlCreator'
import {injectable, inject} from 'tsyringe'
import IIntegrationDataRepository from '../repositories/IIntegrationDataRepository'

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
class IntegrationParseService {
  constructor(

    @inject('IntegrationDataRepository')
    private integrationRepository: IIntegrationDataRepository

  ){}

  public async execute(){

    const pipedriveData = await pipedriveParser()

    const xml = pipedriveData.map((transaction) => buildXML(transaction))

    const blingResult = blingPost(xml[0])

    const bling = xml.map(async (order) => await blingPost(order))

    const createdOrders = bling.filter(async (order) => (await order).status === 201)

    const postOnMongo = createdOrders.map(async (order) => await this.integrationRepository.create(await order))

    return blingResult
  }
}

export default IntegrationParseService
