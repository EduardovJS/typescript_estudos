import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines: number[] = [];
const somar: string = "SOMA";

rl.on("line", (input) => {
  lines.push(parseInt(input));
  if (lines.length === 2) {
    const a = lines[0];
    const b = lines[1];
    const x = a + b;
    console.log(`${somar} = ${x}`);
    rl.close();
  }
});
