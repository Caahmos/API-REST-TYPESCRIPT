import prismaClient from "../../prisma";
import { SaleProductRequest } from "../../models/interfaces/sale/SaleProductRequest";

export default class SaleProductService {
    async execute({ product_id, amount }: SaleProductRequest) {
        if (!product_id || !amount) throw new Error('Valores inválidos!');
        const product = await prismaClient.product.findFirst({
            where: {
                id: product_id
            }
        }); // optional chaining
        if(product?.amount > amount && amount > 0) {
            const newAmount = (product?.amount - amount)
            const newSale = await prismaClient.product.update({
                where: {
                    id: product_id
                },
                data: {
                    amount: newAmount
                },
                select: {
                    id: true,
                    name: true,
                    amount: true
                }
            });

            return newSale;
        }
    }

}