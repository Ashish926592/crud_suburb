"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const suburbController_1 = require("../controllers/suburbController");
const Router = express_1.default.Router();
exports.Router = Router;
const ISuburbController = new suburbController_1.SuburbController();
Router.post('/create', (req, res) => ISuburbController.createSuburb(req, res));
Router.patch('/update', (req, res) => ISuburbController.updateSuburb(req, res));
Router.get('/all', (req, res) => ISuburbController.getAllsuburb(req, res));
Router.get('/:id', (req, res) => ISuburbController.getSuburbById(req, res));
Router.delete('/:id', (req, res) => ISuburbController.deleteSuburbById(req, res));
//# sourceMappingURL=suburbRoutes.js.map