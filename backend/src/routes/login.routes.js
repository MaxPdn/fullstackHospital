import { Router } from "express";
import { loginController } from "../controllers/loginControllers.js";
const router = Router();

router.post("/", loginController.loginUser);

export default router;
