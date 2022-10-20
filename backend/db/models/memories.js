const mongoose = require("mongoose");

const memoriesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    file: {
        type: String,
        required: true
    },
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Memories = new mongoose.model("memory", memoriesSchema);

module.exports = Memories;