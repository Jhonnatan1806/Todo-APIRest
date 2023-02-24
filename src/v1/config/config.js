require('dotenv').config()

module.exports = {
  db: {
    url: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}}`,
    name: `${process.env.DB_NAME}`
  }
}