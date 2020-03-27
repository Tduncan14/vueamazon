const express = require('express');
const morgan = require('morgan');
const bodyParser= require('body-parser');




const App = express();



const PORT = process.env.PORT || PORT



App.listen(PORT,()=>{

   console.log(`listening to ${PORT}`)
})