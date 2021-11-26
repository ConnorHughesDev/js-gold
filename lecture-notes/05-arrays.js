// Arrays

/*
    Array is a list-like object whose prototype has methods to perform traversal and mutation operations. (MDN Web Docs)
        - Denoted by [ ]
        - Hold multiple data types
        - Mutable (can be modified)
        - Can be accessed by their index
*/

let make = ["BMW", "Porsche", "Maserati", "Lamborghini"];

console.log(make)

// Accessing by Index
console.log(make[1]) // Square bracket notation returns Porsche
// Array indexes start at zero (0)

console.log(typeof make) // returns an object

console.log(make instanceof Array)
// Returns true because 'make' object is an instance of 'Array' constructor

console.log(make[0])

// Array Reassignment
let arr = ["Summer", "Paul", "Adam"]
console.log(arr)
arr[1] = "Zach"
console.log(arr)
let arr = [] // Array Literal
console.log(Boolean([])) // Empty array unlike empty string returns true

// Creating an Array with an Array constructor

let countries = new Array("England", "Germany", "USA", "France")

console.log(countries)

// Challenge

let students = ["Andrew", "Bryson", "Cole", "Dean", ["Jessica", "Steven", "Jonathan"], "Quinton"]

/*
    Dive into a nested array and pull the name Jonathan. Console log it, saying "Hello Jonathan" using string interpolation.
*/

let inner = students[4]
console.log(`Hello, ${inner[2]}`) // or
console.log("Hello, " + inner[2])

console.log(`Hello, ${students[4][2]}`)

// Methods

/*
    In Object Oriented Programming Language (OOP) is a procedure that is associated with an object. It's a function that lives inside of a class.
        - Denoted by the . at the end of object being worked on
            - ex array.map()
*/

let carList = ["BMW M5", "BMW Z4M", "Mercedes 300E", "Maserati GranTurismo S", "Audi S8", "Mercedes E63s"]

// .length method -> returns the length of an array (non-indexed)

console.log(carList.length)

/* 
    .shift() method -> removes first element from an array.
        - returns removed element
        - if array empty -> returns undefined
*/
console.log(carList)
let removedItem = carList.shift()
console.log(carList)
console.log(removedItem)

/*
    .unshift() method -> adds element to beginning of an array
        - returns the length of a new array
*/

let newArrLength = carList.unshift("Porsche 911 GT3")
console.log(carList)
console.log(newArrLength) // returns new arr length

/*
    .pop() method -> removes last array element and returns it
*/

let lastCar = carList.pop()
console.log(carList)
// console.log(lastItem)


// Example of using .pop() return statement
let unwatedCars = []

if (lastCar.includes("Mercedes")) {
    unwatedCars.unshift(lastCar)
    console.log(unwatedCars)
}

/*
    .push() -> adds element to the end of an array
        - returns new length of the array
*/

console.log(carList)
console.log(carList.push("BMW M6"))
console.log(carList)

/*
    .reverse() -> returns reversed array elements
        - original array modified
*/

console.log(carList)
console.log(carList.reverse())

/**
    .slice() -> returns copy of an array from start to end (non-inclusive)
        - original array NOT modified
        - parameters are (start, stop (non-inclusive))
*/

let slicedCars = carList.slice(0, 3)
console.log(slicedCars)

// Does not modify reference array unlike .reverse()
slicedCars.unshift("Honda")
console.log(slicedCars)
console.log(carList)

let dinnerIdeas = ["bulgogi", "fried chicken", "italian beef", "sad single frozen pizza and cheap wine"]

let newDinnerIdeas = dinnerIdeas.slice(3)
console.log(newDinnerIdeas)

/*
    .splice() ==> changes contents by removing array item and replacing it with something else.
    - parameters ar (start, deleteCount, itemToBeAdded)
*/

let months = ["January", "March", "April", "June"]

months.splice(1, 0, "February")
// adds February in index one and removes nothing
console.log(months)

months.splice(0,3, "Jan")
// adds Jan and removes January
console.log(months)

/* 
    .join() ==> creates and returns new string by concatenating all items in an array
        - (seperator)
*/

let greetings = ["HI", "Hello", "Welcome", "Guten tag"]

let nakedJoin = greetings.join()
// default; concatenates using commas
console.log(nakedJoin)

let concatJoin = greetings.join("")
// concatenate with no spaces
console.log(concatJoin)

let dashJoin = greetings.join("-")
// concatenate using dashes
console.log(dashJoin)

/*
    .includes() ==> checks if a value exists and returns true or false.
*/

let bulldogs = ["Old English Bulldog", "English Bulldog", "French Bulldog", "Bullmastiff", "victorian Bulldog"]

let includesFrenchie = bulldogs.includes("French Bulldog")

console.log(includesFrenchie)

/*
    .sort() ==> sorts elements as strings in ascending (default) or descending order.
*/

console.log(bulldogs.sort())

let cost = [3, 4, 13, 4]

console.log(cost.sort((a, b) => b - a))

/*
    forEach ==> executes a fx for each element in an array
*/

let grades = [56, 78, 96, 98, 100, 65]

grades.forEach((element, index) => console.log(element, index))

grades.forEach((item, index, myArr) => myArr[index] = item + 15)

console.log(grades)

/*
    ! .map() ==> creates a new array with results from the callback function
*/

let marvelCharacters = ["Captain America", "Black Widow", "Doctor Strange", "Ant Man", "Spider Man", "Angelina Jolie in Eternals say whaaaa?!"]

let marvelCharCaps = marvelCharacters.map(character => character.toUpperCase())

console.log(marvelCharCaps)

/*
    ! .filter() ==> creates a new array with elements that pass the test in a callback function
*/

let startsA =marvelCharacters.filter(character => character.startsWith("A"))

console.log(startsA)














