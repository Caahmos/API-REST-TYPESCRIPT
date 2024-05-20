import prismaClient from "../../prisma";

interface ListProductsByCategoryIdRequest {
    category_id: string;
}

export default class ListProductsByCategoryService {
    async execute({ category_id }: ListProductsByCategoryIdRequest) {
        if (!category_id) throw new Error('Id é inválido!');

        const products = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            },
            select: {
                id: true,
                name: true,
                amount: true,
                banner: true,
                category_id: true,
                description: true,
                price: true
            }
        });

        if (products.length <= 0) throw new Error(' Nenhum produto encontrado');

        return products;
    };
};