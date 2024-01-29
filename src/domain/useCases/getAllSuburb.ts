import { suburbRepo } from "../interfaces/repos/suburbRepo";

export class getAllSuburbUseCase{
    constructor(private repo:suburbRepo){}

    async execute(){
        try{
            const result = await this.repo.getSuburb();
            return result;
        }catch(error){
            throw new Error("error");
        }
      
    }
}