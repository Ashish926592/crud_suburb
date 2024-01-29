import { Request, Response } from "express";
import { createSuburbDto } from "../../domain/interfaces/dtos/createSuburbdtos";
import { SuburbGateway } from "../../gateways/suburbGateway";
export class SuburbController{
    public async createSuburb(req: Request, res: Response):Promise<void>{
        try{
            const name = req.query.name as string;
            const postcode = req.query.postcode as unknown as number;
            const state = req.query.state as string;
            const id = req.query.id as unknown as number;

            const data:createSuburbDto = {
                name,
                postcode,
                state,
                id
            }
            const suburbId = await new SuburbGateway().createSuburb(data);
            res.status(201).json({ message: `Data successfully added at ID: ${suburbId}` });
        }catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }

    }

    public async updateSuburb(req: Request, res: Response):Promise<void>{
        try{
            const name = req.query.name as string;
            const postcode = req.query.postcode as unknown as number;
            const state = req.query.state as string;
            const id = req.query.id as unknown as number;

            const data:createSuburbDto = {
                name,
                postcode,
                state,
                id
            }
            const status = await new SuburbGateway().updateSuburb(data);
            res.status(201).json({ message: `Data successfully updated status: ${status}` });
        }catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }

    }


    public async getAllsuburb(req:Request,res:Response):Promise<void>{
        try{
            const suburbs = await new SuburbGateway().getAllsuburb();
            res.status(200).json(suburbs);
        }catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    }

    public async getSuburbById(req:Request,res:Response):Promise<void>{
        try{
            const idParam: string = req.params.id as string;
            const id: number = parseInt(idParam, 10);

            if (isNaN(id)) {
                console.log(typeof(id));
                
                res.status(400).json({ error: "Invalid id parameter" });
                return;
            }

            const user = await new SuburbGateway().getSuburbById(id);
            if (!user) {
                res.status(404).json({ error: "User not found" });
                return;
            }

            res.status(200).json(user);
        }catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    public async deleteSuburbById(req:Request,res:Response):Promise<void>{
        try{
            const idParam: string = req.params.id as string;
            const id: number = parseInt(idParam, 10);

            if (isNaN(id)) {
                console.log(typeof(id));
                
                res.status(400).json({ error: "Invalid id parameter" });
                return;
            }

            const user = await new SuburbGateway().deleteSuburbById(id);
            if (!user) {
                res.status(404).json({ error: "User not found" });
                return;
            }

            res.status(200).json(user);
        }catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}