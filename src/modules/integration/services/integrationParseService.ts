import axios from 'axios'

// interface IResponse {
// deal: string,
// value: number,
// status: boolean,
// }

interface transaction {
org_name: string,
cc_email: string,
value: number,
products_count: number,
org_id: {
  address: string
}
}

class IntegrationParseService {
  public async getPipedriveData(): Promise<any>{
    const response = await axios.get(`https://api.pipedrive.com/v1/deals?start=0&api_token=${process.env.PIPEDRIVER_API_KEY}`)

    const parsedResponse = response.data.data.map((transaction: transaction, index: number) => {
      const newStructure = {
        client: {
          name: transaction.org_name,
          address: transaction.org_id.address,
          email: transaction.cc_email
        },
        volume: {
          freightService: 'SEDEX - CONTRATO',
          freightType: 'R',
        },
        item: {
          description: `Pedido de número ${index + 1}`,
          quantity: transaction.products_count,
          value: transaction.value
        }
      }
      return newStructure
    })

    return parsedResponse
  }
}

export default IntegrationParseService
