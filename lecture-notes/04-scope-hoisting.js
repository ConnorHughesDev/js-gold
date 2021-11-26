// Ccope & Hoisting

/*
    Scope detrmines how different blocks of code can be accessed.
        - Global scope
        - Block scope
        - Function scope
        - Module scope
        - Lexical scope
*/

// ! Global scope

/*
    Window object in terms of the clien (browser)
    JS file when using runtime env such as Node.js
    Accesseble from every othe scope
*/

let x;
console.log(x)

function addOne() {
    // function scope
    x = 1
}

addOne()

console.log(x)

if (x == 1) {
    // block scope
    x += 1
}

console.log(x)

// function scope
// Can be accessed inside only inside the function

function carName() {
    let make = "Maserati"
    console.log(make)
    let model = "GranTurismo"
    var year = 2015
}
//carName()  console.logs fx scope variable of make

// console.log(model) /referenceError: cannot access fx scope from global scope

// console.log(year) ReferenceError: var is hoisted but still unable to be access fx from global scope



// ! Block scope

function house() {
    let bedrooms = 2
    var bathrooms = 3

    if (true) {
        console.log(bedrooms)
        console.log(bathrooms)
        let address = "123 Main St"
        var forSale = false
    }

    // console.log(address) ReferenceErroe: let is block scoped
    console.log(forSale) // var is fx scope
}

house()

/*
    Let is scoped to the immediate enclosing block of code.
    Var is scoped to the immediate gunction block.
*/

// Module scope (Blue Badge Material)

/*
    Module xcope encapsulates variables that are created inside of a module that is being imported.
    It protects the variables from being accessed outside.
*/

let pi = Math.PI
console.log(pi) // I can acces pi but I cannot modify it. Keeps it safe.

// Lexical Scope

/*
    Variables are accessible by the position of them nested within the function scopes. 
    Inner function scope can access outer function scope.
*/

function outerFunction() {
    // outer scope
    let outerFxVar = "Hello from the outer side!"

    function innerFunction() {
        // inner scope
        console.log(outerFxVar)
    }

    return innerFunction
}

let inner = outerFunction()
inner()

// Hoisting

/*
    JS as an interpreted language is being read top to bottom and left to right.
    The parser which reads the code goes over it twice.
    First, to hoist or assign memory location to all:
        - VARiables
        - Function declarations
    During second pass, the interpreter reads initialization values an expressions and executes the code.
*/

let y;
console.log(y)
// 1. Y gets declared and automatically assignes value of undefined
// 2. console.log reads the undefined value above

// console.log(z) RferenceError ==> because we're calling on z before it's declared.
let z;

// var declaration gets hoisted first, before console.log executes
// "Test value" does not log because only declaration is hoisted
console.log(a)
var a = "test value";

// Hoisting & Fx Declaration vs Fx Expression

// Function declaration
// Invoking fx before creation works because fx gets hoisted with everything in it.
helloWorld()
function helloWorld() {
    if (true) {
        var adele = "Adele" // var scoped to fx
        // let adele = "Adele" Reference Error -> let scoped to block not fx
    }
    console.log(`Hello World from the Hoisting Side! - ${adele}`)
}

// Function expression

let addNums = (x, y) => console.log(x + y)
// Works -> fx expression created, THEN invoked
addNums(5, 5)

// subNums(5 - 1) TypeError -> becuase subNums declaration is hoisted with a default value of undefined
var subNums = (x, y) => console.log(x - y)
// subNums becomes fx expression ONLY after being assigned a value of a function

// Above is same as:
// var subNums = function(x, y) {
//     console.log(x - y)
// }

/*
    Things that are NOT hoisted:
        - let variables
        - const variables
        - fx expressions
        - classes
*/


// Create a function to remove the spaces found in a string
// and return a string with spaces removed.

function removeSpaces(string) {
    strRemoved = ""
    for (letter of string) {
        // console.log(letter)
        if (letter != " ") {
            strRemoved += letter
        }
    }
    return strRemoved
}

let adele = "pniemczyk@elevenfifty.org"

console.log(removeSpaces(adele))

function cleanUpEmail(email) {
    let final = ""
    for (i of email) {
        if (!i.includes("^") && !i.includes("/")) {
            final += i
        }
    }
    return final
}

console.log(cleanUpEmail("pn^/iemczyk@elevenfifty.org"))



