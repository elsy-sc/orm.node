require('dotenv').config();
const express = require("express");
const jsonUtil = require("./src/utils/json.express.util");
const routeUtil = require("./src/utils/route.express.util");
const routes = require("./src/routes/index.route");

const app = express();
const port = process.env.PORT|| 3000;

jsonUtil.enableJson(app, express);
routeUtil.loadRoutes(app, routes);

app.listen(port, () => console.log("Listening on port", port, "..."));