import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
const app = express();
import router from './src/routes/routes';

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) return res.status(400).json({error: err.message});

    return res.status(500).json({ status: 'error', message: 'Internal Server Error'})
})

app.listen(5000, () => {
    console.log('O servidor está rodando!');
    console.log('http://locahost:5000');
});

