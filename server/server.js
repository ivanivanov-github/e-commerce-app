const express = require('express')
const app = express()
const { ROLE, users } = require('./data/data')
// const projectRouter = require('./routes/projects')
// const { authUser, authRole } = require('./basicAuth')
const { json } = require('express')
const port = 5000
const cors = require("cors")

app.use(cors())

app.use(express.json())

app.post('/api/password', (req, res) => {
    // console.log(req.body)
    if(req.body.id === '1234') {
    // console.log('message')
      res.status(200).json({result: true})
      // return
    }
    else{
      res.status(200).json({result: false})
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
