const userModel = require('../models/userModel')

exports.getAll = async (req, res) => {
  try {
    const users = await userModel.getAll()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.get = async (req, res) => {
  try {
    const user = await userModel.get(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}