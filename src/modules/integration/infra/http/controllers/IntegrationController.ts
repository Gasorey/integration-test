import {Request, Response} from 'express'
import IntegrationParseService from '../../../services/integrationParseService'

export default class IntegrationController {
  public async index(request: Request, response: Response): Promise<Response>{
    try{
      const integrationParse = new IntegrationParseService()

      const integration = await integrationParse.execute()

      return response.json(integration)

    }catch(ex){
      console.log(ex)
      return ex
    }

  }
}
