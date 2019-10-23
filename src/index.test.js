const fileReader = require("./fileReader.js");
const compare = require("./compare.js");
const countWords = require("./countWords.js");

describe("Tests for index js file", () => {
  //  it("Red test 1. Make sure test framework returns failure.", () => {
  //    expect(3).toEqual(2);
  //  });
  //./node_modules/.bin/jest --watchAll
  //it("Green test 1. Make sure test framework returns pass.", () => {
  //  expect(2).toEqual(2);
  //});
  it("Test getting an array of counted word objects", () => {
    var mobyArray = fileReader.read("../data/mobydick.txt", /\#.*|\W\s/);
    var stopArray = fileReader.read("../data/stop-words.txt", /\#.*|\W\s/);
    var resultArray = compare.removeStopWords(mobyArray, stopArray);
    var countedObj = countWords.count(resultArray);
    expect(countedObj).toEqual([{}, {}]);
  });
});
