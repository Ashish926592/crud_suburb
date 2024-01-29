"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuburbController = void 0;
const suburbGateway_1 = require("../../gateways/suburbGateway");
class SuburbController {
    async createSuburb(req, res) {
        try {
            const name = req.query.name;
            const postcode = req.query.postcode;
            const state = req.query.state;
            const id = req.query.id;
            const data = {
                name,
                postcode,
                state,
                id
            };
            const suburbId = await new suburbGateway_1.SuburbGateway().createSuburb(data);
            res.status(201).json({ message: `Data successfully added at ID: ${suburbId}` });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    }
    async updateSuburb(req, res) {
        try {
            const name = req.query.name;
            const postcode = req.query.postcode;
            const state = req.query.state;
            const id = req.query.id;
            const data = {
                name,
                postcode,
                state,
                id
            };
            const status = await new suburbGateway_1.SuburbGateway().updateSuburb(data);
            res.status(201).json({ message: `Data successfully updated status: ${status}` });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    }
    async getAllsuburb(req, res) {
        try {
            const suburbs = await new suburbGateway_1.SuburbGateway().getAllsuburb();
            res.status(200).json(suburbs);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    }
    async getSuburbById(req, res) {
        try {
            const idParam = req.params.id;
            const id = parseInt(idParam, 10);
            if (isNaN(id)) {
                console.log(typeof (id));
                res.status(400).json({ error: "Invalid id parameter" });
                return;
            }
            const user = await new suburbGateway_1.SuburbGateway().getSuburbById(id);
            if (!user) {
                res.status(404).json({ error: "User not found" });
                return;
            }
            res.status(200).json(user);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteSuburbById(req, res) {
        try {
            const idParam = req.params.id;
            const id = parseInt(idParam, 10);
            if (isNaN(id)) {
                console.log(typeof (id));
                res.status(400).json({ error: "Invalid id parameter" });
                return;
            }
            const user = await new suburbGateway_1.SuburbGateway().deleteSuburbById(id);
            if (!user) {
                res.status(404).json({ error: "User not found" });
                return;
            }
            res.status(200).json(user);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.SuburbController = SuburbController;
//# sourceMappingURL=suburbController.js.map