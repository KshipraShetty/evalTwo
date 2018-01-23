function countWords(inputWords) {
  return inputWords.reduce((count, word) => {
    if (count[word]) {
      count[word] += 1;
    } else {
      count[word] = 1;
    }
    return count;
  }, {});
}

//base case
let inputWords = [];
console.log('Base case of empty array ', JSON.stringify(countWords(inputWords)) === JSON.stringify({})

// normal inputWords
inputWords = ['Apple', 'Banana', 'Apple'];
console.log('Check for normal input ', JSON.stringify(countWords(inputWords)) === JSON.stringify({ Apple: 2, Banana: 1 }));

inputWords = ['Apple', 'APPLE', 'Apple'];
console.log('Check for case sensitivity ', JSON.stringify(countWords(inputWords)) === JSON.stringify({ Apple: 2, APPLE: 1 }));

inputWords = ['Apple', 'Banana', 'Mango'];
console.log('All different inputs ', JSON.stringify(countWords(inputWords)) === JSON.stringify({ Apple: 1, Banana: 1, Mango: 1 }));

module.exports = countWords;
