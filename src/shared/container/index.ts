import {container} from 'tsyringe'

import IIntegrationRepository from '@modules/integration/repositories/IIntegrationRepository'
import IntegrationRepository from '@modules/integration/infra/mongoose/repositories/IntegrationRepository'

container.registerSingleton<IIntegrationRepository>(
  'IntegrationRepository',
  IntegrationRepository
)
