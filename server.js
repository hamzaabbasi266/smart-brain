const express= require('express');
const bodyParser=require('body-parser');
const cors =require('cors');
const app=express();
const knex =require('knex');
const bcrypt=require('bcrypt-nodejs');
const signin=require('./controllers/signin');
const register=require('./controllers/register');
const image=require('./controllers/image');
const profile=require('./controllers/profile');
 const db=knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '1122Murree',
      database : 'smart-brain'
    }
  });
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('it is working!');
})
app.post('/signin',(req,res)=>{signin.handleSignin(req,res,db,bcrypt)});
app.post('/register',(req,res)=>{register.handleRegister(req,res,db,bcrypt)})
app.get('/profile/:id',(req,res)=>{profile.handleProfile(req,res,db)})
app.put('/image',(req,res)=>{image.handleImage(req,res,db)})
app.post('/imageurl',(req,res)=>{image.handleApiCall(req,res)})


app.listen(process.env.PORT ||3000,()=>{
    console.log(`app is running at ${process.env.PORT}`);
})