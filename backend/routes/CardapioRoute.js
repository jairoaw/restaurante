import express from "express";
import { 
    getCardapios, 
    getCardapioById,
    saveCardapio,
    updateCardapio,
    deleteCardapio
} from "../controllers/CardapioController.js";

const router = express.Router();

// associa as rotas ao seu método do Controller
router.get('/cardapios', getCardapios);
router.get('/cardapios/:id', getCardapioById);
router.post('/cardapios', saveCardapio);
router.patch('/cardapios/:id', updateCardapio);
router.delete('/cardapios/:id', deleteCardapio);

export default router;
