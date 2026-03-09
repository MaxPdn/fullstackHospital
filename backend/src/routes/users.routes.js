import { Router } from "express";
import { usersController } from "../controllers/usersController.js";

const router = Router();

router.post("/", usersController.postUser);

router.get("/", usersController.getUser);


export default router;
