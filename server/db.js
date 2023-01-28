"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mysql2_1 = __importDefault(require("mysql2"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var _a = process.env, DB_NAME = _a.DB_NAME, DB_USER = _a.DB_USER, DB_PASSWORD = _a.DB_PASSWORD, DB_HOST = _a.DB_HOST;
var connection = mysql2_1["default"].createConnection({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    database: DB_NAME
});
connection.connect(function (err) {
    if (err)
        console.error("Error connecting to database: ".concat(err.message));
    else
        console.log("Connected to db: ".concat(DB_NAME));
});
exports["default"] = connection;
