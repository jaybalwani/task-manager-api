const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

app.use(express.json())
app.use('/api/v1/tasks', tasks)

app.get('/', (req, res) => {
    res.send('Home page')
})

const port = 5000
app.listen(port, console.log('Listening at route 5000'))