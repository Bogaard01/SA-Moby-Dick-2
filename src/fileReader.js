const fs = require("fs");
const path = require("path");

const read = fileName => {
  const textArray = fs
    .readFileSync(path.join(__dirname, "..", "data", fileName), "UTF-8")
    .split(/\W?\s/);
  //need to split on string and "/n" to read mobydick and stop-words
  //will probably need to clean up characters at the end of words too.
  //make a separate function for that... or pray to regex.
  console.log(textArray.length);
  return textArray;

  //if (err) {
  //  throw err;
  //}
};

module.exports = { read };
