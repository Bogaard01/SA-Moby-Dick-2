const _ = require("lodash");

const removeStopWords = (textArray, stopArray) => {
  var resultArray = _.difference(textArray, stopArray);
  return resultArray;
};

module.exports = { removeStopWords };
