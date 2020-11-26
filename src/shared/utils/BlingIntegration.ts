import axios from 'axios'
import qs from 'qs'
import { XMLtoJSON } from '@shared/utils/XMLCreator'

const  blingPost = async (data: string) => {
  console.log(`Bling Post | START`)

  try{
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

    const result = response.statusText

    console.log(`Bling Post | Finish | ${JSON.stringify(result, null, 2)}`)

    return payload
  }catch(err){
    console.log(`Bling Post | Finish | ${JSON.stringify(err, null, 2)}`)
    return err
  }
}

export default blingPost
