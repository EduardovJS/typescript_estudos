import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines: number[] = [];

rl.on("line", (input) => {
  lines.push(parseInt(input));
  if (lines.length === 2) {
    const A = lines[0];
    const B = lines[1];
    const X = A + B;
    console.log(`X = ${X}`);
    rl.close();
  }
});
