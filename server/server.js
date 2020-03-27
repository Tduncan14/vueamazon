const express = require('express');
const morgan = require('morgan');
const bodyParser= require('body-parser');




const app = express();

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