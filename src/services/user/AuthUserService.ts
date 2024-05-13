import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import prismaClient from "../../prisma";
import { AuthRequest } from "../../models/interfaces/auth/AuthRequest";

class AuthUserService {
    async execute({ email, password }: AuthRequest) {

        if (!email) throw new Error('O email precisa ser enviado');
        if (!password) throw new Error('A senha precisa ser enviada');

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if (!user) throw new Error('Usuário ou senha incorretos');

        const passwordMatch = await compare(password, user?.password);

        if (!passwordMatch) throw new Error('Usuário ou senha incorretos');

        const token = sign({
            email: user?.email,
            password: user?.password
        }, process.env.JWT_SECRET as string, { subject: user?.id, expiresIn: '30d' }) // Casting

        return {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            token: token
        }
    }
}

export default AuthUserService