// 1.Iterate with JavaScript While Loops
// Setup
let myArray = [];

// Only change code below this line
let i = 0;
while(i<6) {
  myArray.push(i)
  i++;
  
}
myArray.reverse()

// 1.Iterate with JavaScript For Loops
// Setup
var myArray = [];

// Only change code below this line
for(let i=1; i<=5; i++)  {
  myArray.push(i);
}
console.log(myArray)

// 2.Iterate Odd Numbers With a For Loop

// Setup
var myArray = [];

// Only change code below this line
for(let i=1; i<10; i++) {
  if(i%2 === 1) {
  myArray.push(i)
  i++
  }else {
    break;
  }
}

// 3.Count Backwards With a For Loop

// Setup
var myArray = [];

// Only change code below this line
for(let i = 1 ; i<10; i++) {
  if(i%2==1) {
    myArray.push(i)
    i++
  } else {
    break;
  }
}
myArray.reverse()

// 4.Iterate Through an Array with a For Loop

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for(let i =0; i<myArr.length; i++) {
   total += myArr[i]
}

// 5.Nesting For Loops
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (let i=0; i < arr.length; i++) {
      for (let j=0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
  
    // Only change code above this line
    return product;
  }
  
  let product = multiplyAll([[1,2],[3,4],[5,6,7]]);

//   1.Iterate with JavaScript Do...While Loops

// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
}while (i < 5)

// 1.Replace Loops using Recursion

function sum(arr, n) {
    // Only change code below this line
      if (n <= 0) {
        return 0;
      } else {
        return sum (arr, n - 1) + arr[n - 1];
      }
    }
    // Only change code above this line
  sum([1], 0)

  