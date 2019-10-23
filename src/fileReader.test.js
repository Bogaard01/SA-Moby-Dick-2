const fileReader = require("./fileReader.js");

describe("Tests for file reader", () => {
  it("mobydick.txt read and returned as array of words.", () => {
    const testArray1 = ["Moby", "Dick"];
    expect(fileReader.read("mobydick.txt", /\#.*|\W?\s/)).toEqual(
      expect.arrayContaining(testArray1)
    );
  });
  it("mobydick.txt read and not returning array of phrases.", () => {
    const testArray1 = [
      "public domain works in creating the Project Gutenberg-tm collection"
    ];
    expect(fileReader.read("mobydick.txt", /\#.*|\W?\s/)).toEqual(
      expect.not.arrayContaining(testArray1)
    );
  });
  it("stop-words.txt read and returned as array of words.", () => {
    //console.log(fileReader.read("stop-words.txt"));
    const testArray1 = ["about", "did", "you"];
    expect(fileReader.read("stop-words.txt", /\#.*|\W?\s/)).toEqual(
      expect.arrayContaining(testArray1)
    );
  });
});
