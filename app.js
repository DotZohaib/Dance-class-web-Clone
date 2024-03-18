const express = require ("express");
const path = require ("path");
const fs = require("fs");
const app = express();
const port = 8000;

app.use ("/static", express.static("static"))
app.use (express.urlencoded())

app.set ("view engine","pug")
app.set("view",path.join(__dirname,"view"))

app.get("/",(req,res)=>{
    const params = {}
    res.status(200).render("home.pug",params)
})
app.get("/content",(req,res)=>{
    const params = {}
    res.status(200).render("content.pug",params)
})

app. listen(port,()=>{
    console.log (`the application started successfully on port ${port}`);
});
