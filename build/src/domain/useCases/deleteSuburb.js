"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSuburbByIdUseCase = void 0;
class deleteSuburbByIdUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    async execute(id) {
        try {
            const result = await this.repo.deleteSuburbById(id);
            return result;
        }
        catch (error) {
            throw new Error("error");
        }
    }
}
exports.deleteSuburbByIdUseCase = deleteSuburbByIdUseCase;
//# sourceMappingURL=deleteSuburb.js.map