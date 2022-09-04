const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, '/public'); // Se puede usar path.resolve tambien

app.use(express.static(publicPath)); // Le decimos a express que vamos a hacer uso
// de archivos estaticos ubicados en la carpeta public

app.listen(process.env.PORT || 3002, function () {
    console.log("Servidor corriendo en el puerto 3002");
});

app.get('/', (req,res) =>{
    res.send("Cambie");  // Permite enviar texto o codigo HTML
});

app.get('/mostrar_mensaje', (req,res) =>{
    res.send("Hola Mundo");  // Permite enviar texto o codigo HTML
});

app.get('/mostrar_sitio', (req,res) =>{
    res.sendFile((__dirname + '/views/home.html'));  // Permite enviar un archivo HTML
});

app.get('/login', (req,res) =>{
    res.sendFile((__dirname + '/views/login.html'));  // Permite enviar un archivo HTML
});

app.get('/register', (req,res) =>{
    res.sendFile((__dirname + '/views/register.html'));  // Permite enviar un archivo HTML
});

app.get('*', (req,res) =>{
    res.send("Ruta restringida, hemos localizado la direccion de su computador");  // Permite enviar texto o codigo HTML
});