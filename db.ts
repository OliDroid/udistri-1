// Importación del módulo mysql2
import mysql from "mysql2";

// Configuración de la conexión con la base de datos MySQL
 export const db = mysql.createConnection({
  host: process.env.DB_HOST,    // Dirección del servidor de la base de datos, se obtiene de la variable de entorno DB_HOST
  port: ***,     // Puerto del servidor de la base de datos, por defecto es el puerto 3306
  user: "***",// Nombre de usuario para acceder a la base de datos
  password: "***",    // Contraseña para acceder a la base de datos"
  database: "***",  // Nombre de la base de datos a la que se desea conectar
});