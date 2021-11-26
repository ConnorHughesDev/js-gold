// Array Destructuring

/*
    -allows you to unpack valurs from arrays, or even properties from objects int distict variables

    ? Destructuring uses very similar syntax as array literals, but is instead on the left hand side of the assignment
    ? operator, which is where we difine what values to unpack from the sources variable (array/object)

    Grat for pulling info out of an array/object and assigning that data to its own variable.
*/

// const fullName = ["Gary", "Wonder"]

// const firstName = fullName[0];
// const lastName = fullName[1];   // ! THIS IS THE LONG WAY TO DESTRUCT AN ARRAY
// console.log(firstName, lastName);

// const[firstName, lastName] = fullName;
// console.log("destructured",firstName, lastName);

// ! What you include in the square brackets on the left side of the operator are variable names for the elements 
// ! in the array on the right side of the assignment operator.

//? What JS will do: pull out the values stored in the fullName variable , and assign them based off of their postition 
//? in the original array, to the variables we declared using destructuring. This is very powerful syntax for splitting
//? an array into variables we can the work with.

/*
    ?Rest operator

    syntax looks exactly like spread operator.

    ?In a way, rest syntax is the opposit of the spread syntax. Spread syntax "expands" an array into it's elements, while rest syntax collects multiple
    ?elements and "condenses" them into a single element.
*/

// const fullName = ["Gary", "Wonder", "Mr", {month: 12, day: 18, year:1985}]

// const [firstName, lastName, ...otherInfo] = fullName;

// console.log(firstName);
// console.log(lastName);
// console.log(otherInfo);
// console.log(fullName);

/*
    ? Any other values that are now added to our fullName array, will be packaged up with the REST of our data that fills under the umbrella of the
    ? rest operator declared as otherInfo
*/

// const fullName = ["Gary", "Wonder", "Mr", {month: 12, day: 18, year:1985}, "testOne", 5, null, true]

// const [firstName, lastName, ...otherInfo] = fullName;

// console.log(firstName);
// console.log(lastName);
// console.log(otherInfo);
// console.log(fullName);

//? values can also be skipped or omitted if we don't want to assign them to a varible while using array destructuring

const fullName = ["Gary", "Wonder", "Mr", {month: 12, day: 18, year:1985}, "testOne", 5, null, true, "Happy"]

const [firstName, lastName, , , ,...info] = fullName;

console.log(firstName);
console.log(lastName);
console.log(info);

//! NOTE: rest operator MUST be the last element defined when using array destructuring

