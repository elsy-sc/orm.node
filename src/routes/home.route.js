const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to " + process.env.APP_NAME + "!");
});

module.exports = router;