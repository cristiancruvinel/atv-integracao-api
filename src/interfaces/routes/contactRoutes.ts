import { Router } from "express";
import { createContact, listContacts } from "../controllers/contactController";
import { validateDto } from "../middlewares/validateDto";
import { CreateContactDTO } from "../../domain/dtos/CreateContactDTO";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/", authMiddleware, validateDto(() => new CreateContactDTO()), createContact);

router.get("/", authMiddleware, listContacts);

export default router;
