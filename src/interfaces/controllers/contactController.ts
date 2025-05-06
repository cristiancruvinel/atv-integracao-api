import { Request, Response } from "express";
import { AppDataSource } from "../../infrastructure/database/data-source";
import { Contact } from "../../domain/entities/Contact";
import { User } from "../../domain/entities/User";

export const createContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const contactRepo = AppDataSource.getRepository(Contact);
    const userRepo = AppDataSource.getRepository(User);

    const userId = (req as any).userId;
    const user = await userRepo.findOneBy({ id: userId });

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado." });
      return;
    }

    const contact = contactRepo.create({
      ...req.body,
      user,
    });

    const saved = await contactRepo.save(contact);
    res.status(201).json(saved);
  } catch (error) {
    console.error("Erro ao criar contato:", error);
    res.status(500).json({ message: "Erro interno ao criar contato." });
  }
};

export const listContacts = async (_req: Request, res: Response): Promise<void> => {
  try {
    const contacts = await AppDataSource.getRepository(Contact).find({
      relations: ["user"],
    });

    res.json(contacts);
  } catch (error) {
    console.error("Erro ao listar contatos:", error);
    res.status(500).json({ message: "Erro interno ao listar contatos." });
  }
};
