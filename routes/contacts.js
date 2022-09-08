const express=require('express');
const router=express.Router();
const mysql=require('mysql');

const con=mysql.createConnection({
    host:"sql6.freesqldatabase.com",
    user:"sql6516510",
    password:"HpQe9ARfGn",
    database:"sql6516510"
});

router.get('/',(req,res)=>{
    res.render('contact')
})


router.post('/',(req,res)=>{
    let name=req.body.name;
    let email=req.body.email;
    let massage=req.body.massage;
    console.log(name+" "+email+" "+massage);
    con.query(`insert into contact(name,email,massage) values("${name}","${email}","${massage}");`,(err,ress,file)=>{
        res.render('contact',{done:'Thank you'});
    })
})


module.exports=router;