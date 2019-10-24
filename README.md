This project pulls out the 100 most used words in Moby Dick and displays them in the console when index.js is run. The project is written as node.js, with lodash library and Jest for unit tests.

Each function is in a separate .js file. This is starting to grow a little cumbersome. I realize I can be more efficient by placing many of the related functions in a lib.js file. I kept them separate to be more deliberate with test driven development. Units tests were a great tool for development. I discovered that the original 2 tests I had for the fileReader.test.js were not good enough. At some point the mobydick.txt was parsing as phrases separated only on new line characters. The test to have a simple array of ["Moby", "Dick"] present was passing. Those strings were in the result, but the result was not the format I was looking for. I added a test to not have a phrase from near the end of the text file. I also then had to change the fileReader function to accept a regex rather than trying to use one regex for reading both files.

Regex experimentation was a big part of this project. There were several hurdles. I remain a fan of regex101.com.

You may notice this repository is called Moby Dick 2. Moby Dick 1 was a failed project setup. I was trying to use Mocha as the test framework and there were issues with the configuration. I'm not sure what went wrong. It's probably an error in package.json or a file out of place. Regardless, I wasn't very far into the project and after being unable to solve the issue on my own I started a new project and decided to use Jest for testing.

Moby Dick project initial thoughts from reading the assignment in the email:
This was a stream of thought email I wrote to myself while eating dinner.

Get a txt reader function to parse as an array.
Maybe JSON with array of arrays for line and words on line. Nope, don’t need line number. Just use array of words
Initially parse on space. Then go back and refine to take out period, comma, question mark, etc.
also parse stop words.... are there instructions in that file? There are, all with # as first character. Again. Initial pass parses, then refine to exclude those lines.

Internet tells me I’ll have 209k words. Seems like a lot of elements.
Us Lodash to run a difference by function for the arrays. Will take out a hecka lot of entries.

Then a function to count the words. That seems to be the tricky part.
Maybe read first element and then remove all matching elements into a new array. Get length of that array.
Could put each word in JSON array of arrays and spin through those. Grabbing the length when... hmm, going to need to know the top 100.
Function to count words: return JSON; object holding array of objects...or just a bunch of objects. Each one of those is a pair of elements: uses and the word.

Function to sort the JSON by use count.

Drop element 100+ and display remaining.
