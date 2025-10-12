const express = require('express');
const app = express();
const PORT = 3000;

const { Pool } = require('pg');

// Configuración de la conexión a la base de datos
const pool = new Pool({
  // 1. **TU USUARIO DE POSTGRES ES 'victor'**
  user: 'victor', // ¡REEMPLAZA ESTO CON TU USUARIO DE POSTGRES!
  
  // 2. **EL HOST EN LOCAL ES 'localhost'**
  host: 'localhost', 
  
  // 3. La base de datos a la que quieres conectarte
  database: 'tienda_online', 
  
  // 4. **TU CONTRASEÑA ACTUAL**
  password: '2729', // ¡REEMPLAZA ESTO CON LA CONTRASEÑA DE 'victor'!
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    console.log('Intentando conectar a la base de datos...');
    
    // Aquí se establece la conexión
    const client = await pool.connect(); 
    
    // Ejecuta la consulta
    const result = await client.query('SELECT * FROM productos');
    const productos = result.rows;
    client.release(); 

    res.json(productos);
  } catch (err) {
    // Si falla, muestra un mensaje útil en la terminal y envía error al cliente
    console.error('ERROR EN LA CONEXIÓN O CONSULTA:', err.message);
    res.status(500).send('Error en el servidor: Revisa las credenciales de la BD.');
  }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
