// Licensed to Elasticsearch B.V under one or more agreements.
// Elasticsearch B.V licenses this file to you under the Apache 2.0 License.
// See the LICENSE file in the project root for more information

'use strict'

const winston = require('winston')
const ecsFormat = require('../') // @elastic/ecs-winston-format

const logger = winston.createLogger({
  level: 'info',
  format: ecsFormat(),
  transports: [
    new winston.transports.Console()
  ]
})

logger.info('hi')
logger.error('oops there is a problem', { foo: 'bar' })
