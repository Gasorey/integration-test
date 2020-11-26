import {container} from 'tsyringe'

import IIntegrationDataMongoClass from 'modules/integration/repositories/IIntegrationDataMongoClass'
import IntegrationDataMongoClass from '../../modules/integration/infra/mongoose/repositories/IntegrationDataMongoRepository'

container.registerSingleton<IIntegrationDataMongoClass>(
  'IntegrationDataRepositoryMongo',
  IntegrationDataMongoClass
)
