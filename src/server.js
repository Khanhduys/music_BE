const express = require('express')
import initWebRoute from "./routes/web"
import bodyParser from 'body-parser'
import connect from "./config/connectDB";

require('dotenv').config();
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:true
}))

const port = process.env.PORT||8080;
initWebRoute(app)
//kết nối đến db
connect();
app.listen(port, () => {
   
  console.log(`Example app listening on port ${port}`)
})