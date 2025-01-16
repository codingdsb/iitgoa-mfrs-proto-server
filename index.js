const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const expressFileUpload = require("express-fileupload")
const cors = require("cors")
const dotEnv = require("dotenv")
const lengthChecker = require("./src/helpers/middleware/length_checker")
const typeChecker = require("./src/helpers/middleware/type_checker")
dotEnv.config()
app.use(express.json())
app.use(express.static("./public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
    origin:"*"
}))
app.use(expressFileUpload())
app.get("/time",(req,res)=>{res.send((new Date()).toString()})
app.use("/",typeChecker,lengthChecker, require("./src/routes/routes"))
app.listen(process.env.PORT,process.env.API_URL)
