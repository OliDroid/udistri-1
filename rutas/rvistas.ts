import express, { Request, Response } from 'express';
const rvista = express.Router();

rvista.get('/', async (req: Request, res: Response) => {
	res.render("index.ejs",{form: "inici" });
});
export { rvista };