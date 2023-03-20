import { Sequelize } from "sequelize";

import db from "../config/Database.js";


const { DataTypes } = Sequelize;

const Product = db.define("product", {
  name: DataTypes.STRING,
  image: DataTypes.STRING,
  url: DataTypes.STRING,
}, {
  freezeTableName: true
});


(
  async () => {
    await db.sync();
  }
)();


export default Product;