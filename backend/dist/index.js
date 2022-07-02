"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./src/routes");
const configs_1 = require("./src/configs");
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
(0, configs_1.AppConfig)(app);
(0, routes_1.AppRoute)(app);
// connect mongodb
mongoose_1.default.connect('mongodb+srv://bidding:rqxgpPqM88eWKN2@cluster0.dae50.mongodb.net/bidding?retryWrites=true&w=majority', (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Mongo connected");
    }
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
