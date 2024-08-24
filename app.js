const app = require('./app-express-routes.js');

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Node.js está escuchando en el puerto ${PORT}.`);
});
