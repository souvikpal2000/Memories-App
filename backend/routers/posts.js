const express = require("express");
const router = express.Router();
const {getMemories, createMemory} = require("../controllers/MemoriesController");

router.get("/getmemories", getMemories);
router.post("/creatememories", createMemory);

module.exports = router;