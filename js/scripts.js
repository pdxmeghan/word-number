function wordNumber(number) {
  var input = number.split("").reverse();
  var singles = {1: "one", 2: "two", 3:"three", 4:"four", 5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine"};
  var tens = {1: "ten", 2: "twenty", 3:"thirty", 4:"forty", 5:"fifty", 6:"sixty", 7:"seventy", 8:"eighty", 9:"ninety"};
  var finalWords = [];

  for (var i = 0; i < input.length; i++) {
    if (i === 0) {
      finalWords.push(singles[input[i]]);
    } else if (i === 1) {
      finalWords.push(tens[input[i]]);
    } else if (i === 2) {
      finalWords.push("hundred");
      finalWords.push(singles[input[i]]);
    } else if (i === 3) {
      finalWords.push("thousand");
      finalWords.push(singles[input[i]]);
    } else if (i === 4) {
      finalWords.push(tens[input[i]]);
    }  else if (i === 5) {
      finalWords.push("hundred");
      finalWords.push(singles[input[i]]);
    }  else if (i === 6) {
      finalWords.push("million");
      finalWords.push(singles[input[i]]);
    } else if (i === 7) {
      finalWords.push(tens[input[i]]);
    } else if (i === 8) {
      finalWords.push("hundred");
      finalWords.push(singles[input[i]]);
    } else if (i === 9) {
      finalWords.push("billion");
      finalWords.push(singles[input[i]]);
    } else if (i === 10) {
      finalWords.push(tens[input[i]]);
    } else if (i === 11) {
      finalWords.push("hundred");
      finalWords.push(singles[input[i]]);
    } else if (i === 12) {
      finalWords.push("trillion");
      finalWords.push(singles[input[i]]);
    }
};

  var answer = finalWords.reverse().join(" ");
  return answer;
};
