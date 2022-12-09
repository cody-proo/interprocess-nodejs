const fs = require("fs");

const d = fs.readFileSync("./pid");

const x = JSON.parse(d);

process.kill(x.pid, "SIGUSR1");

fs.writeFileSync("./data.txt", JSON.stringify({ d: process.argv[2] }));
