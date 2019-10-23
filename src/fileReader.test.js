const fileReader = require("./fileReader.js");

describe("Tests for file reader", () => {
  it("File read and returned as array of words.", () => {
    const testArray1 = ["Moby", "Dick"];
    expect(fileReader.read("mobydick.txt")).toEqual(
      expect.arrayContaining(testArray1)
    );
  });
});
