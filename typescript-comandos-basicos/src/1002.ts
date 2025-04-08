import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pi: number = 3.14159;
const lines: number[] = [];
rl.on("line", (input) => {
  lines.push(parseFloat(input));
  if (lines.length === 1) {
    const raio = lines[0];
    const area = pi * Math.pow(raio, 2);
    console.log(`A=${area.toFixed(4)}`);
    rl.close();
  }
});
