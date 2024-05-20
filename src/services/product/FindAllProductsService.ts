import prismaClient from "../../prisma";

export default class FindAllProductsService {
    async execute() {
        const products = await prismaClient.product.findMany();

        if (products.length <= 0) throw new Error('Nenhum produto cadastrado!');

        return products;
    }
}