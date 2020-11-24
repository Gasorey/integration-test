import { getMongoRepository, MongoRepository } from 'typeorm'
import IIntegrationDataDTO from '../../../repositories/IIntegrationData'
import IntegrationData from '../schemas/IntegrationData'


class PipedriveDataRepository {
  private ormRepository: MongoRepository<IntegrationData>

  constructor() {
    this.ormRepository = getMongoRepository(IntegrationData, 'integration-test')
  }

  public async create(content: IIntegrationDataDTO): Promise<IntegrationData>{
    const integrationData = this.ormRepository.create(content)

    await this.ormRepository.save(integrationData)

    return integrationData
  }

  }
export default PipedriveDataRepository
