const express = require("express");
const { getRouter } = require("../utils/route.express.util");
const { createVoiture, readVoiture, updateVoiture, deleteVoiture } = require("../controllers/voiture.controller");
const router = express.Router();

router.post("/create", createVoiture);
router.get("/read", readVoiture);
router.put("/update", updateVoiture);
router.delete("/delete", deleteVoiture);

module.exports = getRouter(express, router, '/voiture');