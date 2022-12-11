import Cardapio from "../models/CardapioModel.js";

export const getCardapios = async (req, res) => {
    try {
        const cardapios = await Cardapio.find();
        res.json(cardapios);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getCardapioById = async (req, res) => {
    try {
        const cardapio = await Cardapio.findById(req.params.id);
        res.json(cardapio);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveCardapio = async (req, res) => {
    const cardapio = new Cardapio(req.body);
    try {
        const insertedcardapio = await cardapio.save();
        res.status(201).json(insertedcardapio);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateCardapio = async (req, res) => {
    try {
        const updatedcardapio = await Cardapio.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcardapio);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteCardapio = async (req, res) => {
    try {
        const deletedcardapio = await Cardapio.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcardapio);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// Mostrar o detalhe de um cardápio
export const showCardapio = async (req, res) => {
    try {
        const showedcardapio = await Cardapio.showOne({_id:req.params.id});
        res.status(200).json(showedcardapio);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
