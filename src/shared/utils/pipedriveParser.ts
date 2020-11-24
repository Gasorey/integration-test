import axios from 'axios'

interface api_key {
  api_key: string
}

interface transaction {
  org_name: string,
  cc_email: string,
  value: number,
  products_count: number,
  org_id: {
    address: string
  }
}

interface IPipedriveData {
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

    const parsedResponse = response.data.data.map((transaction: transaction, index: number) => {
      const newStructure = {
        cliente: {
          nome: transaction.org_name,
          endereco: transaction.org_id.address,
          email: transaction.cc_email
        },
        volume: {
          servico: 'SEDEX - CONTRATO',
        },
        item: {
          descricao: `Pedido de número ${index + 1}`,
          qtde: transaction.products_count,
          vlr_unit: transaction.value
        }
      }
      return newStructure
    })

    return parsedResponse
}



export default pipedriveParser
