import { suburbEntity } from "../../../domain/entities/suburbEntity";
import { suburbRepo } from "../../../domain/interfaces/repos/suburbRepo";
import { suburbMapper } from "../mappers/suburbMappers";
import { suburbSequelize } from "../sequalize/sequalizeModel";

export class SuburbRepoImplementation implements suburbRepo{
    async getSuburbById(id: number): Promise<suburbEntity | undefined> {
        const data = await suburbSequelize.findByPk(id);
        if(!data){
            return;
        }
        const result = suburbMapper.toDomain([data])
        return result[0];
    }
    async createSuburb(suburb: suburbEntity): Promise<number | undefined> {
       const data = await suburbSequelize.create({
        name:suburb.getName(),
        postcode:suburb.getPostcode(),
        state:suburb.getState(),
        id:suburb.getId()
       })
       return data.dataValues.id;
    }
    async updateSuburb(updatedSuburb: suburbEntity): Promise<boolean> {
        const numOfRowsUpdated = await suburbSequelize.update({
            name: updatedSuburb.getName(),
            postcode: updatedSuburb.getPostcode(),
            state: updatedSuburb.getState(),
            id:updatedSuburb.getId()
        }, {
            where: {
                id: updatedSuburb.getId()
            }
        });
    
        return numOfRowsUpdated[0] > 0; // Returns true if at least one row was updated
    }
    
   
    async getSuburb(): Promise<suburbEntity[]> {
        const data = await suburbSequelize.findAll();
        return suburbMapper.toDomain(data)
        
    }

    async deleteSuburbById(id: number): Promise<string | undefined> {
        const suburbToDelete = await suburbSequelize.findByPk(id);

        if(suburbToDelete){
            await suburbToDelete.destroy();
            return `Suburb with ID Data${id} deleted successfully.`
        }
    }
}