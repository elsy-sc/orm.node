const express = require("express"); 
const { getRouter } = require("../utils/route.express.util");
const { createPersonne, readPersonne, updatePersonne, deletePersonne } = require("../controllers/personne.controller");
const router = express.Router();

router.post("/create", createPersonne);
router.get("/read", readPersonne);
router.put("/update", updatePersonne);
router.delete("/delete", deletePersonne);

module.exports = getRouter(express, router, '/personne');