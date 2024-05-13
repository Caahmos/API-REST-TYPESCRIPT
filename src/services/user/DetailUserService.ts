import prismaClient from "../../prisma";
import { Response, Request, NextFunction } from "express";

class DetailUserService {
    async handle(user_id: string) {
        if (user_id) {
            const user = await prismaClient.user.findFirst({
                where: {
                    id: user_id
                },
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            });

            if(!user) throw new Error('Usuário não encontrado!');

            return user
        }
    }
}

export default DetailUserService;