"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suburbSequelize = void 0;
const sequelize_1 = require("sequelize");
const sequalizeconnection_1 = require("./sequalizeconnection");
class suburbSequelize extends sequelize_1.Model {
}
exports.suburbSequelize = suburbSequelize;
suburbSequelize.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    postcode: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, { tableName: "suburb", sequelize: sequalizeconnection_1.sequelize, timestamps: false });
//# sourceMappingURL=sequalizeModel.js.map