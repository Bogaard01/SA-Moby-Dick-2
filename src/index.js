const fileReader = require("fileReader");

var mobyArray = fileReader.read("../data/mobydick.txt", /\#.*|\W\s/);
var stopArray = fileReader.read("../data/stop-words.txt", /\#.*|\W\s/);
