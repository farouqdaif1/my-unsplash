import express from "express";
const app = express();
const Port = 5000;
app.get('/', (req, res) => {
    res.send("Hello, World!")
})
app.listen(Port, () =>{
    console.log("Server running on port: " + Port)
})