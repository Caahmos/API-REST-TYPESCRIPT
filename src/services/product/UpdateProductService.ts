import prismaClient from "../../prisma";
import ProductUpdate from "../../models/interfaces/product/ProductUpdate";

export default class UpdateProductService{
    async execute({ id, name, amount, banner, category_id, description, price }: ProductUpdate){
        if(!id) throw new Error('Id não encontrado!');
        
        const product = await prismaClient.product.findFirst({ where: {
            id: id
        }});

        if(!product) throw new Error('Produto inválido!');

        if(name) product.name = name;
        if(amount) product.amount = amount;
        if(banner) product.banner = banner;
        if(category_id) product.category_id = category_id;
        if(description) product.description = description;
        if(price) product.price = price;

        const updatedProduct = await prismaClient.product.update({
            where: {
                id: id
            },
            data: product,
            select: {
                id: true,
                name: true,
                amount: true,
                banner: true,
                category_id: true,
                description: true,
                price: true
            }
        })

        if(!updatedProduct) throw new Error('Erro ao atualizar o produto!');

        return updatedProduct;
    }
}