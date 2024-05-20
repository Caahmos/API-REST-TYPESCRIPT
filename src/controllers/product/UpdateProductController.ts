import { Request, Response } from "express";
import ProductUpdate from "../../models/interfaces/product/ProductUpdate";
import UpdateProductService from "../../services/product/UpdateProductService";

export default class UpdateProductController {
    async handle(req: Request, res: Response) {
        const { name, amount, banner, category_id, description, price }: ProductUpdate = req.body;
        const { id } = req.params;

        const updateProductService = new UpdateProductService();

        try {
            const { originalname, filename: banner } = req.file;
            const updatedProduct = await updateProductService.execute({
                id: id,
                name: name,
                amount: amount,
                banner: banner,
                category_id: category_id,
                description: description,
                price: price
            });
            res.status(200).json({ message: 'Produto atualizado com sucesso!', updatedProduct });
        } catch (err) {
            console.log(err)
        }
    }
}