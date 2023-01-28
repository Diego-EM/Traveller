"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var db_1 = __importDefault(require("./db"));
var router = express_1["default"].Router();
router.post('/tickets', function (req, res) {
    var results = [];
    var _a = req.body, from = _a.from, to = _a.to, dateStart = _a.dateStart, dateEnd = _a.dateEnd, passengers = _a.passengers;
    if (from && to && dateStart && dateEnd && passengers) {
        var query = "SELECT * FROM bus_trips WHERE leaving=? AND depart=? AND date BETWEEN ? AND ? AND ?<=available";
        db_1["default"].query(query, [from, to, dateStart, dateEnd, passengers])
            .on('result', function (result) {
            results = __spreadArray(__spreadArray([], results, true), [result], false);
        })
            .on('end', function () {
            res.json({
                msg: "ok",
                results: results
            });
        })
            .on('error', function (err) {
            if (err)
                console.log(err.message);
        });
    }
    else {
        res.json({ msg: "Please enter all required data" });
    }
});
exports["default"] = router;
