const server = require('./src/server')
const { port, databaseUri } = require('./settings')
const { logger } = require('./src/logger')
const database = require('./src/database')

database(databaseUri)
  .connect()
  .then(server)
  .then(createdServer => createdServer.listen(port, () => logger.info('Up on port', port)))
  .catch(logger.error)
