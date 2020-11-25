import {container} from 'tsyringe'

import IIntegrationDataRepository from '../../modules/integration/repositories/IIntegrationDataRepository'
import IntegrationDataRepository from '../../modules/integration/infra/typeorm/repositories/IntegrationDataRepository'


container.registerSingleton<IIntegrationDataRepository>(
  'IntegrationDataRepository',
  IntegrationDataRepository
)
