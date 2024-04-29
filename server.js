const express = require("express");

const app = express()

app.get("/", (req,res)=>{
    return res.send({
        message: "Hello World. A Simple NodeJS app is running"
    });
})

app.listen(3000, ()=>{
    console.log("Serer is listening on port 3000. Visit http://localhost:3000/ for checking app ping status")
});