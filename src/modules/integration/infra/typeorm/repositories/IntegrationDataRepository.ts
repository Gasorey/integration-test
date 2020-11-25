import { getMongoRepository, MongoRepository } from 'typeorm'
import IIntegrationDataDTO from '../../../dtos/IIntegrationDataDTO'
import IIntegrationDataRepository from '../../../repositories/IIntegrationDataRepository'
import IntegrationData from '../schemas/IntegrationData'


class IntegrationDataRepository implements IIntegrationDataRepository {
  private ormRepository: MongoRepository<IntegrationData>

  constructor() {
    this.ormRepository = getMongoRepository(IntegrationData)
  }

  public async create(data: IIntegrationDataDTO): Promise<IntegrationData>{
    const integrationData = this.ormRepository.create(data)

    await this.ormRepository.save(integrationData)

    return integrationData
  }
}
export default IntegrationDataRepository
