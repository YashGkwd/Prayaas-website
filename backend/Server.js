const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const PORT = process.env.port || 5000;
require("./Models/registerSchema")
const REGISTER = mongoose.model("REGISTER");


const DBlink = "mongodb+srv://Prayaas:Prayaas1234@cluster0.1rxhmgn.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DBlink).then(()=>{console.log("connected")}).catch((e)=>console.log(e))


const app = express();


app.use(express.json());
app.use(cors())
app.use(require("./router/router"))

app.listen(PORT);