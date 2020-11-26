import 'reflect-metadata';
import 'dotenv/config';

import 'express-async-errors';

import express from 'express'
import cors from 'cors'
import '@shared/container';
import routes from '@shared/infra/http/routes'
import apiLimit from '@shared/utils/RateLimiter'

const app = express()

app.use(apiLimit)

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333,()=> {
  console.log('Server started on port 3333')
})
