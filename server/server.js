const express = require('express');
const morgan = require('morgan');
const bodyParser= require('body-parser');

const mongoose = require('mongoose');
const dotenv = require('dotenv');

const User = require('./models/user');

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


// require api

const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const ownerRoutes = require('./routes/owner');


//or
// app.post('/api',productRoutes);
app.use('/api',productRoutes)

app.use('/api', categoryRoutes)

app.use('/api', ownerRoutes)



app.get('/',(req,res) =>{

  res.send('hello world')
})


// app.post("/", (req, res) => {
//     let user = new User();
//     user.name = req.body.name;
//     user.email = req.body.email;
//     user.password = req.body.password;

//     console.log( user,'user');
  
//     user.save(err => {
//       if (err) {
//         res.json(err);
//       } else {
//         res.json("successfully saved");
//       }
//     });
//   });

const PORT = process.env.PORT || 8000









app.listen(PORT,(err)=>{

    if(err){
        console.log(err)
    }

   console.log(`listening to ${PORT}`)
})