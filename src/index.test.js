const fileReader = require("./fileReader.js");
const compare = require("./compare.js");
const countWords = require("./countWords.js");
const sortWords = require("./sortWords.js");

describe("Tests for index js file", () => {
  //  it("Red test 1. Make sure test framework returns failure.", () => {
  //    expect(3).toEqual(2);
  //  });
  //./node_modules/.bin/jest --watchAll
  it("Green test 1. Make sure test framework returns pass.", () => {
    expect(2).toEqual(2);
  });
  //Tested good progress but it takes 80 seconds to run.
  //It is 200,000 records, but that seems to be a long time.
  //while loop is probably not the best structure. But I've got it working now.
  //Disabling test while I refine so Jest doesn't keep running it.
  /*
  it("Test getting an array of counted word objects", () => {
    var mobyArray = fileReader.read("../data/mobydick.txt", /\#.*|\W?\s/);
    var stopArray = fileReader.read(
      "../data/stop-words.txt",
      /\#.*|\W?\s|(?<!.).{1}(?=\n)/
    );
    var resultArray = compare.removeStopWords(mobyArray, stopArray);
    var countedObj = countWords.count(resultArray);
    var sorted100Words = sortWords.sort(countedObj);
    console.log(sorted100Words);
    expect(sorted100Words.length).toEqual(100);
  });
  */
});
