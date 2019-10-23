const sortWords = require("./sortWords.js");

describe("Tests sorting array of word and count paired objects.", () => {
  it("takes array and sorts it by field count.", () => {
    const testArray1 = [
      { word: "Moby", count: 2 },
      { word: "Dick", count: 2 },
      { word: "test", count: 3 },
      { word: "seven", count: 1 },
      { word: "and", count: 1 },
      { word: "test.", count: 1 }
    ];
    const resultArray1 = [
      { word: "seven", count: 1 },
      { word: "and", count: 1 },
      { word: "test.", count: 1 },
      { word: "Moby", count: 2 },
      { word: "Dick", count: 2 },
      { word: "test", count: 3 }
    ];
    expect(sortWords.sort(testArray1)).toEqual(resultArray1);
  });
});
