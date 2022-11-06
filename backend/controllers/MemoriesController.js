const Memories = require("../db/models/memories");

const getMemories = async (req, res) => {
    try{
        const memories  = await Memories.find({});
        res.status(200).json(memories);
    }catch(err){
        console.log(err);
        res.status(500).json({sucess: false, message: "Internal Server Error"});
    }
}

const createMemory = async (req, res) => {
    const memory = req.body;
    try{
        const newMemory = new Memories(memory);
        await Memories.save();
        res.status(201).json(newMemory);
    }catch(err){
        console.log(err);
        res.status(500).json({sucess: false, message: "Internal Server Error"});
    }
}

module.exports = {getMemories, createMemory};