"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllSuburbUseCase = void 0;
class getAllSuburbUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    async execute() {
        try {
            const result = await this.repo.getSuburb();
            return result;
        }
        catch (error) {
            throw new Error("error");
        }
    }
}
exports.getAllSuburbUseCase = getAllSuburbUseCase;
//# sourceMappingURL=getAllSuburb.js.map