import express from "express";

// import MyUserController from "../controllers/MyUserController";
import { jwtCheck } from "./middleware0";
// import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

// api/user
router.get('/', jwtCheck, (req: any, res) => {
  const decodedPayload = req.auth;// Access the decoded payload

  console.log(decodedPayload);
  // Example: Accessing user information from the payload
  const userId = decodedPayload.sub;

  res.json({ message: 'Welcome, your userId:' + userId });
});
// router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);
// router.post("/", jwtCheck, MyUserController.createCurrentUser);
// router.put(
//   "/",
//   jwtCheck,
//   jwtParse,
//   validateMyUserRequest,
//   MyUserController.updateCurrentUser
// );

export default router;
