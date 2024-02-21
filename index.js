const express = require ('express')
const app = express()
const todo = require('./db')


//middleware

app.use(express.json())

//routes
app.get('/todos',async (req,res)=>{
    try {
    const alltodos = await todo.find() 
    res.json(alltodos)
} catch(err) {
    console.error(err);
    res.status(500).json({msg : "Internal Server error"})
}
})

app.post('/todos',async (req,res)=>{
    try { 
         const {title, description} = req.body
    
    const createTodo = await todo.create({
        title: title,
        description : description
        })
        res.status(201).json(createTodo)
    } catch(err) {
        console.error(err);
        res.status(500).json({msg : "Internal Server error"})
    }
})

app.put('/completed',async (req,res)=>{
    try{
        const updateTodo = await todo.findByIdAndUpdate(id,{completed: true},{new: true})
        if(!updateTodo) {
            return res.status(404).json({msg:"todo not found"})
        }
        res.json(updateTodo)
    } catch(err){
        console.error(err);
        res.status(500).json({msg : "Internal Server error"})
    }
})

app.listen(3000,console.log("server is listening on port 3000"))
