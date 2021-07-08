const fs = require("fs");

let rawdata = fs.readFileSync("data.json");
let data = JSON.parse(rawdata);
if (data[0].placement.name == "Meeting Room") {
  console.log(data[0].name);
}
var a = data.map((v) => v.name);
console.log(a);
