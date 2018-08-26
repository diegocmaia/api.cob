import bodyParser from 'body-parser'
import express from 'express'
import compress from 'compression'
import config from 'config'
import mongoose from 'mongoose'

import logger from './logger'

mongoose.connect(
    config.get('db.url'),
    { useNewUrlParser: true }
)

const app = express()

app.disable('x-powered-by')

app.use(bodyParser.json({ limit: '1mb' }))
app.use(compress())
// app.use(session())

const port = process.env.API_PORT || config.get('api.port')

app.listen(port, () => {
    logger.info(`API is running on port ${port}`)
})

export default app
