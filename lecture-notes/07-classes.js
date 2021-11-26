// Classes

/*
    Templates or blueprints for creating objects. They encapsulate data wit code. JS is a heavily prototype-based OOP language.

    Classes are considered special functions and therefore can be defined as:
        - Class Declaration
            - Unlike Fx declaration, Class declarations are NOT hoisted (unless we discuss Temporal Dead Zone)
        - Class expression
*/

// Class name should always be PascalCase
class Teacher {
    // constructor -  is a class method for creation and initilization of a class object.
    constructor(name, subject, tenure, isPolyglot) {
        this.name = name
        this.subject = subject
        this.tenure = tenure                               // Class Declaration
        this.isPolyglot = isPolyglot
    }

    // Class body
}

// Crating new instance of Teacher Class Declaration

let pNiemczyk = new Teacher("Paul", "web dev", 2020, true)
pNiemczyk.subject = "Math"

console.log(pNiemczyk)

// Creating objects for every teacher is laborious.
// Class gives us an easy template to reuse over and over again.

// Class Expression

let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
    }

}
    // use $ or _ because you can't start a variable with a integer
let $10070rangeSt = new House("1007 Orange St", 3, 2)
console.log($10070rangeSt)
let $420ParkAve = new House("430 N Park Ave", 1, 1)
console.log($420ParkAve)

// Class Methods

/*
    Method is a function that lives inside of a class that can be reused on any class instances.
*/

class Car {
    constructor(make, model, year, transmission) {
        this.make = make
        this.model = model
        this.year = year
        this.transmission = transmission
    }

    greetCar() {
        console.log(`Welcome to your ${this.year} ${this.make} ${this.model}`)
    }

    greetDriver(driver) {
        console.log(`Hellos ${driver}, your ${this.make} is ready to go!`)
    }

    age(currentYear) {
        let result = currentYear - this.year
        return ` Your car is ${result} years old.`
    }
}

let jeep = new Car("Jeep", "Wrangler", 2019, "manual")

console.log(jeep) // returns instance of a CLass
jeep.greetCar() // returns str of constructor params
jeep.greetDriver("Kyle") // ^^ + passing our own parameter

console.log(jeep.age(2021))

// Challenge

/*
    Create a class object called Avengers. Avengers will have properties of name, superpower, age, isDead, keyMovie.

    Create an instance of that object with the superhero name and its properteis

    ? Create a method that console logs the name and keyMovie togetther

    ! SPICEY MODE
    ! Create a method that takes the name of the superhero and checks it against two arrays. One with Team Cap, and one with Team Stark and returns which team the superherow as a part of during Civil War

    ! Be done 11:05 ET
*/

class Avengers{
    constructor(name, superpower, age, isDead, keyMovie) {
        this.name = name
        this.superpower = superpower
        this.age = age
        this.isDead = isDead
        this.keyMovie = keyMovie
    }

    movieStarred() {
        console.log(`${this.name} was in the movie ${this.keyMovie}`)
    }

    whichTeam() {
        let teamCap = ["Steve Rogers", "Captain America", "Bucky", "Wanda", "Hawkeye", "Ant Man"]
        let teamStark = ["Tony Stark", "Vision", "War Machine", "Black Panther", "Black Widow", "Natasha Romanoff"]
        if (teamCap.includes(this.name)) {
            return `${this.name} is Team Captain`
        } else if (teamStark.includes(this.name)) {
            return `${this.name} is Team Tony`
        } else {
            return `${this.name} is not in our database`
        }
    }
}

let spiderMan = new Avengers("SpiderMan", "Spidey Powers", 18, false, "Enter the Spiderverse")
spiderMan.movieStarred()
console.log(spiderMan.whichTeam()) // Will return "not in our databse"

// Inheritance
// Extends

/*
    Extends creates a class that is a child of antoher (parent) class.
    Syntax:
        class ChildClass extends ParentClass {
        constructor(params of parent & child) {
            super(params of parent)
            this.childProperties
        }
    }
*/

// class Car {
//     constructor(make, model, year, transmission) {
//         this.make = make
//         this.model = model
//         this.year = year
//         this.transmission = transmission
//     }

//     greetCar() {
//         console.log(`Welcome to your ${this.year} ${this.make} ${this.model}`)
//     }

//     greetDriver(driver) {
//         console.log(`Hellos ${driver}, your ${this.make} is ready to go!`)
//     }

//     age(currentYear) {
//         let result = currentYear - this.year
//         return ` Your car is ${result} years old.`
//     }
// }

class Options extends Car {
    constructor(
        make,
        model,
        year,
        transmission,
        hasLeather,
        hasComfortAccess,
        hasSportPackage,
    ) {
        // super method inherits parent class properties & methods
        super(make, model, year, transmission)
        this.hasLeather = hasLeather
        this.hasComfortAccess = hasComfortAccess
        this.hasSportPackage = hasSportPackage
    }

    isCPO(currentYear) {
        let result = currentYear - this.year
        return result >= 6
            ? `Your ${this.model} is out of wrranty`
            : `Your warranty is still active`
    }
}

let maseratiGTS = new Options("Maserati", "GranTurismo S", 2015, "auto", true, false, true)

console.log(maseratiGTS)
console.log(maseratiGTS.isCPO(2021))

class DateFormatter extends Date {
    getFormattedDate() {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ]
        return `${this.getDate()} - ${months[this.getMonth()]} - ${this.getFullYear}`
    }
}

console.log(new DateFormatter("June 29, 2021 12:15:00"). getFormattedDate)

// Challenge

/*
    Extend the House class with one called Sale.
    Sale should have properties appraisalValue (int), listPrice (int), agent (str), and isListed (bool)
    Create a method which calculates the difference between appraisalValue and the listPrice. Add a condtitional that will check if list is 20% higher than appraisal. 
    If it is > 20, not worth it. Otherwise, a good deal.
    The return should also incldue the difference between the two values.
*/

// let House = class {
//     constructor(address, bedrooms, bathrooms) {
//         this.address = address
//         this.bedrooms = bedrooms
//         this.bathrooms = bathrooms
//     }

// }

class Sale extends House {
    constructor(
        address,
        bedrooms,
        bathrooms,
        appraiseValue,
        listPrice,
        agent,
        isListed
    ) {
        super(address, bedrooms, bathrooms)
        this.appraiseValue = appraiseValue
        this.listPrice = listPrice
        this.agent = agent
        this.isListed = isListed
    }

    calculateDifference() {
        let difference = this.listPrice - this.appraiseValue
        if (this.listPrice > (this.appraiseValue * 1.2)) {
            return `This is not worth it. The list price is ${difference} more than appraisal of ${this.appraiseValue}`
        } else {
            return `This is a good deal. the list price is ${difference} off of the appraisal value of this ${this.appraiseValue}`
        }
    }
}

let myHouse = new Sale("", 2, 2, 300000, 250000)

console.log(myHouse.calculateDifference())









