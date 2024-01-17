const express = require("express");
const router = express.Router();

router.get("/unknown", (req, res) => {
    res.send("404: Page not found");
});

module.exports = router;