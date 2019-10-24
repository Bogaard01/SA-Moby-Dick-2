const _ = require("lodash");

const count = textArray => {
  var resultArray = [];

  while (textArray.length > 0) {
    var head = _.head(textArray).toString();
    var newWordArray = _.remove(textArray, function(str) {
      return str == head; //== or ===?
    });
    var newWordObj = { word: head, count: newWordArray.length };
    resultArray.push(newWordObj);
  }
  return resultArray;
  //_.head(textArray); //gets first element.
  //_.remove _.filter or _.pull to get all elements that match the head.
  //Goal to have old array mutated to remove head and any matches.
  //And have function return new array of same words.
  //Store that word and a newWordArry.length in the object.
  //Idea for future improvement. Try sorting the array first to improve performance.
};

module.exports = { count };
