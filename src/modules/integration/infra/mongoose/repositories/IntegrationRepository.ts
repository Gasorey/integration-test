import { IIntegrationDTO } from '@modules/integration/dtos/IIntegrationDTOS'
import IIntegrationRepository from '@modules/integration/repositories/IIntegrationRepository'
import IntegrationModel from '@modules/integration/infra/mongoose/schemas/IntegrationModel'

class IntegrationRepository implements IIntegrationRepository {
  public async create(data: IIntegrationDTO): Promise<any>{

    const mongoSchema = await IntegrationModel.create(data)


    console.log(`Mongo Document Creation | FINISH | document created: ${mongoSchema._id}`)

    return mongoSchema

  }
  public async aggregate(): Promise<any>{

    const mongoAggregate = await IntegrationModel.aggregate([
      {
        $group: {_id: '$data', total: {$sum: '$items.item.vlr_unit'}}
      }
    ])

    console.log(`MongoAggregate | Finish | ${JSON.stringify(mongoAggregate, null, 2)}`)

    return mongoAggregate

  }
}

export default IntegrationRepository
