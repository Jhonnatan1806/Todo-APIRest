const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/users')
const taskRoutes = require('./routes/tasks')

const app = express();

app.use(cors());
app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.json());
app.use('/v1/users', userRoutes)
app.use('/v1/tasks', taskRoutes)

app.get('/', (req, res) => {
  res.send('Server is running ...')
})

module.exports = app