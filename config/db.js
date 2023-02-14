require("dotenv").config();
const {Sequelize,DataTypes}=require("sequelize");
//create a new instance of class Sequelize;
const sequelize = new Sequelize("crud","admin",process.env.password,{
    host:"database-1.cgz8lev9or1c.ap-south-1.rds.amazonaws.com",
    dialect:"mysql"
}) 
// config , authenticate
sequelize.authenticate().then(()=>{
    console.log("connected to data base successfully")
}).catch((err)=>{
    console.log(err)
})
module.exports={sequelize}