import prismaClient from "../../prisma";

export default class DeleteProductService {
    async execute(id: string){

        const deletedProduct = await prismaClient.product.delete({
            where: {
                id: id
            }
        });

        if(!deletedProduct) throw new Error('O produto não foi deletado!');

        return deletedProduct;
    }
}