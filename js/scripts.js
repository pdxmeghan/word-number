function wordNumber(number) {
  var input = number;
  var singles = {1: "one", 2: "two", 3:"three", 4:"four", 5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine"};
  var tens = {1: "ten", 2: "twenty", 3:"thirty", 4:"forty", 5:"fifty", 6:"sixty", 7:"seventy", 8:"eighty", 9:"ninety"};
  var finalWords = [];

  for (var i=0; i < input.length; i++) {
    if (input === [0]
      finalWords.push(singles[input[i]]);
  }

  var answer = finalWords.toString();
  return answer;
};
