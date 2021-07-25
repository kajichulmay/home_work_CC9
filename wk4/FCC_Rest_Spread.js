// 1.Use the Rest Parameter with Function Parameters
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }

//   2.Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);