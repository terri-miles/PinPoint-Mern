import express from "express";
import {
  createCustomer,
  getCustomers,
  getCustomer,
} from "../controllers/customer.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.route("/").post(verifyToken, createCustomer);
router.route("/").get(verifyToken, getCustomers);
router.route("/single/:id").get(verifyToken, getCustomer);

export default router;
