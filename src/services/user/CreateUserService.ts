import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';
import { UserRequest } from '../../models/interfaces/user/UserRequest';

class CreateUserService {
    async execute({ name, email, password }: UserRequest) {
        if (!email) throw new Error('Email incorrect')

        const userAlreadExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if (userAlreadExists) throw new Error('Email já está cadastrado!')

        const passwordHash = await hash(password, 10);

        const user = prismaClient.user.create({
            data: {
                name,
                email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user;
    }
}

export default CreateUserService;