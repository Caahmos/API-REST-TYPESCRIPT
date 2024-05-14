import { UpdateCategoryRequest } from "../../models/interfaces/category/UpdateCategoryRequest";
import prismaClient from "../../prisma";

export default class UpdateCategoryService {
    async execute({name, id}: UpdateCategoryRequest ){
        if(!name) throw new Error('Invalid name!');
        if(!id) throw new Error('Invalid id!');

        const category = await prismaClient.category.update({ 
            where: {
                id: id
            },
            data: {
                name: name
            },
            select: {
                id: true,
                name: true
            }
        });

        return category;
    }
}