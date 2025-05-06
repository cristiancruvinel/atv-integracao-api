import { Router } from "express";
import { createUser, listUsers } from "../controllers/userController";
import { validateDto } from "../middlewares/validateDto";
import { CreateUserDTO } from "../../domain/dtos/CreateUserDTO";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/", validateDto(() => new CreateUserDTO()), createUser);

router.get("/", authMiddleware, listUsers);

router.get("/protegida", authMiddleware, (req, res) => {
  res.json({
    message: "Acesso autorizado!",
    userId: (req as any).userId,
  });
});

export default router;
