const express=require("express")
const CrudRouter=express.Router()
const {crudtable}=require("../models/crud.model")
const {sequelize}=require("../config/db")

CrudRouter.get("/",async (req,res)=>{
let data=await crudtable.findAll();
res.json({message:"ok",data:data})
})
CrudRouter.post("/create",(req,res)=>{
    // just take the date
let {todoname,todostatus}=req.body;
console.log(todoname,todostatus)
// post this data to db
crudtable.create({todoname,todostatus}).then(()=>{console.log("data added to db successfully")
res.status(201).json({message:"data added to database successfully"})
}).catch((err)=>{
console.log(err)
res.status(500).json({message:"error in creating todo please try again later"})
})
})
CrudRouter.patch("/updatetodo/:todoid",(req,res)=>{
let updateddata=req.body;
let todoid=req.params.todoid
crudtable.update(updateddata,{
    where:{id:todoid}
}).then(()=>{
    console.log("updated successfully")
    res.status(202).json({message:"data updated successfully"})
}).catch((err)=>{
    console.log(err)
    res.status(500).json({message:"error in updating the todo",error:err})

})
})


// you have to find that todo

module.exports={CrudRouter}