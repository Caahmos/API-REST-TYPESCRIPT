import { Request, Response, NextFunction } from "express";
import DeleteUserService from "../../services/user/DeleteUserService";

export class DeleteUserController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const deleteUserService = new DeleteUserService();
        deleteUserService.execute(user_id);

        res.status(200).json({ message: 'Usuário deletado com sucesso!' });
    };
};
