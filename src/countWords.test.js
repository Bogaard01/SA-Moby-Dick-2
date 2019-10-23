const countWords = require("./countWords.js");

describe("Tests for count words function", () => {
  it("input array of words and return JSON object of counted words", () => {
    const testArray1 = [
      "Moby",
      "Dick",
      "test",
      "seven",
      "and",
      "Moby",
      "Dick",
      "test",
      "test.",
      "test"
    ];
    const resultArray = [
      { word: "Moby", count: 2 },
      { word: "Dick", count: 2 },
      { word: "test", count: 3 },
      { word: "seven", count: 1 },
      { word: "and", count: 1 },
      { word: "test.", count: 1 }
    ];
    expect(countWords.count(testArray1)).toEqual(resultArray);
  });
});
