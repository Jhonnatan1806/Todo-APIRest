require('dotenv').config()

module.exports = {
  db: {
    url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
    name: `${process.env.DB_NAME}`
  }
}