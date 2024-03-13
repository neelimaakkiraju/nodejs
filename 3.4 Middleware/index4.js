import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var band = "";

app.use(bodyParser.urlencoded({extended: true}));

function bandName(req , res , next){
  console.log(req.body);
  band = req.body["street"] + req.body["pet"];
  next();
}
app.use(bandName);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit" , (req, res)=>{
  console.log(req.body)
  res.send(`<h1>Your Band Name Is</h1><h2> ${band}✌️ </h2>`)
})



app.listen(port , () =>{
  console.log(`Server Running on port ${port}`)
})
