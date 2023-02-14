//use the following services RDS, EC2, ELB;
const expres=require("express")
const app=require("express")();
const {crudtable}=require("./models/crud.model")
const {CrudRouter}=require("./Routes/crud.route")
app.listen()
app.use(expres.json())
app.use("/crud",CrudRouter)

app.get("/",(req,res)=>{
    res.send({message:"hold your luck"})
})
app.listen(8000,()=>{
    console.log("server listening on port 8000")
})