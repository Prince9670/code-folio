import cors from 'cors';
import { config } from 'dotenv';
config({path:'./config.env'});
import mongoose from 'mongoose';
import express, { json } from 'express';
const app = new express();
const PORT = process.env.PORT ;

import './db/conn'; 

app.use(cors()); 
app.use(json()); 
app.use(require('./router/auth'));

const consoleURL = (req,res,next)=>{
    console.log(`User at URL : localhost:${PORT}${req.url}`);
    next();
}

app.get('/',consoleURL,(req,res)=>{
    // res.cookie("test","faizan");
    res.send('Hello world');
})
app.get('*',consoleURL,(req,res)=>{
    res.send(`<center><h1>404 </h1><h3>The Page you are Looking for is Not Found</h3></center>`)
})

app.listen(PORT,()=>{
    console.log(`localhost:${PORT}`)
})