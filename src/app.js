const express = require('express')
const app = express()
const v1 = require('./v1')

app.use('/api', v1)
app.use('/uploads', express.static('uploads'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Port: ${PORT}`)
})