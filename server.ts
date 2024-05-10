import express, { Request, Response, NextFunction } from 'express';
const app = express();
import router from './src/routes/routes';

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);

app.listen(5000, () => {
    console.log('O servidor está rodando!');
    console.log('http://locahost:5000');
});

