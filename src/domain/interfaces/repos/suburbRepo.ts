import { suburbEntity } from "../../entities/suburbEntity";

export interface suburbRepo{
    getSuburbById(id:number):Promise<suburbEntity | undefined>;
    deleteSuburbById(id:number):Promise<string | undefined>;
    createSuburb(suburb:suburbEntity):Promise<number | undefined>;
    getSuburb():Promise<suburbEntity[]>;
    updateSuburb(suburb:suburbEntity):Promise<boolean>;
}