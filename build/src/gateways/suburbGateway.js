"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuburbGateway = void 0;
const createSuburb_1 = require("../domain/useCases/createSuburb");
const deleteSuburb_1 = require("../domain/useCases/deleteSuburb");
const getAllSuburb_1 = require("../domain/useCases/getAllSuburb");
const getSuburbById_1 = require("../domain/useCases/getSuburbById");
const updateSuburb_1 = require("../domain/useCases/updateSuburb");
const suburbRepo_1 = require("../infrastructure/repository/mysql/suburbRepo");
class SuburbGateway {
    constructor() {
        this.suburbRepo = new suburbRepo_1.SuburbRepoImplementation();
    }
    createSuburb(suburb) {
        const createSuburb = new createSuburb_1.createSuburbUseCase(this.suburbRepo);
        return createSuburb.execute(suburb);
    }
    updateSuburb(suburb) {
        const updateSuburb = new updateSuburb_1.updateSuburbUseCase(this.suburbRepo);
        return updateSuburb.execute(suburb);
    }
    getAllsuburb() {
        const getAllsuburb = new getAllSuburb_1.getAllSuburbUseCase(this.suburbRepo);
        return getAllsuburb.execute();
    }
    getSuburbById(id) {
        const getSuburbById = new getSuburbById_1.getSuburbByIdUseCase(this.suburbRepo);
        return getSuburbById.execute(id);
    }
    deleteSuburbById(id) {
        const deleteSuburbById = new deleteSuburb_1.deleteSuburbByIdUseCase(this.suburbRepo);
        return deleteSuburbById.execute(id);
    }
}
exports.SuburbGateway = SuburbGateway;
//# sourceMappingURL=suburbGateway.js.map