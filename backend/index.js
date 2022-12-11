//arquivo 

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import CardapioRoute from "./routes/CardapioRoute.js";

// Cria uma aplicação Express
const app = express();

//Cria a conexão com o banco de dados
const uri = "mongodb+srv://mongoose:lnmmXvfic7ldwptC@cluster0.p07xarb.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true });
    

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('conectado no banco...'));

//Permite o uso do CORS (acesso a domínios externos da nossa API)
app.use(cors());

//Permitir enviar dados para a App no formato JSON
app.use(express.json());
app.use(CardapioRoute);

// Inicia o servidor backend na porta '5000'
app.listen(5000, () => {
    console.log("Exemplo de aplicativo ouvindo a porta 5000");
});
