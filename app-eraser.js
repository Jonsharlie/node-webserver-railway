const express = require('express');
const appEraser = express()
const port = 8080

// Servir contenido estático
appEraser.use(express.static('public'));

appEraser.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta');
});

appEraser.get('*', (req, res) => {
   // res.send('404 | Page not found');
    res.sendFile(__dirname+'/public/_404.html');
});

// appEraser.listen(8080);
appEraser.listen(port, () => {
    console.log(`Example app listening at ${port}`)
});