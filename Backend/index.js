const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tienda_online',
  password: '2729',
  port: 5432,
});
app.use(cors());
app.use(express.json());



let productos = [];


app.get('/productos', async (req, res) => {
  try {
    const cliente = await pool.connect();
    const resultado = await cliente.query('SELECT * FROM productos;');
    res.json(resultado.rows);
    cliente.release();
  } catch (err) {
    console.error('ERROR AL OBTENER PRODUCTOS:', err.message);
    res.status(500).send('Error al obtener productos de la base de datos.');
  }
});
app.get('/clientes', async (req, res) => {
  try {
    const cliente = await pool.connect();
    const resultado = await cliente.query('SELECT * FROM clientes;');
    res.json(resultado.rows);
    cliente.release();
  } catch (err) {
    console.error('ERROR AL OBTENER CLIENTES:', err.message);
    res.status(500).send('Error al obtener clientes de la base de datos.');
  }
});
app.get('/proveedores', async (req, res) => {
  try {
    const cliente = await pool.connect();
    const resultado = await cliente.query('SELECT * FROM proveedores;');
    res.json(resultado.rows);
    cliente.release();
  } catch (err) {
    console.error('ERROR AL OBTENER ORDENES:', err.message);
    res.status(500).send('Error al obtener ordenes de la base de datos.');
  }
});
app.get('/compras', async (req, res) => {
  try {
    const cliente = await pool.connect();
    const resultado = await cliente.query('SELECT * FROM compras;');
    res.json(resultado.rows);
    cliente.release();
  } catch (err) {
    console.error('ERROR AL OBTENER ORDENES:', err.message);
    res.status(500).send('Error al obtener ordenes de la base de datos.');
  }
});

app.post("/carrito", async (req, res) => {
  try {
    const nombre = req.body; // Se recibe del cuerpo del POST
    productos.push({ nombre });
    res.json();
  } catch (err) {
    console.log(err);
  }
})
app.get('/carrito', async (req, res) => {
  try {
    res.json(productos);
    
  } catch (err) {
    console.log(err);
  }
});








app.get('/', async (req, res) => {
  try {
    const client = await pool.connect();
    console.log('Conexión exitosa a la base de datos.');
    client.release();
    res.send('Conexión exitosa a la base de datos.');
  } catch (err) {
    console.error('ERROR EN LA CONEXIÓN:', err.message);
    res.status(500).send('Error en la conexión a la base de datos. Revisa las credenciales.');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
