import { suburbRepo } from "../interfaces/repos/suburbRepo";

export class deleteSuburbByIdUseCase{
    constructor(private repo:suburbRepo){}

    async execute(id:number){
        try{
            const result = await this.repo.deleteSuburbById(id);
            return result;
        }catch(error){
            throw new Error("error");
        }
    }
}