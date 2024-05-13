import { Request, Response, response } from 'express';
import CreateUserService from '../../services/user/CreateUserService';
import { UserRequest } from '../../models/interfaces/user/UserRequest';

export default class CreateUserController {
    async handle(req: Request, res: Response) {
            const { email, name, password }: UserRequest = req.body;
            const createUserService = new CreateUserService();
            const user = await createUserService.execute({ email, name, password });

            return res.status(201).json({ message: 'Usuário criado com sucesso!', user });
    }
}
