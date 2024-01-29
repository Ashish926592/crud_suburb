import  express  from "express";
import { SuburbController } from "../controllers/suburbController";
const Router = express.Router();

const ISuburbController = new SuburbController();

Router.post('/create',(req,res)=> ISuburbController.createSuburb(req,res));
Router.patch('/update',(req,res)=> ISuburbController.updateSuburb(req,res));
Router.get('/all',(req,res)=> ISuburbController.getAllsuburb(req,res));
Router.get('/:id',(req,res)=> ISuburbController.getSuburbById(req,res));
Router.delete('/:id',(req,res)=> ISuburbController.deleteSuburbById(req,res));


export { Router}