// 1.Declare String Variables
var myFirstName ="Chonthicha";
var myLastName ="Sangcharean";

// 2.Escaping Literal Quotes in StringsPassed
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// 3.Quoting Strings with Single Quotes

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// 4.Escape Sequences in Strings
var myStr ="FirstLine\n\t\\SecondLine\nThirdLine";
// ผลลัพธ์ จะเป็น
// FirstLine
    //     \SecondLine
    // ThirdLine

//  1.Concatenating Strings with Plus Operator
var myStr = "This is the start. " + "This is the end.";

// 2.Concatenating Strings with the Plus Equals Operator
// Only change code below this line

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// 3.Constructing Strings with Variables
// Only change code below this line
var myName = "may";
var myStr = "My name is" + myName + "and I am well!";

// 4.Appending Variables to Strings
// Change code below this line

var someAdjective ="Goo";
var myStr = "Learning to code is ";
myStr += someAdjective;

// 1.Find the Length of a StringPassed
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
console.log(lastNameLength);

// 2.Use Bracket Notation to Find the First Character in a String
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];

// 3.Use Bracket Notation to Find the Nth Character in a String
// Setup
var myStr = "Jello World";

// Only change code below this line
myStr="Hello World"
// Only change code above this line

// 4.Use Bracket Notation to Find the Last Character in a String
// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line

// 5.Use Bracket Notation to Find the Nth-to-Last Character in a String
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// 6.Understand String Immutability
// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line



var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

1.Word Blanks
// Only change code below this line
var wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; // Change this line
// Only change code above this line
