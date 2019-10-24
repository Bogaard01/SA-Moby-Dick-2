const fileReader = require("./fileReader.js");
const compare = require("./compare.js");
const countWords = require("./countWords.js");
const sortWords = require("./sortWords.js");
const _ = require("lodash");

var mobyArray = fileReader.read(
  "../data/mobydick.txt",
  /[^a-zA-Z0-9\_\'\-\’]|(?<!\w)’|\s/
);
var stopArray = fileReader.read(
  "../data/stop-words.txt",
  /\#.*|\W?\s|(?<!.).{1}(?=\n)/
);
var resultArray = compare.removeStopWords(mobyArray, stopArray);
var countedObj = countWords.count(resultArray);
var sorted100Words = sortWords.sort(countedObj);
_.forEachRight(sorted100Words, o => {
  console.log(o);
});
