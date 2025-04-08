"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var lines = [];
var somar = "SOMA";
rl.on("line", function (input) {
    lines.push(parseInt(input));
    if (lines.length === 2) {
        var a = lines[0];
        var b = lines[1];
        var x = a + b;
        console.log("".concat(somar, " = ").concat(x));
        rl.close();
    }
});
