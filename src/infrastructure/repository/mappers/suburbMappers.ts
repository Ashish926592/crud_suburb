import { suburbEntity } from "../../../domain/entities/suburbEntity";
import { suburbSequelize } from "../sequalize/sequalizeModel";

export class suburbMapper{
    static toDomain(raw:suburbSequelize | suburbSequelize[] | null):suburbEntity |suburbEntity[] | undefined{
        if (!raw) {
            return undefined; 
        }

        if (Array.isArray(raw)) {
            return raw.map(element => this.convertToDomain(element));
        } else {
            return this.convertToDomain(raw);
        }
    }

    private static convertToDomain(element:suburbSequelize):suburbEntity{
        return new suburbEntity(
            element.dataValues.name,
            element.dataValues.postcode,
            element.dataValues.state,
            element.dataValues.id
        );
    }
  
}