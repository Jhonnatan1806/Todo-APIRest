const {MongoClient} = require('mongodb')
const config = require('../config/config')

exports.connect = async () => {
  if (global.db) return global.db;
  const client = await MongoClient.connect(config.db.url, { useNewUrlParser: true });
  const db = client.db(config.db.name)
  global.db = db
  return db
}