import { Response, Request, NextFunction } from "express";
import DetailUserService from "../../services/user/DetailUserService";

class DetailUserController{
    async handle(req: Request, res: Response, next: NextFunction){
        const user_id = req.user_id;

       const detailtUserService = new DetailUserService();
       const user = await detailtUserService.handle(user_id);

        res.status(200).json({ message: 'Usuário encontrado com sucesso!', user});
    }
}

export default DetailUserController;