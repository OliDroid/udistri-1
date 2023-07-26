
const dotenv = require('dotenv');
const path = require('path');

// Configuración de las variables de entorno con dotenv
dotenv.config({
  path: path.resolve(__dirname, '.env.' + process.env.NODE_ENV)
})

// Exportación de un objeto con las configuraciones de la aplicació
module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'desarrollo',  // Variable de entorno que define el entorno de ejecución (puede ser desarrollo, producción, etc.)
  HOST: process.env.HOST || 'localhost',  // Variable de entorno que define el host en el que se ejecutará la aplicación
  PORT: process.env.PORT || 3000   // Variable de entorno que define el puerto en el que se ejecutará la aplicación
}