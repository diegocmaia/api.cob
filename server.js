import express from 'express'
import config from 'config'
import mongoose from 'mongoose'
import logger from './logger'

mongoose.connect(
    config.get('db.url'),
    { useNewUrlParser: true }
)

const app = express()

const port = process.env.API_PORT || config.get('api.port')

app.listen(port, () => {
    logger.info(`API is running on port ${port}`)
})

export default app
