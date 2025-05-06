import express from "express";
import { AppDataSource } from "./infrastructure/database/data-source";

import userRoutes from "./interfaces/routes/userRoutes";
import contactRoutes from "./interfaces/routes/contactRoutes";
import authRoutes from "./interfaces/routes/authRoutes"; // <-- novo

const app = express();
app.use(express.json());

app.use("/usuarios", userRoutes);
app.use("/contatos", contactRoutes);
app.use(authRoutes); // <-- inclui rota /login

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Banco de dados conectado com sucesso!");
    app.listen(3000, () => {
      console.log("🚀 Servidor rodando na porta 3000");
    });
  })
  .catch((error) => {
    console.error("❌ Erro ao conectar com o banco de dados:", error);
  });
