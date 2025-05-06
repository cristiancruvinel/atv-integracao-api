import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/infrastructure/database/database.sqlite",
  synchronize: true, // ATENÇÃO: use false em produção!
  logging: false,
  entities: ["src/domain/entities/**/*.ts"],
  migrations: ["src/infrastructure/database/migrations/**/*.ts"],
});
