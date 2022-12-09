const fs = require("fs");

process.stdin.resume();

process.once("SIGUSR1", () => {
  console.log("GET MESSAGE");
  const x = fs.readFileSync("./data.txt");
  console.log("s", x.toString("utf-8"));
});

fs.writeFileSync("./pid", JSON.stringify({ pid: process.pid }));
