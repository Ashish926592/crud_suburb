"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const suburbRoutes_1 = require("./routes/suburbRoutes");
const app = (0, express_1.default)();
const port = 3000;
app.use("/user", suburbRoutes_1.Router);
app.listen(port, () => {
    console.log('Listening on port 3000');
});
//# sourceMappingURL=app.js.map