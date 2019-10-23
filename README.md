Moby Dick thoughts:

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
