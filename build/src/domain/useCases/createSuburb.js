"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSuburbUseCase = void 0;
const suburbEntity_1 = require("../entities/suburbEntity");
class createSuburbUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    async execute(aParmas) {
        try {
            const parmas = new suburbEntity_1.suburbEntity(aParmas.name, aParmas.postcode, aParmas.state, aParmas.id);
            const result = await this.repo.createSuburb(parmas);
            return result;
        }
        catch (error) {
            throw new Error("error");
        }
    }
}
exports.createSuburbUseCase = createSuburbUseCase;
//# sourceMappingURL=createSuburb.js.map