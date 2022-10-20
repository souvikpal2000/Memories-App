const Memories = require("../db/models/memories");

const getMemories = async (req, res) => {
    try{
        const memories  = await Memories.find({});
        res.status(200).json(memories);
    }catch(err){
        console.log(err);
        res.status(404).json(err);
    }
}

const createMemory = async (req, res) => {
    const memory = req.body;
    try{
        const newMemory = new Memories(memory);
        await Memories.save();
        res.status(201).json(newMemory);
    }catch(err){
        res.status(409).json(err);
    }
}

module.exports = {getMemories, createMemory};