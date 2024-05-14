import { Request, Response } from "express";
import { CategoryRequest } from "../../models/interfaces/category/CategoryRequest";
import CreateCategoryService from "../../services/category/CreateCategoryService";

export default class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { name }: CategoryRequest = req.body;

        const createCategoryService = new CreateCategoryService();
        const category = await createCategoryService.execute({ name });

        return res.status(200).json({ message: 'Categoria criada com sucesso!', category });

    }
}