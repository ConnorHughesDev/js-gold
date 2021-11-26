/*
    Spread Operator
    Essentially pulls out all th elements of an array and gives them to you as a standalone list of items.

    Denoted...
*/
// Incorrect Syntax
const fullName = ["Gary", "Weston"];

// ...fullName

// const elements = ...fullName // 1. looks like
// const elements = "Gary", "Weston"; // this.

// Correct syntax
const copiedFullName = [...fullName];
console.log(copiedFullName)

/*
    ? If we inserted fullName variable inside of the aray without using the spread syntax, we would just be inserting the array as a whole. as the first
    ? index of the new array. Since the spread syntax actually pulls out all of the elements of an array and gives them back to us as standalone list of 
    ? elements, we will actually have a new array with those standalone elements inserted.

    ? One of the advantages of the spread operator is that, down the line, if we decide that we need to add (or push) another value to our original array, we can do
    ? that without altering our copied array. Keep in mind that this dependant on what data types we're actually working with. Here, wee are pushing a 
    ? primitive data type, so we don't run into any issues
*/

fullName.push("Mr.");
console.log(fullName, copiedFullName)

// Spread Operator & Numbers

/*
    JS has a global Math object that has it's own built in mehtods, like the min method, that looks at a list of integers and returns the smallest value.
*/

console.log(Math.min (1, 5, -3));

// min will not work on an array, it is expecting a number

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(prices));

/*
    This is where the spread operator will come in handy. We can use the spread operator to pull these elements out of the prices array, so we have
    a comma seperated list of elements, which is what the min method requires.
*/

console.log(Math.min(...prices))

// Anytime that you are working with a function, or a method that requires a list of standalone values, the spread operator helps you get these values out of an array.

/*
    ? Spread Operator & Objects
*/

const persons = [{name: "Jerry", age: 37}, {name: "Bob", age: 12}];
const copiedPersons = [...persons]
// console.log(copiedPersons, persons)

persons.push({name: "Ginger", age: 29})

console.log(copiedPersons, persons)

/*
    ? This is where it can get a bit tricky behind the scenes
        -JS has 5 data types that are passed by value: boolean, null, undefinded, string, and number. These are primitive data types.

        - If a primitve datat type is assigned to a variable, we can think of that variable as containing the primitive value.
*/

let x = 10;
let y = "abc";
let z = null;

/*
    variable        value
    x               10
    y               "abc"
    z               null
*/

let a = x;
let b = y;

console.log(x, y, a, b); // 10, "abc", 10, "abc"

// Changing one variable does NOT change the other. Think of the variables as having no relationship to each other.

// let x = 10;
// let y = "abc";

// let a = x;
// let b = y;

// a = 5;
// b = "def"

// console.log(x, y, a, b)

/*
    ! JS also has 3 data types that are passed by reference: array, function, and object. These are all technically objects, so we'll refer to them
    ! collectively as objects.

    ? Variables that are assigned to a non primitive value are given a reference to that value. The reference pints to that objects location in memory.
    ? The variables don't actually contain the value.
    
    ! Objects are created at a location on your computers memory. When we write arr = [], we've created an array in memory. What the variable arr receives
    ! is the address (the location), of the array.

    let's pretend that the address is a new data type that is passed by value, jsut like a primitive data type would be. An address point to the location, 
    in memory, of a balur that is passed by reference.
        address is denoted by <>

        When we assign and use a reference type variable, what we write and see is:
*/

let arr = [];
arr.push(1)

/*
    A representation of what the above looks like in memoty would be this:

            VARIABLE        VALUE       ADDRESS         OBJECT
            arr             <#001>      #001            []
            arr             <#001>      #001            [1]

    ? When a reference type value (array, function Object) is copied to another variable using =, the address of that value is actually copied over as
    ? if it were primitive. Arrays, functions and objects are copied by reference instead of by value.
*/

let reference = [1];
let refCopy = reference;

/* A representation of what the above looks like in memoty would be this:

            VARIABLE        VALUE       ADDRESS         OBJECT
            reference       <#001>      #001            [1]
            refCopy         <#001>      
*/

reference.push(2);
console.log(reference, refCopy);

/*A representation of what the above looks like in memoty would be this:

            VARIABLE        VALUE       ADDRESS         OBJECT
            reference       <#001>      #001            [1,2]
            refCopy         <#001> 

*/

const persons = [{name: "Jerry", age: 37}, {name: "Bob", age: 12}];
const copiedPersons = [...persons]

persons.push({name: "Ginger", age: 29})
// hence, if we did change one of the values in one of the objects in out persons array, that change will also be referenced in copiedPersons. 
// This happens because we copied the address to the place in memory with the copiedPersons variable, and then we changed the value of our
// name key in the memory itself. So any changes we make in persons or copiedPersons will also be reflected in its counterpart.

copiedPersons[0].name = "Paul";
persons[0].name = "Mike";
console.log(persons, copiedPersons);

/*
    ! Spread Operator and Avoiding Changing both the original and Copied Array
*/

const persons = [{name: "Jerry", age: 37}, {name: "Bob", age: 12}];
//If you want to avoid changing both the original array and the copies array, you would hve to copy every object
const copiedPersons = persons.map(person => ({
    name: person.name,
    age: person.age
})) // since we're returning something in curly braces we have to enclose it in parens so that HS doesn't think it is the arrow functions body

persons.push({name: "Ginger", age: 50});
copiedPersons[0].name = "Paul";
console.log(persons, copiedPersons)

/*
    Only copy what you plan on changing, where you don't want those changes in the original set of data.
*/

// Challenge:
//Spread operator challenge.
//Without modifying the original two arrays, combine two new arrays into one new array with the spread operator.
//You will see the entire alphabet in ONE single array
const aThroughM = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
const nThroughZ = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const copyAll = [...aThroughM, ...nThroughZ]
console.log(copyAll)
// aThroughM.push(...nThroughZ)
// console.log(aThroughM);        // This is incorrect for what was asked. alters original first array



