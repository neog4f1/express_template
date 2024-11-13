import express from "express";
import multer from "multer";

import { jwtCheck } from "../auth/middleware0";
import { validateRestaurantRequest } from "./middleware";
import RestaurantController from "./controller";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

router.get("/order", jwtCheck, RestaurantController.getRestaurantOrders);

router.patch("/order/:orderId/status", jwtCheck, RestaurantController.updateOrderStatus);

router.get("/", jwtCheck, RestaurantController.getRestaurant);

router.post("/", upload.single("imageFile"), validateRestaurantRequest, jwtCheck, RestaurantController.createRestaurant);

router.put("/", upload.single("imageFile"), validateRestaurantRequest, jwtCheck, RestaurantController.updateRestaurant);

export default router;
