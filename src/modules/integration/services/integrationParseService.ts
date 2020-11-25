import axios from 'axios'
import blingPost from '../../../shared/utils/blingIntegration'
import pipedriveParser from '../../../shared/utils/pipedriveParser'
import { buildXML } from '../../../shared/utils/xmlCreator'
import {injectable, inject} from 'tsyringe'
import IIntegrationDataRepository from '../repositories/IIntegrationDataRepository'

@injectable()
class IntegrationParseService {
  constructor(

    @inject('IntegrationRepository')
    private integrationRepository: IIntegrationDataRepository

  ){}

  public async execute(){

    const pipedriveData = await pipedriveParser()

    const xml = pipedriveData.map((transaction) => buildXML(transaction))

    const blingResult = blingPost(xml[0])

    return blingResult
  }
}

export default IntegrationParseService
