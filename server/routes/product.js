 const express = require('express');
 const Product = require('../models/product');


 const router = express.Router();

 const upload = require ('../middlewares/upload.photo');

//  title:String,
//  description:String,
//  photo:String,
//  price:Number,
//  stockQuantity:Number,
//  rating:[Number]

// post request -create a new product

router.post('/products', upload.single("photo"),async(req,res) =>{
  try{
      let product = new Product();

      product.title = req.body.title;
      product.description = req.body.description;
      product.photo = req.file.location;
      product.stockQuantity = req.body.stockQuantity;
      // product.price = req.body.price;


      await product.save()


      res.json({
          status:true,
          message:"product is saved"
      })


  }
  catch(err){

    res.status(500).json({
        success: false,
        message:err.message

    })

  }
})



// get request which will get all the products



// get request - will get a single product



// put request - will update a single roduct


// delete request = delete a single product


module.exports = router;