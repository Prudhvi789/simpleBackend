var express = require("express");
var router = express.Router();

let users=[];

//const port = process.env.PORT || 5000

router.get('/',(req,res)=>{
    res.json(users)
})

router.post('/',(req,res) => {
    userData= {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password
    }
    users.push(userData)
    res.json({
        message:"success"
    })
})

module.exports = router;