import express, { Request, Response, NextFunction } from 'express';

import 'express-async-errors';
const app = express();
import router from './src/routes/routes';
import cors from 'cors'
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import path from 'node:path';

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, 'tmp')));
app.use(express.urlencoded({extended: true}));
app.use(cors({ credentials: true, origin: '3000'}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/v1', router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) return res.status(400).json({error: err.message});

    return res.status(500).json({ status: 'error', message: 'Internal Server Error'})
})

app.get('terms', (req: Request, res: Response) => {
    return res.json({
        message: 'Termos de serviço'
    })
})

app.listen(5000, () => {
    console.log('O servidor está rodando!');
    console.log('http://locahost:5000');
});

