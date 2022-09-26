const express = require('express');
const app = express();

const {frase} = require('./data');

const PORT = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send('Hola home');
})
app.get('/api/getFrase',(req, res)=>{
    res.send(JSON.stringify(frase));
});

app.get('/api/getLetra/:num',(req, res)=>{
    const num = req.params.num;
    const texto = frase.split(" ").join("");
    const resul = texto.charAt(num);
    res.send(`${num} : `+JSON.stringify(resul));
});

app.get('/api/getPalabra/:num', (req, res)=>{
    const num = req.params.num;
    const texto = frase.split(" ");
    const resul = texto.substring(0,num);

    res.send(JSON.stringify(resul));
});





app.listen(PORT,()=>{
    console.log(`Conexion establecida en puerto ${PORT}...`);
})