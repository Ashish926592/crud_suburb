"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suburbMapper = void 0;
const suburbEntity_1 = require("../../../domain/entities/suburbEntity");
class suburbMapper {
    static toDomain(raw) {
        if (!raw) {
            return undefined;
        }
        if (Array.isArray(raw)) {
            return raw.map(element => this.convertToDomain(element));
        }
        else {
            return this.convertToDomain(raw);
        }
    }
    static convertToDomain(element) {
        return new suburbEntity_1.suburbEntity(element.dataValues.name, element.dataValues.postcode, element.dataValues.state, element.dataValues.id);
    }
}
exports.suburbMapper = suburbMapper;
//# sourceMappingURL=suburbMappers.js.map