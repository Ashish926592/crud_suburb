"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("training", "root", "123456", {
    dialect: "mysql",
    host: "localhost",
    port: 3306
});
exports.sequelize = sequelize;
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
//# sourceMappingURL=sequalizeconnection.js.map