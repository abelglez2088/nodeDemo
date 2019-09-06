const express=require('express');
const app=express();

qapp.get('/',(req,res)=>{
    res.send(`<!doctype html><html><head></head><body><h1>      
    Mi primer pagina</h1></body></html>`);
});
const server=app.listen(8888, ()=>{
    console.log('servidor we iniciado');
});