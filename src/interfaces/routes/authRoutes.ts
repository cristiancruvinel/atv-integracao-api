import { Router } from "express";
import { login } from "../controllers/authController";
import { validateDto } from "../middlewares/validateDto";
import { LoginDTO } from "../../domain/dtos/LoginDTO";

const router = Router();

router.post("/login", validateDto(() => new LoginDTO()), login);

export default router;
