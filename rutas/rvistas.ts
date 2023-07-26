// Importación de módulos y paquetes
import express, { Request, Response } from 'express';
const rvista = express.Router();

/*Define el inicio*/ 
rvista.get('/', async (req: Request, res: Response) => {
	res.render("index.ejs",{form: "inici" });
});
export { rvista };










/*parecía ser la mejor opción tener un archivo de vistas.  ? */