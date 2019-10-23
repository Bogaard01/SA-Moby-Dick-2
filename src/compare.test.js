const compare = require("./compare.js");

describe("Tests for compare arrays function", () => {
  it("compare 2 arrays of words and return array", () => {
    const testArray1 = ["Moby", "Dick", "test", "seven", "and"];
    const testArray2 = ["Dick", "test", "other", "words"];
    const resultArray1 = ["Moby", "seven", "and"];
    expect(compare.removeStopWords([testArray1, testArray2])).toEqual(
      expect.arrayContaining(resultArray1)
    );
  });
});
