import prismaClient from "../../prisma";
import DeleteCategoryRequest from "../../models/interfaces/category/DeleteCategoryRequest";

export default class DeleteCategoryService {
    async execute({ id }: DeleteCategoryRequest) {
        if (!id) throw new Error('Id não encontrado!');

        const deletedCategory = await prismaClient.category.delete({
            where: {
                id: id
            },
            select: {
                name: true
            }
        });

        if (!deletedCategory) throw new Error('A categoria não foi encontrada!');

        return deletedCategory;
    }
}