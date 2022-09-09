const express=require("express");
const app=express();
const bodyp=require("body-parser");
const method=require("method-override");
const expresslay=require("express-ejs-layouts");
const aboutrouter=require('./routes/about');
const reciperouter=require('./routes/recipe');
const contactrouter=require('./routes/contacts');

app.use(bodyp.urlencoded({extended:true}));
app.use(method('_method'));
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('layout','./layouts/layout');
app.use(expresslay);
app.use('/recipe',reciperouter);
app.use('/contact',contactrouter);
app.use('/about',aboutrouter);

app.get('^/$|home',(req,res)=>{
    res.render("index");
})


app.listen(process.env.PORT||3000);