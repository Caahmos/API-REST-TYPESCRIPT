import { Request, Response } from "express";
import DeleteProductService from "../../services/product/DeleteProductService";

export default class DeleteProductController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        if (!id) throw new Error('Id inválido!');

        const deleteProductService = new DeleteProductService();

        try {
            const deletedProduct = await deleteProductService.execute(id);
            res.status(200).json({ message: 'Produto deletado com sucesso!', deletedProduct });
        } catch (err) {
            res.status(422).json({ message: 'Erro ao deletar produto', error: err.message });
        };
    };
};