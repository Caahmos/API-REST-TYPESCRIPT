import prismaClient from "../../prisma";

class DeleteUserService {
    async execute(user_id: string) {
        if (!user_id) throw new Error('Usuário não encontrado!');

        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        });

        if (user.id !== user_id) throw new Error('Você não tem permissão para deletar outro usuário!');

        await prismaClient.user.delete({
            where: {
                id: user_id
            }
        });
    };
};

export default DeleteUserService;