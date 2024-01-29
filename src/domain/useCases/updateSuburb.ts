import { suburbEntity } from "../entities/suburbEntity";
import { createSuburbDto } from "../interfaces/dtos/createSuburbdtos";
import { suburbRepo } from "../interfaces/repos/suburbRepo";

export class updateSuburbUseCase{
    constructor(private repo:suburbRepo){}

    async execute(aParmas:createSuburbDto){
        try{
            const parmas = new suburbEntity(
                aParmas.name,
                aParmas.postcode,
                aParmas.state,
                aParmas.id
            );
            const result = await this.repo.updateSuburb(parmas);
            return result;
        }catch(error){
            throw new Error("error");
        }
    }
}