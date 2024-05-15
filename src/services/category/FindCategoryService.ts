import prismaClient from "../../prisma";

export default class FindCategoryService {
    async execute() {

        const category = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true
            }
        });

        if (!category) throw new Error(' A categoria não foi encontrada! ');

        return category;
    }
}