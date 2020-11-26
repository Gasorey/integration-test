import rateLimit from 'express-rate-limit'

const apiLimit = rateLimit({
  windowMs: 60 * 1000,
  max: 40,
  message: 'Exceed request limit'
})

export default apiLimit
