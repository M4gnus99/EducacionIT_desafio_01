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
//    const num = req.params.num;
    const a = frase.split(" ");
    //const resul = texto.substring(0,num);
    const opcion = parseInt(req.params.num);

    if(opcion < 0 || opcion >= 4){
        return res
        .status(400)
        .json({mensaje: "no esta dentro de los parametros permitidos"});
    }
    res.status(200).send(a[opcion]);
});





app.listen(PORT,()=>{
    console.log(`Conexion establecida en puerto ${PORT}...`);
})