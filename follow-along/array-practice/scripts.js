//array Practice
//create a new array - these names are the names of the first cohort that completed FWD. If you students allow for it, it can be nice to use their names :)
//as per usual, explain each part of code as you go along. Constantly refreshing to show them.

// 1) make an array of names
var nameArray = [
  "Robin",
  "Nate",
  "Jolene",
  "Leonard",
  "Brandon",
  "Shaina",
  "Jerrica",
  "Tenno",
  "Melissa",
  "Jackie",
  "Jake",
  "Stephen",
  "Sharon",
  "Nick",
];

// 2) Output the entire array
console.log(nameArray);
// 3) Output index #4 of the array
console.log(nameArray[4]);
// 4) Sort them in the reverse order (not reverse alphabetical order)
console.log(nameArray.reverse());
// 5) 5ort the array alphabetically
console.log(nameArray.sort());
// 6) Create an array of 6 numbers
numbers = [1,2,3,4,5,6]
// 7) Access index # 3 of the array
console.log(numbers[2]);
// 8) Get the length of the array and assign the value to a new variable
aLength = numbers.length;
console.log(aLength);
// 9) Change the value of index #3 in the array
numbers[3] = 10;
console.log(numbers );

// 10) Add to the array using the push() method
// this always adds to the end
numbers.push(10);
console.log(numbers);

// 11) Remove the last element of an array and save it to a variable
// use the pop() method
poppedNum =numbers.pop();
console.log(poppedNum);
// 12) Remove the first element of an array and put it into a variable
// Use the shift() method
shiftNum = numbers.shift();
console.log(shiftNum);

// 13) make a copy of an array under a new variable name
//using numArray2 = numArray won't make a seperate copy of numArray because both of these arrays store their elements in the same memory location in the computer
// 14) Make a new array using concat() - this method adds two arrays together, just like with strings
let numArray2 = []
numArray2 = numbers.concat()
console.log(numArray2)
// 15) Sort the array from high to low
console.log(numArray2.sort(function(a,b){return a-b}))
// 16) Sort the array from low to high
console.log(numArray2.sort(function(a,b){return b-a}) )
// 17) Using arrays and for loops, output all of the names in the array along with the index number
for (i = 0; i < nameArray.length; i++) {
  console.log(`#${i} ${nameArray[i]}`)
}
//end






/* 
const sumNumbers = (data) => {
    
  // create your solution here, make sure to "return" the value!
  
};

// each console log will print whatever value is returned from the sumNumbers function
console.log(sumNumbers([6, 10])); // expected output: 16
console.log(sumNumbers([1, 2, 9])); // expected output: 12
console.log(sumNumbers([10, 4, 3, 6, 19, 2])); // expected output: 44


const sumNumbersIf = (data, condition) => {
    
  // create your solution here
  
};

console.log(sumNumbersIf([6, 10, 7, 3, 2], 'odd')); // expected output: 10
console.log(sumNumbersIf([1, 2, 9, 14, 6, 3], 'even')); // expected output: 22
console.log(sumNumbersIf([11, 1, 3, 6, 9, 2], 'odd')); // expected output: 24
console.log(sumNumbersIf([1, 6, 3, 7, 9])); // expected output: 26



const countVowels = (string) => {
    
  // create your solution here
  
};

console.log(countVowels('supercalafragalistic')); // expected output: 8
console.log(countVowels('cranky crocadiles')); // expected output: 5
console.log(countVowels('web development')); // expected output: 5 
*/