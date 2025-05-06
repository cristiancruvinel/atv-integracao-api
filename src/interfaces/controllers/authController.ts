import { Request, Response } from "express";
import { AppDataSource } from "../../infrastructure/database/data-source";
import { User } from "../../domain/entities/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = "chave-secreta"; // Em produção, use .env

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { matricula, senha } = req.body;
    const repo = AppDataSource.getRepository(User);

    const user = await repo.findOneBy({ matricula });
    if (!user) {
      res.status(401).json({ message: "Matrícula ou senha inválida" });
      return;
    }

    const valid = await bcrypt.compare(senha, user.senha);
    if (!valid) {
      res.status(401).json({ message: "Matrícula ou senha inválida" });
      return;
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ message: "Erro interno no login." });
  }
};
