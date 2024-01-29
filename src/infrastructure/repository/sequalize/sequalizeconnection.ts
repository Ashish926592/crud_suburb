import { Sequelize } from "sequelize";

const sequelize = new Sequelize("training", "root", "123456", {
    dialect: "mysql",
    host: "localhost",
    port: 3306
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

 export {sequelize}