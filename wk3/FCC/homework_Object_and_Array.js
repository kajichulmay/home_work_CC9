// 1.Build JavaScript Objects
// var myDog = {
//     // Only change code below this line
//     "name" : "pic",
//     "legs" : 4,
//     "tails" : 1,
//     "friends" : ["Team" , "May"]
    
//     // Only change code above this line
//     };

// 2.Accessing Object Properties with Dot Notation
// Setup
// var testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
//   };
  
//   // Only change code below this line
  
//   var hatValue = testObj.hat;      // Change this line
//   var shirtValue = testObj.shirt;    // Change this line

// 3.Accessing Object Properties with Bracket Notation
// // Setup
// var testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
//   };
  
//   // Only change code below this line
  
//   var entreeValue = testObj["an entree"];   // Change this line
//   var drinkValue = testObj["the drink"];    // Change this line

// 4.Accessing Object Properties with Variables

// // Setup
// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };
  
//   // Only change code below this line
  
//   var playerNumber = 16;       // Change this line
//   var player = testObj[playerNumber];   // Change this line

// 5.Updating Object Properties
// Setup
// var myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
  
//   // Only change code below this line
//   myDog.name = "Happy Coder";

// 6.Add New Properties to a JavaScript Object
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
  
//   myDog.bark = "Woof"

// 7.Delete Properties from a JavaScript Object
// Setup
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
//   };
  
//   // Only change code below this line
//   delete myDog.tails;

// 8.Using Objects for Lookups*ใช้เรื่องฟังก์ชันเล็กน้อย

// Setup
// function phoneticLookup(val) {
//     var result = "";
  
//     // Only change code below this line
//      var lookup = {
//     alpha: "Adams",
//     bravo: "Boston",
//     charlie : "Chicago",
//     delta : "Denver",
//     echo : "Easy",
//     foxtrot : "Frank"
//     };
//     result = lookup[val]
//     // Only change code above this line
//     return result;
//   }
  
//   phoneticLookup("charlie");

// 9.Testing Objects for Properties *ใช้เรื่องฟังก์ชันเล็กน้อย

// function checkObj(obj, checkProp) {
//     // Only change code below this line
//     if(obj.hasOwnProperty(checkProp)) {
//       return obj[checkProp]
//     }
//     return "Not Found";
//     // Only change code above this line
//   }
// 10.Manipulating Complex Objects

// var myMusic = [
//     {
//       "artist": "Billy Joel",
//       "title": "Piano Man",
//       "release_year": 1973,
//       "formats": [
//         "CD",
//         "8T",
//         "LP"
//       ],
//       "gold": true
//     },{
//       "artist": "may genius",
//       "title": "Guitar",
//       "release_year": 2020,
//       "formats": [
//         "CD",
//         "8T",
//         "LP"
//       ],
//       "gold": true
//     }
//   ];

// 11.Accessing Nested Objects
// var myStorage = {
//     "car": {
//       "inside": {
//         "glove box": "maps",
//         "passenger seat": "crumbs"
//        },
//       "outside": {
//         "trunk": "jack"
//       }
//     }
//   };
  
//   var gloveBoxContents = myStorage.car.inside["glove box"];

// 12.Accessing Nested Arrays

// var myPlants = [
//     {
//       type: "flowers",
//       list: [
//         "rose",
//         "tulip",
//         "dandelion"
//       ]
//     },
//     {
//       type: "trees",
//       list: [
//         "fir",
//         "pine",
//         "birch"
//       ]
//     }
//   ];
  
//   var secondTree = myPlants[1].list[1];

// 13.Record Collection

// if (prop !== 'tracks' && value !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
//     records[id][prop] = [value];
//   } else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   } else if (value === "") {
//     delete records[id][prop];
//   }
//   return records;
// }

// 1.Write Concise Object Literal Declarations Using Object Property Shorthand
// const createPerson = (name, age, gender) => {
//     // Only change code below this line
//     return {
//       name,
//       age,
//       gender
//     };
//     // Only change code above this line
//   };

// 2.Write Concise Declarative Functions with ES6

// Only change code below this line
// const bicycle = {
//     gear: 2,
//     setGear(newGear) {
//       this.gear = newGear;
//     }
//   };
//   // Only change code above this line
//   bicycle.setGear(3);
//   console.log(bicycle.gear);

// 1.Add Key-Value Pairs to JavaScript Objects
// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28
//   };
  
//   // Only change code below this line
//     foods.bananas = 13
//     foods.grapes = 35
//     foods.strawberries = 27
  
//   // Only change code above this line
  
//   console.log(foods);

// 2.Modify an Object Nested Within an Object

// let userActivity = {
//     id: 23894201352,
//     date: 'January 1, 2017',
//     data: {
//       totalUsers: 51,
//       online: 42
//     }
//   };
  
//   // Only change code below this line
//   userActivity.data.online = 45;
//   // Only change code above this line
  
//   console.log(userActivity);

// 3.Access Property Names with Bracket Notation
// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
//   };
  
//   function checkInventory(scannedItem) {
//     // Only change code below this line
//       return foods[scannedItem]
//     // Only change code above this line
//   }
  
//   console.log(checkInventory("apples"));

// 4.Use the delete Keyword to Remove Object Properties

// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
//   };
  
//   // Only change code below this line
//   delete foods.oranges;
//   delete foods.plums;
//   delete foods.strawberries;
//   // Only change code above this line
  
//   console.log(foods);

// 5.Check if an Object has a Property
// let users = {
//     Alan: {
//       age: 27,
//       online: true
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: true
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };
  
//   function isEveryoneHere(userObj) {
//     // Only change code below this line
//     if(userObj.hasOwnProperty('Alan') &&
//     userObj.hasOwnProperty('Jeff') &&
//     userObj.hasOwnProperty('Sarah') &&
//     userObj.hasOwnProperty('Ryan'))
//     {
//     return true;
//     }
//     return false;
    
//     // Only change code above this line
//   }
  
//   console.log(isEveryoneHere(users));

// 6.Iterate Through the Keys of an Object with a for...in Statement
// function countOnline(usersObj) {
//     // Only change code below this line
//     let result = 0;
//     for (let user in usersObj) {
//       if (usersObj[user].online === true) {
//         result++;
//       }
//     }
//     return result;
//     // Only change code above this line
//   }

//   7.Generate an Array of All Object Keys with Object.keys()

// let users = {
//     Alan: {
//       age: 27,
//       online: false
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: false
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };
  
//   function getArrayOfUsers(obj) {
//     // Only change code below this line
//     return Object.keys(obj)
//     // Only change code above this line
//   }
  
//   console.log(getArrayOfUsers(users));

// 8.Modify an Array Stored in an Object

// let user = {
//     name: 'Kenneth',
//     age: 28,
//     data: {
//       username: 'kennethCodesAllDay',
//       joinDate: 'March 26, 2016',
//       organization: 'freeCodeCamp',
//       friends: [
//         'Sam',
//         'Kira',
//         'Tomo'
//       ],
//       location: {
//         city: 'San Francisco',
//         state: 'CA',
//         country: 'USA'
//       }
//     }
//   };
  
//   function addFriend(userObj, friend) {
//     // Only change code below this line
//   userObj.data.friends.push(friend)
//   return userObj.data.friends
//     // Only change code above this line
//   }
  
//   console.log(addFriend(user, 'Pete'));

// 1.Create a Basic JavaScript Object

// let dog = {
//     name : "Pic",
//     numLegs: 4
// };

// 2.Use Dot Notation to Access the Properties of an Object
// let dog = {
//     name: "Spot",
//     numLegs: 4
//   };
//   // Only change code below this line
//   console.log(dog.name)
//   console.log(dog.numLegs)

// 3.Create a Method on an Object

// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs : function() {return "This dog has " + dog.numLegs + " legs.";}
  
//   };
  
//   dog.sayLegs();

// 4.Make Code More Reusable with the this Keyword

// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
//   };
  
//   dog.sayLegs();

// 5.Define a Constructor Function

// function Dog() {
//     this.name ="Pic";
//     this.color = "white brown";
//     this.numLegs = 4;
//   }

// 6.Use a Constructor to Create Objects
// function Dog() {
//     this.name = "Rupert";
//     this.color = "brown";
//     this.numLegs = 4;
//   }
//   // Only change code below this line
//   let hound = new Dog();

// 7.Extend Constructors to Receive Arguments

// function Dog(name,color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 4;
//     }
//     let terrier = new Dog("Pic","white brown")

// 8.Verify an Object's Constructor with instanceof

// function House(numBedrooms) {
//     this.numBedrooms = numBedrooms;
//   }
  
//   // Only change code below this line
  
//   let myHouse = new House(3)
//   myHouse instanceof House;

// 9.Understand Own Properties

// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
//   }
  
//   let canary = new Bird("Tweety");
//   let ownProps = [];
//   // Only change code below this line
//   for (let key in canary) {
//     if(canary.hasOwnProperty(key)) {
//       ownProps.push(key);
//     }
//   }
  
//   console.log(ownProps);

// 1.Store Multiple Values in one Variable using JavaScript Arrays

// // Only change code below this line
// var myArray = ["may" , 12];


// 2.Nest one Array within Another Array
// Only change code below this line
// var myArray = [["may" , 28] ,[ "team", 27]];

// 1.Access Array Data with Indexes

// var myArray = [50,60,70];

// var myData = myArray[0];

// 2.Modify Array Data With Indexes
// // Setup
// var myArray = [18,64,99];

// // Only change code below this line
// myArray[0] = 45;

// 3.Access Multi-Dimensional Arrays With Indexes

// var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// var myData = myArray[2][1];

// 1.Manipulate Arrays With push()

// // Setup
// var myArray = [["John", 23], ["cat", 2]];

// // Only change code below this line
// myArray.push(["dog",3])

// 2.Manipulate Arrays With pop()

// // Setup
// var myArray = [["John", 23], ["cat", 2]];

// // Only change code below this line
// var removedFromMyArray = myArray.pop()

// 3.Manipulate Arrays With shift()
// // Setup
// var myArray = [["John", 23], ["dog", 3]];

// // Only change code below this line
// var removedFromMyArray = myArray.shift();

// 4.Manipulate Arrays With unshift()

// Setup
// var myArray = [["John", 23], ["dog", 3]];
// myArray.shift();

// // Only change code below this line
// myArray.unshift(["Paul",35])

// 1.Shopping List

// var myList = [["Choco" , 25] , ["Cake" , 35] , ["icecream" , 50] , ["bread" , 15] , ["phone" , 2500]];

// 1.Use an Array to Store a Collection of Data
// let yourArray = [
//     'one', true , 2 , undefined, null];
//    console.log(yourArray.length);

// 2.Access an Array's Contents Using Bracket Notation

// let myArray = ["a", "b", "c", "d"];
// // Only change code below this line
// myArray[1] = "bag"
// // Only change code above this line
// console.log(myArray);

// 3.Add Items to an Array with push() and unshift()
// function mixedNumbers(arr) {
//     // Only change code below this line
//     arr.unshift("I" , 2 , 'three')
//     arr.push(7 , 'VIII' , 9)
//     // Only change code above this line
//     return arr;
//   }
  
//   console.log(mixedNumbers(['IV', 5, 'six']));

// 4.Remove Items from an Array with pop() and shift()

// function popShift(arr) {
//     let popped = arr.pop();
//     let shifted = arr.shift();
//     return [shifted, popped];
//   }
  
//   console.log(popShift(['challenge', 'is', 'not', 'complete']));

// 1.Remove Items Using splice()
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
// arr.splice(1,4)
// // Only change code above this line
// console.log(arr);

// 1.Add Items Using splice()

// function htmlColorNames(arr) {
//     // Only change code below this line
//   arr.splice(0,2 ,'DarkSalmon' ,'BlanchedAlmond' )
//     // Only change code above this line
//     return arr;
//   }
  
//   console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// 2.Copy Array Items Using slice()

// function forecast(arr) {
//     // Only change code below this line
//     return arr.slice(2,4)
//   }
  
//   // Only change code above this line
//   console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// 1.Check For The Presence of an Element With indexOf()

// function quickCheck(arr, elem) {
//     // Only change code below this line
//    if(arr.indexOf(elem) >=0) {
//      return true
//    } else {
//      return false
//    }
//     // Only change code above this line
//   }
  
//   console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// 1.Iterate Through All an Array's Items Using For Loops

// function filteredArray(arr, elem) {
//     let newArr = [];
//     // change code below this line
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].indexOf(elem) == -1) {
  
//         newArr.push(arr[i]);
//       }
//     }
  
//     // change code above this line
//     return newArr;
//   }
//   // change code here to test different cases:
//   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// 2.Create complex multi-dimensional arrays

// let myNestedArray = [
//     // change code below this line
//     ["unshift", false, 1, 2, 3, "complex", "nested"],
//     ["loop", "shift", 6, 7, 1000, "method"],
//     ["concat", false, true, "spread", "array", ["deep"]],
//     ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
//     ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
//     // change code above this line
//   ];

// 1.Use the map Method to Extract Data from an Array

// The global variable
// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//       "Metascore": "82",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//       "Metascore": "70",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//       "Metascore": "83",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//       "Response": "True"
//     }
//   ];
  
//   // Only change code below this line
  
//   const ratings = watchList.map(item => ({
//     title: item["Title"],
//     rating: item["imdbRating"]
//   }));
//   // Only change code above this line
  
//   console.log(JSON.stringify(ratings));

// 3.Use the filter Method to Extract Data from an Array

// The global variable
// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//       "Metascore": "82",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//       "Metascore": "70",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//       "Metascore": "83",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//       "Response": "True"
//     }
//   ];
  
//   // Only change code below this line
  
  
//   var filteredList = watchList
//     .map(movie => {
//       return {
//         title: movie.Title,
//         rating: movie.imdbRating
//       };
//     })
//     .filter(movie => {
  
//       return parseFloat(movie.rating) >= 8.0;
//     });
  
//   // Only change code above this line
  
//   console.log(filteredList);

// 5.Return Part of an Array Using the slice Method

// function sliceArray(anim, beginSlice, endSlice) {
//     // Only change code below this line
//   return anim.slice(beginSlice,endSlice)
  
//     // Only change code above this line
//   }
//   var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
//   sliceArray(inputAnim, 1, 3);

// 6.Remove Elements from an Array Using slice Instead of splice
// function nonMutatingSplice(cities) {
//     // Only change code below this line
//     return cities.slice(0,3);
  
//     // Only change code above this line
//   }
//   var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
//   nonMutatingSplice(inputCities);

// 7.Combine Two Arrays Using the concat Method

// function nonMutatingConcat(original, attach) {
//     // Only change code below this line
//   return original.concat(attach)
  
//     // Only change code above this line
//   }
//   var first = [1, 2, 3];
//   var second = [4, 5];
//   nonMutatingConcat(first, second);

// 8.Add Elements to the End of an Array Using concat Instead of push

// function nonMutatingPush(original, newItem) {
//     // Only change code below this line
//     return original.concat(newItem);
  
//     // Only change code above this line
//   }
//   var first = [1, 2, 3];
//   var second = [4, 5];
//   nonMutatingPush(first, second);

// The global variable

// 9.Use the reduce Method to Analyze Data

// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//       "Metascore": "82",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//       "Metascore": "70",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//       "Metascore": "83",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//       "Response": "True"
//     }
//   ];
  
//   function getRating(watchList){
//     // Add your code below this line
//     var count = 0;
//     var averageRating = watchList.reduce((sum,movie) =>  {
//       if (movie.Director == "Christopher Nolan") {
//         count+=1;
//         return sum + parseFloat(movie.imdbRating);
//       }
//       return sum;
//     }, 0) / count;
//     // Add your code above this line
//     return averageRating;
//   }
//   console.log(getRating(watchList));

// 10.Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

// const squareList = (arr) => {
//     // Only change code below this line
//     return arr
//             .filter(num => num > 0 && num % parseInt(num) === 0)
//             .map(num => Math.pow(num, 2));
//     // Only change code above this line
//   };
  
//   const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
//   console.log(squaredIntegers);

// 11.Sort an Array Alphabetically using the sort Method

// function alphabeticalOrder(arr) {
//     // Add your code below this line
//     return arr.sort(function(a, b) {
//       return a === b ? 0 : a < b ? -1 : 1;
//     });
//     // Add your code above this line
//   }
//   alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

// 12.Return a Sorted Array Without Changing the Original Array

// var globalArray = [5, 6, 3, 2, 9];
// function nonMutatingSort(arr) {
//   // Add your code below this line
//   return [].concat(arr).sort(function(a, b) {
//     return a - b;
//   });
//   // Add your code above this line
// }
// nonMutatingSort(globalArray);

// 13.Use the every Method to Check that Every Element in an Array Meets a Criteria

// function checkPositive(arr) {
//     // Add your code below this line
  
//     return arr.every(val => val > 0);
//     // Add your code above this line
//   }
//   checkPositive([1, 2, 3, -4, 5]);

// 14.Use the some Method to Check that Any Elements in an Array Meet a Criteria

// function checkPositive(arr) {
//     return arr.some(item => item > 0);
//   }
//   checkPositive([1, 2, 3, -4, 5]);