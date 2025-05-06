import { Request, Response } from "express";
import { AppDataSource } from "../../infrastructure/database/data-source";
import { User } from "../../domain/entities/User";
import bcrypt from "bcryptjs";

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userRepo = AppDataSource.getRepository(User);
    const hashedPassword = await bcrypt.hash(req.body.senha, 10);

    const user = userRepo.create({
      ...req.body,
      senha: hashedPassword,
    });

    const saved = await userRepo.save(user);
    res.status(201).json(saved);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ message: "Erro interno ao criar usuário." });
  }
};

export const listUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await AppDataSource.getRepository(User).find({
      relations: ["contatos"],
    });

    res.json(users);
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    res.status(500).json({ message: "Erro interno ao listar usuários." });
  }
};
