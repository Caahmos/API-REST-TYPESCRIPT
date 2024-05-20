import { Request, Response } from "express";
import FindAllProductsService from "../../services/product/FindAllProductsService";

export default class FindAllProductsController {
    async handle(req: Request, res: Response) {
        const findAllProductsService = new FindAllProductsService();
        try {
            const produts = await findAllProductsService.execute();
            res.status(200).json({ message: 'Produtos encontrados com sucesso!', produts });
        } catch (err) {
            res.status(422).json({ message: 'Erro ao procurar por produtos', error: err.message });
        }
    }
}