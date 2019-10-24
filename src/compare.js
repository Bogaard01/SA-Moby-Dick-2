const _ = require("lodash");

//Noticed the final list of 100 contains "And". "and" is on the stop-words.
//Also, "Whale" and "whale" are counted separately.
//Setting everyting to lower case would then produce "i" as one of the more popular words.
//
const removeStopWords = (textArray, stopArray) => {
  var lowerCaseArray = _.map(textArray, o => {
    return _.toLower(o);
  });
  var resultArray = _.difference(lowerCaseArray, stopArray);
  var properCaseArray = _.map(resultArray, o => {
    return _.capitalize(o);
  });
  return properCaseArray;
};

module.exports = { removeStopWords };
