import { Router } from 'express'
import integrationRouter from '../../../../modules/integration/infra/http/routes/integration.routes'

const routes = Router()

routes.use('/integration', integrationRouter)

export default routes
