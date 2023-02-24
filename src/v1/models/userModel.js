const {ObjectId} = require('mongodb')
const mongoDB = require('../utils/connect')

exports.getAll = async () => {
  const db = await mongoDB.connect()
  const users = await db.collection('users').find().toArray()
  return users
}

exports.get = async (id) => {
  const db = await mongoDB.connect()
  const user = await db.collection('users').findOne({ _id: new ObjectId(id) })
  return user
}
