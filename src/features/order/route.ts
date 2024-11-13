import express from "express";

import { jwtCheck } from "../auth/middleware0";
import OrderController from "./controller";

const router = express.Router();

router.get("/", jwtCheck, OrderController.getMyOrders);

router.post("/checkout/create-checkout-session", jwtCheck, OrderController.createCheckoutSession);

router.post("/checkout/webhook", OrderController.stripeWebhookHandler);

export default router;
