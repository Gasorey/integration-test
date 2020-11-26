import { IIntegrationDTO } from '@modules/integration/dtos/IIntegrationDTOS'
import IIntegrationRepository from '@modules/integration/repositories/IIntegrationRepository'
import IntegrationModel from '@modules/integration/infra/mongoose/schemas/IntegrationModel'

class IntegrationRepository implements IIntegrationRepository {
  public async create(data: IIntegrationDTO): Promise<any>{

    const mongoSchema = await IntegrationModel.create(data)

    return mongoSchema
  }
  public async aggregate(): Promise<any>{

    const mongoSchema = await IntegrationModel.aggregate([
      {
        $group: {_id: '$data', total: {$sum: '$items.item.vlr_unit'}}
      }
    ])
    return mongoSchema

  }
}

export default IntegrationRepository
