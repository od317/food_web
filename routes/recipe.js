const express=require('express');
const { route } = require('./about');
const router=express.Router();
router.use(express.static('public'));

router.get('/',(req,res)=>{
    res.render('recipes')
})


router.get('/:id',(req,res)=>{
    res.render('view',{title:req.params.id});
})


module.exports=router;