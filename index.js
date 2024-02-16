const express = require('express')
const app = express()
const port = 3000
//routes GET method
app.get('/hello', (request, response) => {
  response.send('Hello World!')
})

app.get('/', (req, res) => {
  res.send('utama!')
})

app.post('/login',(req, res)=> {
  if (req.name === "rekel"){
    res.send('login success')
  }

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})