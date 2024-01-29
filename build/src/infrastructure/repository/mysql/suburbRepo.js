"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuburbRepoImplementation = void 0;
const suburbMappers_1 = require("../mappers/suburbMappers");
const sequalizeModel_1 = require("../sequalize/sequalizeModel");
class SuburbRepoImplementation {
    async getSuburbById(id) {
        const data = await sequalizeModel_1.suburbSequelize.findOne({ where: { id } });
        if (!data) {
            return undefined; // Return undefined when no record is found
        }
        return suburbMappers_1.suburbMapper.toDomain(data);
    }
    async createSuburb(suburb) {
        const data = await sequalizeModel_1.suburbSequelize.create({
            name: suburb.getName(),
            postcode: suburb.getPostcode(),
            state: suburb.getState(),
            id: suburb.getId()
        });
        return data.dataValues.id;
    }
    async updateSuburb(updatedSuburb) {
        const numOfRowsUpdated = await sequalizeModel_1.suburbSequelize.update({
            name: updatedSuburb.getName(),
            postcode: updatedSuburb.getPostcode(),
            state: updatedSuburb.getState(),
            id: updatedSuburb.getId()
        }, {
            where: {
                id: updatedSuburb.getId()
            }
        });
        return numOfRowsUpdated[0] > 0; // Returns true if at least one row was updated
    }
    async getSuburb() {
        const data = await sequalizeModel_1.suburbSequelize.findAll();
        return suburbMappers_1.suburbMapper.toDomain(data);
    }
    async deleteSuburbById(id) {
        const suburbToDelete = await sequalizeModel_1.suburbSequelize.findByPk(id);
        if (suburbToDelete) {
            await suburbToDelete.destroy();
            return `Suburb with ID Data${id} deleted successfully.`;
        }
    }
}
exports.SuburbRepoImplementation = SuburbRepoImplementation;
//# sourceMappingURL=suburbRepo.js.map