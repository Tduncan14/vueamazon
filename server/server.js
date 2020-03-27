const express = require('express');
const morgan = require('morgan');
const bodyParser= require('body-parser');
const User = require('./models/user');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config()


const app = express();


mongoose.connect(process.env.DATABASE,{
 useNewUrlParser: true,
 useUnifiedTopology: true 
},(err) =>{

  if(err){
      console.log(err);
  }

  else{
      console.log('connect to database')
  }
})

mongoose.set('useCreateIndex', true)

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.get('/',(req,res) =>{

  res.send('hello world')
})


app.post('/',(req,res) => {

   console.log(req.body.name)

})


const PORT = process.env.PORT || 3000









app.listen(PORT,(err)=>{

    if(err){
        console.log(err)
    }

   console.log(`listening to ${PORT}`)
})