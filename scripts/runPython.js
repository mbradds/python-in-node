import { spawn } from "child_process";

const py = spawn("python", ["scripts/test.py"]);
py.stdout.on("data", (data) => console.log(data.toString()));
py.stderr.on("data", (data) => console.log(data.toString()));
