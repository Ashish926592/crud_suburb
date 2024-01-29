"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSuburbByIdUseCase = void 0;
class getSuburbByIdUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    async execute(id) {
        try {
            const result = await this.repo.getSuburbById(id);
            return result;
        }
        catch (error) {
            throw new Error("error");
        }
    }
}
exports.getSuburbByIdUseCase = getSuburbByIdUseCase;
//# sourceMappingURL=getSuburbById.js.map