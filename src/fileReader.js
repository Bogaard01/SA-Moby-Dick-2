const fs = require("fs");
const path = require("path");

const read = fileName => {
  const textArray = fs.readFileSync(
    path.join(__dirname, "..", "data", fileName),
    "UTF-8"
  );
  return textArray;
  console.log(textArray);
  //if (err) {
  //  throw err;
  //}
};

module.exports = { read };
