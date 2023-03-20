import express from "express";
import { getProducts, saveProduct } from "../controllers/ProductController.js";

const router = express.Router();


router.get("/products", getProducts);
router.post("/products", saveProduct);

export default router;