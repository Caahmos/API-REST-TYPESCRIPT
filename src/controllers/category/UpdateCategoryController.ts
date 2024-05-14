import { Request, Response } from "express";
import UpdateCategoryService from "../../services/category/UpdateCategoryService";
import { UpdateCategoryRequest } from "../../models/interfaces/category/UpdateCategoryRequest";

export default class UpdateCategoryController {
    async handle(req: Request, res: Response) {
        const { name }: UpdateCategoryRequest = req.body;
        const { id } = req.params;

        const updatedCategoryService = new UpdateCategoryService();
        const updatedCategory = await updatedCategoryService.execute({ name, id });

        res.status(200).json({ message: 'Categoria foi atualizada com sucesso!', updatedCategory });
    }
}