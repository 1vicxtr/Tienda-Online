    const express = require('express');

    const app = express();
    const PORT = 3000; // Puerto en el que escuchará el servidor

    app.get('/', (req, res) => {
      res.send('¡Hola, mundo desde Express.js!'); // Envía una respuesta de texto
      console.log('Servidor Express está funcionando correctamente');
    });

    app.listen(PORT);