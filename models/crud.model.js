const {sequelize}=require("../config/db");
const {SMALLINT,BIGINT, DataTypes}=require("sequelize");
// third step is to make a table 
const crudtable=sequelize.define("crud",{
id:{
    autoIncrement:true,
    primaryKey:true,
    type:SMALLINT
},
todoname:{
   type:DataTypes.STRING,
allowNull:false,
unique:false 
},
todostatus:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:false
}
})
// config authenticate ,define table and they sync it with the main database
sequelize.sync().then(()=>{
    console.log("crud table created successfully")
}).catch(err=>console.log(err))
module.exports={crudtable}