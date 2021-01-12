const fs = require('fs');

const fileName = process.argv[2];

const hasOnlyNumbers = (array) => {
  const notNumbers = array.filter((element) => !Number.isInteger(element));
  if (notNumbers.length >= 1) return false;
  return true; 
};

const swapValues = (x, y) => {
  const tempValue = y;
  y = x;
  x = tempValue;
}

const bubble_sort = (numbers) => {
  sortedNumbers = [...numbers];
  let comparisonCount = 0;
  let swapped = false;
  for (let i = sortedNumbers.length - 1; i >= 0; i--) {
    swapped = false;
    for (let j = 0; j < i; j++) {
      comparisonCount++;
      if (sortedNumbers[j] > sortedNumbers[j + 1]) {
        const tempValue = sortedNumbers[j];
        sortedNumbers[j] = sortedNumbers[j + 1];
        sortedNumbers[j + 1] = tempValue;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  console.log(`Tri à bulle: ${comparisonCount} comparaisons - [${sortedNumbers}]`);
  return sortedNumbers;
}

// Méthode asynchrone
// fs.readFile(fileName, 'utf8', (error, data) => {
//   if (error) {
//       console.error(error.message);
//       return ;
//   }
//   console.log(data);
// });

// Méthode synchrone
try {
  const data = fs.readFileSync(fileName, 'utf8');
  const numbers = data.split(' ').map((number) => Number.parseInt(number));
  console.log(numbers);
  if (!hasOnlyNumbers(numbers)) return console.log("There is an element that is not a number!");
  bubble_sort(numbers);
  console.log(numbers);
  
} catch (error) {
  console.error(error.message);
}