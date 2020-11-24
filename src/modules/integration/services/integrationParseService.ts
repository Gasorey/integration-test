import axios from 'axios'
import pipedriveParser from '../../../shared/utils/pipedriveParser'
import { buildXML } from '../../../shared/utils/xmlCreator'

// interface IResponse {
// deal: string,
// value: number,
// status: boolean,
// }

// interface IResponse {
//  cliente: {
//    nome: string,
//    endereco: string,
//    email: string,
//  },
//  volume: {
//    servico: string
//  },
//  item: {
//    descricao: string,
//    qtde: number,
//    vlr_unit: number
//  }
// }


class IntegrationParseService {
  public async execute(){

    const pipedriveData = await pipedriveParser()

    const xml = await pipedriveData.map((transaction) => buildXML(transaction))

    return xml
  }
}

export default IntegrationParseService
