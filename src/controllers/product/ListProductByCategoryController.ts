import { Request, Response } from "express";
import ListProductsByCategoryService from "../../services/product/ListProductsByCategoryService";

export default class ListProductsByCategoryController {
    async handle(req: Request, res: Response) {
        const { category_id } = req.params;

        const listProductsByCategoryService = new ListProductsByCategoryService();

        try {
            const products = await listProductsByCategoryService.execute({ category_id });
            res.status(200).json({ message: 'Produtos encontrados com sucesso!', products });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Erro ao listar produtos por categoria', error: err.message });
        }
    }
}
