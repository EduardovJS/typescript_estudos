"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var pi = 3.14159;
var lines = [];
rl.on("line", function (input) {
    lines.push(parseFloat(input));
    if (lines.length === 1) {
        var raio = lines[0];
        var area = pi * Math.pow(raio, 2);
        console.log("A=".concat(area.toFixed(4)));
        rl.close();
    }
});
