import { Router } from "express";
import { usersController } from "../controllers/usersController.js";
import validateUser from "../middlewares/users/validateUser.middlewares.js";

const router = Router();

router.post("/", validateUser, usersController.postUser);

router.get("/", usersController.getUser);

export default router;
