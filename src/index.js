const fileReader = require("./fileReader.js");
const compare = require("./compare.js");
const countWords = require("./countWords.js");

var mobyArray = fileReader.read("../data/mobydick.txt", /\#.*|\W\s/);
var stopArray = fileReader.read("../data/stop-words.txt", /\#.*|\W\s/);
var resultArray = compare.removeStopWords(mobyArray, stopArray);
var countedObj = countWords.count(resultArray);
//console.log(resultArray);
//console.log(resultArray.length);
