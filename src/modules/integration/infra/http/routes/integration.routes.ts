import {Router} from 'express'
import IntegrationController from '@modules/integration/infra/http/controllers/IntegrationController'

const integrationRouter = Router()

const integrationController = new IntegrationController()

integrationRouter.get('/', integrationController.index)

export default integrationRouter
