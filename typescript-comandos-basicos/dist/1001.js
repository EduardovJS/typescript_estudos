"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var lines = [];
rl.on("line", function (input) {
  lines.push(parseInt(input));
  if (lines.length === 2) {
    var A = lines[0];
    var B = lines[1];
    var X = A + B;
    console.log("X = ".concat(X));
    rl.close();
  }
});
