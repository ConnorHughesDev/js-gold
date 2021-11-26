/*
    Create a function expression called myName, which takes first and last name as parameters, and returns a string interpolated result.
    For ex: pushing “Ryan” & “Reynolds” will result with a return of “Ryan Reynolds.
*/

let myName = function(fName, lName) {  // function expression = function stored in a variable
    return `${fName} ${lName}`
}
// console.log just allows to display in console. it is not needed
console.log(myName("Connor", "Hughes"))  



function myName(fName, lName) {   // function declaration = function declared
    return `${fName} ${lName}`
}

/*
    Loop over numbers from 0-100. If the number is divisible by 2, interpolate “The number __ is divisible by 2”. 
    If the number is divisible by 5, interpolate “The number is divisible by 5”. If the number is divisible by both 2 & 5, 
    interpolate “The number __ is divisible by 2 & 5”. If the number is neither, interpolate “The number __ doesn’t meet any criteria”.
*/

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0 && i % 5 === 0) {  // or (i % 10 === 0) 10 is the closest common denominator of 2 and 10
        console.log(`The number ${i} is dividible by 2 & 5`)
    } else if (i % 2 === 0) {
        console.log(`The number ${i} is divisible by 2`)
    } else if (i % 5 === 0) {
        console.log(`The number ${i} is divisible by 5`)            // conditional could be a switch or ternary as well
    } else {
        console.log(`The number ${i} does not meet any criteria`)
    }
}

/*
Create a function declaration circleCircumference which takes a parameter of radius and returns the circumference. Call the function and console.log its result.
HINTS:
    - Mathematical formula to find circumference of a circle is C = 2*pi*r
    - Hardcore pi using 3.14 or utilize Math.PI property
*/

function circleCircumference(radius) {
    return 2 * Math.PI * radius
}

console.log(circleCircumference(20))

/*
    Create an object literal named school with properties of teacher (str), subject (str), and isTenured (bool). 
    Create a property of the student that’s an object which will hold two arrays: name with strings of student names (two or more), 
    and grade integer (two or more)
        Console.log the first student grade
        Reassign that grade to 100 and console log it
*/

let school = {
    teacher: "Paul",
    subject: "Web Dev",
    isTenured: true,
    student: {
        name: ["Thomas", "Nick"],
        grade: [57, 86]
    }
}

console.log(school.student.grade[0])
school.student.grade[0] = 100

console.log(school.student.grade[0])





