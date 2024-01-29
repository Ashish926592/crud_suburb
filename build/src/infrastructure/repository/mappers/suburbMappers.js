"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suburbMapper = void 0;
const suburbEntity_1 = require("../../../domain/entities/suburbEntity");
class suburbMapper {
    static toDomain(raw) {
        const data = [];
        raw.forEach(element => {
            const suburbDetais = new suburbEntity_1.suburbEntity(element.dataValues.name, element.dataValues.postcode, element.dataValues.state, element.dataValues.id);
            data.push(suburbDetais);
        });
        return data;
    }
}
exports.suburbMapper = suburbMapper;
//# sourceMappingURL=suburbMappers.js.map