const _ = require("lodash");

//Noticed the final list of 100 contains "And". "and" is on the stop-words.
//Also, "Whale" and "whale" are counted separately.
//Setting everyting to lower case would then produce "i" as one of the more popular words.
//
const removeStopWords = (textArray, stopArray) => {
  var resultArray = _.difference(textArray, stopArray);
  return resultArray;
};

module.exports = { removeStopWords };
