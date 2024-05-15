import { Request, Response } from "express";
import FindCategoryService from "../../services/category/FindCategoryService";

export default class FindCategoryController {
    async handle(req: Request, res: Response) {

        const findCategoryService = new FindCategoryService();
        const category = await findCategoryService.execute();

        res.status(200).json({ message: 'A categoria foi encontrada!', category });
    }
}