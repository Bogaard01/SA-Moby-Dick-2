const _ = require("lodash");

const sort = textArray => {
  var resultArray = _.takeRight(_.sortBy(textArray, ["count"]), 100);
  return resultArray;
};

module.exports = { sort };
