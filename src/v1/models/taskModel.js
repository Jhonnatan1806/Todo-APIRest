const {ObjectId} = require('mongodb')
const mongoDB = require('../utils/connect')

exports.getAll = async () => {
  const db = await mongoDB.connect()
  const tasks = await db.collection('tasks').find().toArray()
  return tasks
}

exports.get = async (user_id) => {
  const db = await mongoDB.connect()
  const task = await db.collection('tasks').find({ user_id: new ObjectId(user_id) }).toArray()
  return task
}

exports.create = async (user_id, content, status) => {
  const db = await mongoDB.connect()
  const task = await db.collection('tasks').insertOne({ user_id: new ObjectId(user_id), content, status })
  return task
}

exports.update = async (id, user_id, content, status) => {
  const db = await mongoDB.connect()
  const task = await db.collection('tasks').updateOne({ _id: new ObjectId(id) }, { $set: { user_id:new ObjectId(user_id) , content, status } })
  return task
}

exports.remove = async (id) => {
  const db = await mongoDB.connect()
  const task = await db.collection('tasks').deleteOne({ _id: new ObjectId(id) })
  return task
}
