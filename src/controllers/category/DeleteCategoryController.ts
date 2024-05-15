import { Request, Response } from "express";
import DeleteCategoryService from "../../services/category/DeleteCategoryService";

export default class DeleteCategoryController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const deleteCategoryService = new DeleteCategoryService();
        const deletedCategory = await deleteCategoryService.execute({ id });

        res.status(200).json({ message: 'A categoria foi excluída com sucesso!', deletedCategory })
    }
}