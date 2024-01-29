import { createSuburbDto } from "../domain/interfaces/dtos/createSuburbdtos";
import { createSuburbUseCase } from "../domain/useCases/createSuburb";
import { deleteSuburbByIdUseCase } from "../domain/useCases/deleteSuburb";
import { getAllSuburbUseCase } from "../domain/useCases/getAllSuburb";
import { getSuburbByIdUseCase } from "../domain/useCases/getSuburbById";
import { updateSuburbUseCase } from "../domain/useCases/updateSuburb";
import { SuburbRepoImplementation } from "../infrastructure/repository/mysql/suburbRepo";

export class SuburbGateway{
    suburbRepo: SuburbRepoImplementation;

    constructor(){
        this.suburbRepo = new SuburbRepoImplementation();
    }

    createSuburb(suburb: createSuburbDto){
        const createSuburb = new createSuburbUseCase(this.suburbRepo);

        return createSuburb.execute(suburb);

    }

    updateSuburb(suburb: createSuburbDto){
        const createSuburb = new updateSuburbUseCase(this.suburbRepo);

        return createSuburb.execute(suburb);

    }
    getAllsuburb(){
        const getAllsuburb = new getAllSuburbUseCase(this.suburbRepo);

        return getAllsuburb.execute();
    }

    getSuburbById(id:number){
        const getSuburbById = new getSuburbByIdUseCase(this.suburbRepo);
        return getSuburbById.execute(id);
    }

    deleteSuburbById(id:number){
        const deleteSuburbById = new deleteSuburbByIdUseCase(this.suburbRepo);
        return deleteSuburbById.execute(id);
    }
}