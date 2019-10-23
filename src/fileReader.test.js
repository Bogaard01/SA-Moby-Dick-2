const fileReader = require("./fileReader.js");

describe("Tests for file reader", () => {
  it("mobydick.txt read and returned as array of words.", () => {
    const testArray1 = ["Moby", "Dick"];
    expect(fileReader.read("mobydick.txt", /\#.*|\W\s/)).toEqual(
      expect.arrayContaining(testArray1)
    );
  });
  it("stop-words.txt read and returned as array of words.", () => {
    //console.log(fileReader.read("stop-words.txt"));
    const testArray1 = ["about", "did", "you"];
    expect(fileReader.read("stop-words.txt", /\#.*|\W\s/)).toEqual(
      expect.arrayContaining(testArray1)
    );
  });
});
