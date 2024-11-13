import express from "express";

import { jwtCheck } from "../auth/middleware0";
import { validateUserRequest } from "./middleware";
import UserController from "./controller0";

const router = express.Router();

// /api/my/user
router.get("/", jwtCheck, UserController.getCurrentUser);
router.post("/", jwtCheck, UserController.createCurrentUser);
router.put("/", jwtCheck, validateUserRequest, UserController.updateCurrentUser);

export default router;
