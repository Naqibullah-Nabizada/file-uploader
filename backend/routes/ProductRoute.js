import express from "express";
import { deleteProduct, getProducts, saveProduct, singleProduct, updateProduct } from "../controllers/ProductController.js";

const router = express.Router();


router.get("/products", getProducts);
router.post("/products", saveProduct);
router.get("/product/:id", singleProduct);
router.delete("/product/:id", deleteProduct);
router.put("/product/:id", updateProduct);

export default router;