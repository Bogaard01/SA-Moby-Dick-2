const fs = require("fs");
const path = require("path");

const read = (fileName, regex) => {
  const textArray = fs
    .readFileSync(path.join(__dirname, "..", "data", fileName), "UTF-8")
    .split(regex); //leaves several empty elements, but for time I am moving on.
  return textArray;
  //.split(/\W?\s/); //first split captured comment lines.
  //need to split on string and "/n" to read mobydick and stop-words
  //will probably need to clean up characters at the end of words too.
  //make a separate function for that... or pray to regex.
  //refine by skipping line that starts with #. going to require some regex magic.
  //console.log(textArray.length);
  //error handling?
  //if (err) {
  //  throw err;
  //}
};

module.exports = { read };
