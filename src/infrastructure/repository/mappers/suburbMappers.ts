import { suburbEntity } from "../../../domain/entities/suburbEntity";
import { suburbSequelize } from "../sequalize/sequalizeModel";

export class suburbMapper{
    static toDomain(raw: suburbSequelize[]){
        const data:suburbEntity[] = [];
        raw.forEach(element => {
            const suburbDetais = new suburbEntity(
                element.dataValues.name,
                element.dataValues.postcode,
                element.dataValues.state,
                element.dataValues.id
            );

            data.push(suburbDetais);
        })
        return data;
    }
  
}