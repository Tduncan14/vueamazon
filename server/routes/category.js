const router = require('express').Router();
const Category = require('../models/category');


//post request


router.post('/catergories', async (req,res) =>{

  try{
      const category = new Category();

        category.type = req.body.type;


        await category.save()


        res.json({
            success:true,
            message:'catergory created'
        })


  }

  catch(err){

    res.status(500).json({
        success:false,
        message:err.message
    })

  }
})


module.exports = router