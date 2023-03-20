import express from "express";
import { deleteProduct, getProducts, saveProduct, singleProduct } from "../controllers/ProductController.js";

const router = express.Router();


router.get("/products", getProducts);
router.post("/products", saveProduct);
router.get("/product/:id", singleProduct);
router.delete("/product/:id", deleteProduct);

export default router;