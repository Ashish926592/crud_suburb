import { DataTypes, Model } from "sequelize";

import {sequelize} from "./sequalizeconnection"

export class suburbSequelize extends Model {}

suburbSequelize.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    postcode:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{tableName:"suburb",sequelize,timestamps:false});