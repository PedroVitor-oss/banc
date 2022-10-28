const express = require('express');
const app = express();
const port = process.env.PORT||3000;

//configuração de handlebars
const handlebars	= require('express-handlebars');
app.engine('handlebars', handlebars.engine('main'));
app.set('view engine','handlebars') ;
app.set('views','./view');
//arquivos estaticos
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));


app.get('/',(req,res)=>{
    res.render("login");
})
app.post('/conta',(req,res)=>{
    res.render("conta");
})

app.listen(port,console.log("aberto e funcionando "))