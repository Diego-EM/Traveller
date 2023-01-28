"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var dotenv_1 = __importDefault(require("dotenv"));
var routes_1 = __importDefault(require("./routes"));
dotenv_1["default"].config();
var app = (0, express_1["default"])();
var port = process.env.PORT;
app.use((0, morgan_1["default"])('dev'));
app.use(express_1["default"].json());
app.use('/', routes_1["default"]);
app.listen(port, function () {
    console.log("Server listening on port ".concat(port));
});
