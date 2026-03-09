import { Router } from "express";
import usersRoutes from "./users.routes.js";
import loginRoutes from "./login.routes.js";

const router = Router();

router.use("/users", usersRoutes);

router.use("/login", loginRoutes);

export default router;
