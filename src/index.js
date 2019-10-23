const fileReader = require("./fileReader.js");
const compare = require("./compare.js");
const countWords = require("./countWords.js");
const sortWords = require("./sortWords.js");

var mobyArray = fileReader.read("../data/mobydick.txt", /\#.*|\W?\s/);
var stopArray = fileReader.read(
  "../data/stop-words.txt",
  /\#.*|\W?\s|(?<!.).{1}(?=\n)/
);
var resultArray = compare.removeStopWords(mobyArray, stopArray);
var countedObj = countWords.count(resultArray);
var sorted100Words = sortWords.sort(countedObj);
console.log(sorted100Words);
