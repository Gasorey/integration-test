import axios from 'axios'
import { v4 } from 'uuid'


interface api_key {
  api_key: string
}

interface transaction {
  status: string,
  org_name: string,
  cc_email: string,
  value: number,
  close_time: Date,
  products_count: number,
  org_id: {
    address: string
  }
}

interface IPipedriveData {
  data: Date,
  cliente: {
    nome: string,
    endereco: string,
    email: string,
  },
  volume: {
    servico: string
  },
  item: {
    descricao: string,
    qtde: number,
    vlr_unit: number
  }
 }

const  pipedriveParser = async (): Promise<IPipedriveData[]> => {
  const response = await axios.get(`https://api.pipedrive.com/v1/deals?start=0&api_token=${process.env.PIPEDRIVER_API_KEY}`)

  const responseToParse = response.data.data.filter((transaction: transaction) => transaction.status === 'won')

  const parsedResponse = responseToParse.map((transaction: transaction, index: number) => {
      const newStructure = {
        data: transaction.close_time,
        cliente: {
          nome: transaction.org_name,
          endereco: transaction.org_id.address,
          email: transaction.cc_email
        },
        volume: {
          servico: 'SEDEX - CONTRATO',
        },
        items:{
          item: {
            codigo: `${transaction.status + transaction.org_name + transaction.close_time + transaction.cc_email + 2}`,
            descricao: `Pedido de número ${index + 1}`,
            qtde: transaction.products_count,
            vlr_unit: transaction.value
          }
        }
      }
      return newStructure
    })


    return parsedResponse
}



export default pipedriveParser
