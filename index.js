import express from "express";
import axios from "axios";
const port=3000;
const app=express();
app.use(express.static("public"));

app.get("/",async(req,res)=>{
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=twopart");
    const setup = response.data.setup;
    const delivery = response.data.delivery;
res.render("index.ejs",{setup,delivery});
})
app.listen(port,()=>{
    console.log("Running at port 3000")
})