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

router.get('/products', async(req,res) =>{

 try{

    let products = await Product.find()

    res.json({

      products:products
    })


 }


 catch(err){

  res.status(500).json({

    success:false,
    err:err.message
  })

 }


})



// get request - will get a single product

router.get('/products/:id', async(req,res)=>{

  try{

      
       let product = await Product.findOne({_id:req.params.id})


       res.json({
         product:product
       })



  }

  catch(err){

    res.status(500).json({
        success:false,
        err:err.message
    })
  }


})


// put request - will update a single roduct

router.put("/products/:id",upload.single('photo'), async (req,res) =>{

try{
  let product = await Product.findOneAndUpdate({_id: req.params.id},{
    $set:{
      title:req.body.title,
      price:req.body.price,
      category:req.body.category,
      photo:req.file.location,
      description:req.body.description,
      owner:req.body.ownerID
    }
  },{upsert:true});

  res.json({
    success:true,
    updatedProduct:product
  })
}

catch(err){
  res.status(500).json({
    success:false,
    message:err.message
  })
}
 
})


// delete request = delete a single product

// router.delete('/products/:id', async(req,res) =>{

// try{
//   const product = await Product.findByIdAndDelete({_id: req.params.id})

//   res.json({
//     success:true,
//     message:"it is deleted successfully"
//   })

// }

// catch(err){

//   res.status(404).json({

//     success:false,
//     err:err.message
//   })
// }


router.delete('/products',async(req,res)=>{


  try {


    let deleteProduct = await Product.findByIdAndDelete({
      _id: req.params.id
    })


    if(deleteProduct){
      res.json({
        status:true,
        message:"successfully deleted"
      })
    }
  }

  catch(err){

    res.status(500).json({
        success:false,
        err:err.message
    })
  }
})

module.exports = router;