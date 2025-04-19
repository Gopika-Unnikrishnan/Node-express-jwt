const express = require("express")
const app = express();
const PORT=5000;

app.use(express.json());

let users = [
    {id:1, name: "Ammu", age:5},
    {id:2, name: "Ajukuttan", age:8}
]

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/api/users",(req,res)=>{
    const {name,age} = req.query;
    res.send(`username is ${name}, age is ${age}`);
});

app.post("/api/data",(req,res)=>{
    const {name,age} = req.body;
    res.json({message: `Received data for ${name}, age ${age}`})
});

app.put("/api/users/:id",(req,res)=>{
    const userId = parseInt(req.params.id);
    const {name,age} = req.body;

    const user = users.find(u => u.id===userId);
    if(!user){
        return res.status(404).json({message:"user not found"});
    }

    if(name){
        user.name=name;
    }
    if(age){
        user.age=age;
    }
    res.json({message:"user updated",user})

})


app.listen(PORT,()=>{
    console.log(`Server running successfully on http://localhost:${PORT}`);
});