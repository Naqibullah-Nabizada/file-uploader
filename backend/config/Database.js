import { Sequelize } from "sequelize";

const db = new Sequelize("image_uploader", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;