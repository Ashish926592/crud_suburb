import { suburbRepo } from "../interfaces/repos/suburbRepo";

export class getSuburbByIdUseCase {
    constructor(private repo: suburbRepo) { }

    async execute(id: number) {
        try {
            const result = await this.repo.getSuburbById(id);
            return result;
        } catch (error) {
            throw new Error("error");
        }
    }

}
