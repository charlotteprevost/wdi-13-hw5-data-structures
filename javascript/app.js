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



























