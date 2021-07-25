// 1.Profile Lookup

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
// 2.Generate Random Fractions with JavaScript
function randomFraction() {

    // Only change code below this line
  
    return Math.random()
  
    // Only change code above this line
  }

//   3.Generate Random Whole Numbers with JavaScript

function randomWholeNum() {

    // Only change code below this line
  
    return Math.floor(Math.random() * 10);
  }

//   4.Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random()*(myMax - myMin + 1)) + myMin
    // Only change code above this line
  }

//   5.Use the parseInt Function

function convertToInteger(str) {
    return str = parseInt(str);
    }
    
    convertToInteger("56");

// 6.Use the parseInt Function with a Radix

function convertToInteger(str) {
    return parseInt(str,2)
    }
    
    convertToInteger("10011");

// 7.Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
    }
    
    checkEqual(1, 2);

//   8.Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
    return (num===10)? "positive" : (num===0) ? "zero" : "negative";
    }
    
    checkSign(10);

 // 9.Use Recursion to Create a Countdown
 // Only change code below this line
function countdown(n){
    if(n<1) {
      return [];
    }else {
      const arr = countdown(n - 1)
      arr.unshift(n)
    return arr
    }
  }
  // Only change code above this line

//   10.Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
     return [startNum];
   } else {
     let numbers = rangeOfNumbers(startNum, endNum - 1);
     numbers.push(endNum);
     return numbers;
   }
 };
