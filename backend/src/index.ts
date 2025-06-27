import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { AppDataSource } from "./data-source";

// Charger les variables d'environnement du fichier .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Middleware CORS pour permettre les requêtes depuis votre frontend
app.use(cors());

// Route de base
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API AeroMaintain !');
});

// Connexion à la Base de données
AppDataSource.initialize()
    .then(async () => {
        console.log("Connect in the DataBase");
        app.listen(port, () => {
            console.log(`the server is started on the port : ${port}`);
        });
    })
    .catch((error) => {
        console.error("Échec de la connexion à la base de données PostgreSQL :", error); // Message d'erreur
        process.exit(1);
    });