const express=require('express');
const app=express();
const db=require('./db');
const port=process.env.port || 4398;
const cors=require('cors');
app.use(cors())
const AuthController=require('./controller/authController');
app.get('/',(req,res)=>{
    res.send("Welcome to zomato login info")
 })
app.use('/api/auth',AuthController);
app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})
