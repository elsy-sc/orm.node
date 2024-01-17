const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
    res.send("Hello World!");
});

router.get("/goodbye", (req, res) => {
    res.send("Goodbye World!");
});

router.get("/hola", (req, res) => {
    res.send("Hola Mundo!");
});

module.exports = router;