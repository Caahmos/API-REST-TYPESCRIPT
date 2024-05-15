import prismaClient from "../../prisma";
import ProductRequest from "../../models/interfaces/product/ProductRequest";

export default class CreateProductService{
    async execute({name, price, description, banner, category_id, amount}: ProductRequest){
        if(!name) throw new Error('Informe o nome do produto!');
        if(!price) throw new Error('Informe o preço do produto!');
        if(!description) throw new Error('Informe a descrição do produto!');
        if(!category_id) throw new Error('Id da categoria inválido!');
        if(!banner) throw new Error('Informe a imagem do produto!');
        if(!amount) throw new Error('Informe a quantidade do produto!');

        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id,
                amount: +amount
            }
        });

        return product;
    }
}