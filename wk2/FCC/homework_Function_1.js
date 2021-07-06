// // // 1.Write Reusable JavaScript with Functions

// // function reusableFunction() {
// //     console.log("Hi World");
// //   }
// //    reusableFunction();

// // //    2.Passing Values to Functions with Arguments

// // function functionWithArgs(a,b){
// //     console.log(a+b)
// //   }
// //   functionWithArgs(1,2)

// // //   1.Global Scope and FunctionsPassed
// // // Declare the myGlobal variable below this line
// // var myGlobal = 10;
// // var oopsGlobal;

// // function fun1() {
// //  oopsGlobal = 5; // Assign 5 to oopsGlobal Here

// // }

// // // Only change code above this line

// // function fun2() {
// //   var output = "";
// //   if (typeof myGlobal != "undefined") {
// //     output += "myGlobal: " + myGlobal;
// //   }
// //   if (typeof oopsGlobal != "undefined") {
// //     output += " oopsGlobal: " + oopsGlobal;
// //   }
// //   console.log(output);
// // }

// // 2.Local Scope and FunctionsPassed
// // function myLocalScope() {

// //     // Only change code below this line
// //   var myVar
// //     console.log('inside myLocalScope', myVar);
// //   }
// //   myLocalScope();
  
// //   // Run and check the console
// //   // myVar is not defined outside of myLocalScope
// //   console.log('outside myLocalScope', myVar);

// //   3.Global vs. Local Scope in FunctionsPassed
// // Setup
// var outerWear = "T-Shirt";

// function myOutfit() {
//   // Only change code below this line
// var outerWear = "sweater"


//   // Only change code above this line
//   return outerWear;
// }

// myOutfit();

// 1.Return a Value from a Function with Return

// function timesFive(num) {
//     return num * 5;
//     }

// 2.Understanding Undefined Value returned from a FunctionPassed
// // Setup
// var sum = 0;

// function addThree() {
//   sum = sum + 3;
// }

// // Only change code below this line
// function addFive () {
//   sum = sum + 5
// }

// // Only change code above this line

// addThree();
// addFive();

// 3.Assignment with a Returned Value

// // Setup
// var processed = 0;

// function processArg(num) {
//   return (num + 3) / 5;
// }

// // Only change code below this line
// processed = processArg(7)

// // 1.Stand in Line (ใช้ความรู้เรื่อง Array)

// function nextInLine(arr, item) {
//     // Only change code below this line
//     arr.push(item)
//     return arr.shift();
//     // Only change code above this line
    
  
//   }
  
//   // Setup
//   var testArr = [1,2,3,4,5];
  
//   // Display code
//   console.log("Before: " + JSON.stringify(testArr));
//   console.log(nextInLine(testArr, 6));
//   console.log("After: " + JSON.stringify(testArr));