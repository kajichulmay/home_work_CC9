// 1.Returning Boolean Values from Functions

// function isLess(a, b) {
//     // Only change code below this line
//    return a<b;
//     // Only change code above this line
//   }
  
  isLess(10, 15);

//   2.Return Early Pattern for Functions

// // Setup
// function abTest(a, b) {
//     // Only change code below this line
//   if (a<0 ||b<0){
//     return;
//   }
  
//     // Only change code above this line
  
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
//   }
  
//   abTest(2,2);

// 1.Counting Cards
// let count = 0;

// function cc(card) {
//   // Only change code below this line
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--;
//       break;
//   }
//   if (count > 0) {
//     return count + " Bet";
//   } else {
//     return count + " Hold";
//   }
//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');