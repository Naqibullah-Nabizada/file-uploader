import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import ProductRoute from "./routes/ProductRoute.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(ProductRoute);
app.use(express.static("public"));

app.listen(5000, () => console.log('server is running'));