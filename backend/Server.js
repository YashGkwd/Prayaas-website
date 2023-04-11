const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const path = require("path")
const PORT =  5000 || process.env.port;
require("./Models/registerSchema")
const REGISTER = mongoose.model("REGISTER");


const DBlink = "mongodb+srv://Prayaas:Prayaas1234@cluster0.1rxhmgn.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DBlink).then(()=>{console.log("connected")}).catch((e)=>console.log(e))


const app = express();


app.use(express.json());
app.use(cors())
app.use(require("./router/router"))

// Serving the frontend
app.use(express.static(path.join(__dirname,'./frontend/build')));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./frontend/build/index.html"),
    function(err){
        res.status(500).send(err);
    }
    )
})
app.listen(PORT);