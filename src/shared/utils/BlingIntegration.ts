import axios from 'axios'
import qs from 'qs'
import { XMLtoJSON } from '@shared/utils/XMLCreator'

const  blingPost = async (data: string) => {
  const requestBody = qs.stringify({
    apikey: process.env.BLING_API_KEY,
    xml: data
  })
  const response = await axios.post(
    'https://bling.com.br/Api/v2/pedido/json/',
    requestBody,
    {headers: {
      'Content-Type':'application/x-www-form-urlencoded'
    }}
  )
  const jsonData = await XMLtoJSON(data)

  const payload = {
    status: response.status,
    statusText: response.statusText,
    data: jsonData
  }
  return payload
}

export default blingPost
