import { IIntegrationDataDTO } from 'modules/integration/dtos/IIntegrationDataDTOS'
import IIntegrationDataMongoClass from 'modules/integration/repositories/IIntegrationDataMongoClass'
import connect from '../../../../../shared/infra/mongoose'
import IntegrationDataMongo from '../schemas/mongooseIntegrationData'

class IntegrationDataMongoClass implements IIntegrationDataMongoClass {
  public async create(data: IIntegrationDataDTO): Promise<any>{

    const mongoSchema = await IntegrationDataMongo.create(data)

    return mongoSchema
  }
  public async aggregate(): Promise<any>{

    const mongoSchema = await IntegrationDataMongo.aggregate([
      {
        $group: {_id: '$data', total: {$sum: '$items.item.vlr_unit'}}
      }
    ])
    return mongoSchema

  }
}

export default IntegrationDataMongoClass
