const http = require('node:http');
const express = require('express');
const app = express();
const path = require('path');

//Dispnsable para mostrar el path en la terminal
app.use((req, res, next) => {
  const parsedPath = path.parse(req.path);
  console.log('Ruta solicitada:', parsedPath);
  next();
});

// Ruta principal
app.get('/', (req, res) => {
  res.send(`
        <h1>Ruta Principal</h1>
        <p>Estás en: ${req.path}</p>
        <nav>
            <a href="/about">About</a>
            <a href="/contact"> Contact</a>
            <a href="/product"> Products</a>
        </nav>
    `);
});

// Ruta /about
app.get('/about', (req, res) => {
  res.send(`
        <h1>Acerca de</h1>
        <p>Estás en: ${req.path}</p>
        <nav>
            <a href="/">Home</a>
            <a href="/contact"> Contacto</a>
            <a href="/product"> Products</a>
        </nav>
    `);
});

// Ruta /contact
app.get('/contact', (req, res) => {
  res.send(`
        <h1>Contacto</h1>
        <p>Estás en: ${req.path}</p>
        <nav>
            <a href="/">Home</a>
            <a href="/about">Acerca de</a>
            <a href="/product"> Products</a>
        </nav>
    `);
});

//manjamos el error 404 Page fauld"
app.use((req, res) => {
  res
    .status(404)
    .send('<h1>Página con encontrada Eror 404</h1><a href="/">Home</a>');
});

// Ejecución del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Node.js está escuchando en el puerto ${PORT}.`);
});
