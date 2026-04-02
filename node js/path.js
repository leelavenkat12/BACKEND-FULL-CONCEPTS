const path = require("path")
console.log(__filename)


const filepath = path.join("folder","Students","data.txt");
console.log(filepath);

const parseData = path.parse(filepath)
console.log(parseData);
console.log(path.sep)