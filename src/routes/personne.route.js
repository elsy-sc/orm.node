const express = require("express"); 
const { getRouter } = require("../utils/route.express.util");
const router = express.Router();

router.get("/hello", (req, res) => {
    res.send("Hello World of Personne!");
});

router.get("/goodbye", (req, res) => {
    res.send("Goodbye World of Personne!");
});

router.get("/hola", (req, res) => {
    res.send("Hola Mundo of Personne!");
});

module.exports = getRouter(express, router, '/personne');
