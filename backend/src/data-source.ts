import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from 'dotenv';

dotenv.config(); // Charge les variables d'environnement du .env

export const AppDataSource = new DataSource({
    type: "postgres", // Type de base de données
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USER || "bryan",
    password: process.env.DB_PASSWORD || "bryan237",
    database: process.env.DB_NAME || "aeromaintain",
    synchronize: true,
    logging: false,
    entities: ["src/entity/**/*.ts"],
    migrations: [], 
    subscribers: [],
});