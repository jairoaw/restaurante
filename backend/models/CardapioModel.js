import mongoose from "mongoose";

// Define o schema do cardápio no mongodb

const Cardapio = new mongoose.Schema({
    dia:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    turno:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

// Registra o model Course em nossa aplicação informando seu schema
export default mongoose.model('Cardapios', Cardapio);

