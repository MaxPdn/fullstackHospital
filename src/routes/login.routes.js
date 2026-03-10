import { Router } from "express";
import { loginController } from "../controllers/loginControllers.js";
import validateLogin from "../middlewares/login/validateLogin.middlewares.js";
const router = Router();

router.post("/", validateLogin, loginController.loginUser);

export default router;
