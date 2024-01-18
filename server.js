require('dotenv').config();
const express = require("express");
const routeUtil = require("./src/utils/route.util");
const routes = require("./src/routes/index.route");

const app = express();
const port = process.env.PORT|| 3000;
routeUtil.use(app, routes);

app.listen(port, () => console.log("Listening on port", port, "..."));
