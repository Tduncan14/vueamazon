const express = require('express');

const Owner = require('../models/owner');
const upload = require('../middlewares/upload.photo');


const router = express.Router();

router.post('/owners',upload.single("photo"),async (req,res) =>{

try {
    let owner = new Owner();

     owner.name = req.body.name;
     owner.about = req.body.about;
     owner.photo = req.file.location


     await owner.save()


     console.log(owner,"owner")

     res.json({
         success:true,
         message:"owner is created"
     })

    }

  catch(err){


    res.status(500).json({
        success:false,
        err:err.message
    })
  }

     

})


// get api

router.get("/owners" , async(req,res) =>{

try{
  let owners = await Owner.find();

  res.json({
    owners:owners
  })

}

catch(err){

  res.status(500).json({
    success:false,
    err:err.message
  })
}
})


module.exports = router;