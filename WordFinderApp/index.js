function findLongestWordLength(str) {
  var strSplit = str.split(" ");
  var longestWord = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("May the force be with you");
findLongestWordLength("Google do a barrel roll");
findLongestWordLength(
  "What is the average airspeed velocity of an unladen swallow"
);
findLongestWordLength(
  "What if we try a super-long word such as otorhinolaryngology"
);
