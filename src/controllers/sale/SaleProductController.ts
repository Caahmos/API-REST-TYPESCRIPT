import { Request, Response } from "express";
import SaleProductService from "../../services/sale/SaleProductService";

export default class SaleProductController {
    async handle(req: Request, res: Response) {
        const { amount } = req.body;
        const { product_id } = req.params;

        if (!amount || !product_id) throw new Error('Valor ou Id inválidos!');

        const saleProductService = new SaleProductService();

        try {
            const newProduct = await saleProductService.execute({ product_id, amount });
            res.status(201).json({ message: 'Produto vendido com sucesso!', newProduct });
        } catch (err) {
            res.status(422).json({ message: 'Erro ao vender o produto!', error: err.message });
        }
    }
}