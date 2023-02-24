const {MongoClient, ServerApiVersion } = require('mongodb')
const config = require('../config/config')

exports.connect = async () => {
  if (global.db) return global.db;
  const client = new MongoClient(config.db.url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
  const db = client.db(config.db.name)
  global.db = db
  return db
}
