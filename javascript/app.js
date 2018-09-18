console.log("JS IS RUNNING!");


// 1. Data types

// Refresher
// So far we have seen:
// Strings
// Numbers
// Booleans
// Arrays
// Objects
// When these datatypes are combined, we get a data structure, for example, an array that contains objects that each contain booleans.
// Suppose you are tasked with creating some software, and it is up to you to determine which datatypes and what data structure to use. For each of the following, write which data types you would use to represent the data, and then give a small example of the data structure:

// • A light switch that can be either on or off.
// Use a variable with a Boolean value
// Light on:
let switchOn = true;
// Light off:
switchOn = false;

// • A user's email address.
// Use a variable with a String value
let email = "";
email = "me@example.com";

// • A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// Use a variable with a an Array value
let spaceship = ["hull", "laser blasters", "tractor beam", "warp drive"];

// • A list of student names from our class.
// Use a variable with a an Array value
let studentNames = ["Ashley", "Chris L.", "Chris R.", "Filip", "Greg", "John", "Josh", "Charlotte", "Andy"] 

// • A list of student names from our class, each with a location.
// Use a variable with Objects embedded in an Array as a value
let studentNames2 = [
	{name: "Ashley",
	location: "At home with dog"
	},
	{name: "Chris L.",
	location: "At the GameShop playing MTG"
	},
	{name: "Charlotte",
	location: "In bed"
}
]

// • A list of student names from our class, each with a location and each with a list of favorite tv shows.
// Use a variable with Objects embedded in an Array as a value, and Arrays embedded in those Objects
let studentNames3 = [
	{name: "Ashley",
	location: "At home with dog",
	favoriteTVShows: ["Parks and Rec", "Brooklyn 99"]
	},
	{name: "Chris L.",
	location: "At the GameShop playing MTG",
	favoriteTVShows: ["Mr Robot", "The Office"]
	},
	{name: "Charlotte",
	location: "In bed",
	favoriteTVShows: ["Hannibal", "Avatar the Last Airbender"]
}
]

console.log(spaceship); // TEST
console.log(studentNames); // TEST
console.log(studentNames2); // TEST
console.log(studentNames3); // TEST

////////////////////////////////////////////
// 🔴 Commit: "data types"




// 2. Take it Easy

// Make an array that holds all of the colors of the rainbow.
let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
console.log(rainbow); // TEST

// Write code that will access "blue" from the rainbow array.
console.log(rainbow[4]);

// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
let cha = {
	fave_food: "At the moment, thai curry",
	hobby: "Reading",
	town: "Chicago",
	fave_datatype: "........probably Booleans"
}

// Write code that will access your hobby from the object that you just created.
console.log(cha.hobby);

////////////////////////////////////////////
// 🔴 Commit: "data structures"




// 3. Crazy Object!

const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favouriteHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}
console.log(crazyObject);
// Use crazyObject to log the following.

// "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favouriteHobby);

// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

// The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);

////////////////////////////////////////////
// 🔴 Commit: "crazyObject"




// 4. Object-ception

// With the following object:

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}
// Change the value of limbo to null.
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception); // TEST

////////////////////////////////////////////
// 🔴 Commit: "object-ception"




// 5-7. Bond Films

// Copy the following bondFilms array of objects above into your js file. Use loops and conditionals and functions in order to complete the below:

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];


// 5. Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.
const bondTitles = []
for (let i = 0; i < bondFilms.length; i++) {
	bondTitles.push(bondFilms[i].title);
}
console.log(bondTitles);

////////////////////////////////////////////
// 🔴 Commit: "bondTitles array"




// 6. Create a new array oddBonds, of only the Bond films released on odd-numbered years.
const oddBonds = []
for (let i = 0; i < bondFilms.length; i++) {
	if (bondFilms[i].year % 2 === 1){
		oddBonds.push(bondFilms[i].title);
	}
}
console.log(oddBonds);
////////////////////////////////////////////
// 🔴 Commit: "oddBonds"



// 7. Determine the total cumulative gross of the Bond franchise, and console.log the result.
// Hint: To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt() also.

// Empty array to hold the $money strings
let grossBonds = [];

// Set totalGross to 0 
let totalGross = 0;

// Add Bond films gross strings to above array
for (let i = 0; i < bondFilms.length; i++) {
	grossBonds.push(bondFilms[i].gross);
}

console.log(grossBonds); // TEST

// Make function to turn strings into numbers
const numify = (str) => {

	// Make a variable that will hold all the digits as string is being numified (getting rid of $ and ,)
	let digits = "";

	// Iterate through the string
	for (let i = 0; i < str.length; i++) {
		// If str digit between 0 and 9, add it to /digits/
		if (str[i] !== "$" && str[i] !== ",") {
			digits += str[i];
		}
	}

	// Turn whats in /digits/ from string to number and return it
	return Number(digits);
}

// Loop through grossBonds
for (let i = 0; i < grossBonds.length; i++) {
	// Make strings into number by calling numify()
	totalGross += numify(grossBonds[i]);
}
console.log(totalGross); // TEST

// Make totalGross into a $...,...,... again

// Make into string with commas
totalGross = totalGross.toLocaleString();

console.log(`Total cumulative gross of the Bond franchise: $${totalGross}.`);

////////////////////////////////////////////
// 🔴 Commit: "bond films gross"



// Congrats! You have completed the homework



// Hungry For More?


// Console log the single movie object that contains the actor who starred in the least number of films.
// Expected result:

// { 
//   "title" : "On Her Majesty's Secret Service", 
//   "year" : 1969, 
//   "actor" : "George Lazenby", 
//   "gross" : "$505,899,782" 
// }

// hint: Objects by definition have unique keys. Later in the problem you could create a new object wherein all the Bond actors are keys, and unique, with no doubles. hint within a hint: If you need to iterate over an object, remember you can use Object.keys() or a for ... in loop

// Make an array that will hold objects (actor names as keys and the number of times they appear as their value)
let actors = [];

// Make a loop to go through bondFilms
for (let i = 0; i < bondFilms; i++) {

	// In the array actors I've created
	for (let j = 0; j <= actors.length; j++) {

		// If the actor is in the actors array already
		if (bondFilms[i].actor == Object.keys(actors)[j]){

			 // Then value +=1
			actors.bondFilms[i][actor]++;

		// If not, add name to array with value 1
		} else {
			actors.bondFilms[i][actor] = 0;
		}
	}
}

console.log(actors);

// Not comfy with objects/arrays yet, must and will practice more

////////////////////////////////////////////
// 🔴 Commit "humdinger"
























