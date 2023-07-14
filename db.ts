import mysql from "mysql2";


 export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: "root",
  password: "INFINITA3",
  database: "medicinadelashadas",
});