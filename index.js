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
//caregando banco de dados
let contas// = require('./contas.json');
const fs = require('fs');
//configurando body-parse
const bodyPar = require('body-parser');
app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({ extended: false, limit: '20mb' }));

fs.readFile('./contas.json','utf-8',(erro,data)=>{
  
        contas = JSON.parse(data);
        console.log(data)
})


app.get('/',(req,res)=>{
        res.render("login",{contas:contas});
})
app.post('/conta',(req,res)=>{
        res.render("conta",{contas:contas});
})
app.post('/addcont',(req,res)=>{
    let newConta = {
            "id":contas.length,
            "dono":req.body.nome,
            "senha":req.body.senha,
            "agencia":req.body.agencia,
            "conta":req.body.conta,
            "saldo":0.0
    }
    contas.push(newConta);
    console.log(newConta)
    fs.writeFile('./contas.json',JSON.stringify(contas,null,2),()=>{
        console.log("nova conta cadastrada")
    })
        res.render("card",{
          
            dono:req.body.nome,
            senha:req.body.senha,
            agencia:req.body.agencia,
            conta:req.body.conta,
           
    })
    
})
app.post('/addsaldo',(req,res)=>{
    let valor = req.body.saldo;
    let id = 0;
    for(c of contas){
        if(c.conta == req.body.conta){
            let valAnt = Number(c.saldo)
            valAnt+=Number(valor);
            //c.saldo = Number(valAnt);
            c.saldo =(valAnt);
            id = c.id
        }
    }
    fs.writeFile('./contas.json',JSON.stringify(contas,null,2),()=>{
        console.log("saldo adicionado")
    })
    res.render('transferir',{id:id});
})
app.get("/transferencia",(req,res)=>{
    res.render("transferencia",{contas:contas});
})
app.post('/transferir',(req,res)=>{
    let valor = req.body.valor;
    let  id  = 0;
    for(c of contas){
        if(c.conta == req.body.paraConta){
            let valAnt = Number(c.saldo)
            valAnt+=Number(valor);
            //c.saldo = Number(valAnt);
            c.saldo =(valAnt);

        }
    }
    for(c of contas){
        
        if(c.conta == req.body.daConta){
            let valAnt = Number(c.saldo)
            valAnt-=valor
            c.saldo = valAnt;
            id = c.id;
        }
    }
    
    fs.writeFile('./contas.json',JSON.stringify(contas,null,2),()=>{
        console.log("transição feita")
    })
    res.render('transferir',{id:id});
})
app.get('/adm',(req,res)=>{
    res.render('adm',{contas:contas});
})

app.listen(port,console.log("aberto e funcionando "))