import { suburbEntity } from "../entities/suburbEntity";
import { createSuburbDto } from "../interfaces/dtos/createSuburbdtos";
import { suburbRepo } from "../interfaces/repos/suburbRepo";

export class createSuburbUseCase{
    constructor(private repo:suburbRepo){}

    async execute(aParmas:createSuburbDto){
        try{
            const parmas = new suburbEntity(
                aParmas.name,
                aParmas.postcode,
                aParmas.state,
                aParmas.id
            );
            const result = await this.repo.createSuburb(parmas);
            return result;
        }catch(error){
            throw new Error("error");
        }
    }
}