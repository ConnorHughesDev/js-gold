// Objects

/*
    Objects - containers for values in a JavaScript Object Notation format (JSON)
        - exist as a string
        -  has properties and methods
        - .property
        - .method()
*/

let student = {
    // key : value pairs which are comma seperated
    fName: "Connor",
    lName: "Hughes",
    address: "123 Main St",
    isEnrolled: true,
    balanceOwed: 7450,
}

// console.log(student)
console.table(student)
console.log(student.fName) // access using key
console.log(student["balanceOwed"]) // access using object key
let returnKeys = Object.keys(student)
console.log(returnKeys)

// Object property reassignment
student.balanceOwed = 0 //property reassignment
console.log(student.balanceOwed)
student.address = "1680 House Dr"
console.log(student)
student["isEnrolled"] = false // object key reassignment []
console.log(student)
student.isEnrolled = true // property reassignment

let studentValues = Object.values(student)
console.log(studentValues)

// Object Constructor

let client = new Object();
console.log(client)

client.firstName = "Paul"
client.lastName = "Niemczyk"
client.birthYear = 1990
console.log(client)

let manager = {
    name: "Summer Kerekes",
    position: "manager",
    isActive: true,
    department: "technology",
    reportsTo: [
        "Paul", "Adam", "Ing"
    ],
    caresFor: {
        trainees: ["Corynee", "Isaiah"],
        learnA: ["Adam", "Chelsey"]
    }
}



console.log(`this ${manager.position} reports to ${manager.reportsTo[2]}`)

console.log(`Summer cares for ${manager.caresFor.trainees}`)

manager.caresFor.learnA.push("Johnathan")

console.log(manager)

// Challenge

const presidents = [
        { first: 'George', last: 'Washington', year: 1732, passed: 1799 },
        { first: 'John', last: 'Adams', year: 1735, passed: 1826 },
        { first: 'Thomas', last: 'Jefferson', year: 1743, passed: 1826 },
        { first: 'James', last: 'Madison', year: 1751, passed: 1836 },
        { first: 'James', last: 'Monroe', year: 1758, passed: 1831 },
        { first: 'John', last: 'Adams', year: 1767, passed: 1848 },
        { first: 'Andrew', last: 'Jackson', year: 1767, passed: 1845 },
        { first: 'Martin', last: 'Van Buren', year: 1782, passed: 1862 },
        { first: 'William', last: 'Harrison', year: 1773, passed: 1841 },
        { first: 'John', last: 'Tyler', year: 1790, passed: 1862 },
        { first: 'James', last: 'Polk', year: 1795, passed: 1849 },
        { first: 'Zachary', last: 'Taylor', year: 1784, passed: 1850 },
        { first: 'Millard', last: 'Fillmore', year: 1800, passed: 1874 },
        { first: 'Franklin', last: 'Pierce', year: 1804, passed: 1869 },
        { first: 'James', last: 'Buchanan', year: 1791, passed: 1868 },
        { first: 'Abraham', last: 'Lincoln', year: 1809, passed: 1865 },
        { first: 'Andrew', last: 'Johnson', year: 1808, passed: 1875 },
        { first: 'Ulysses', last: 'Grant', year: 1822, passed: 1885 },
        { first: 'Rutherford', last: 'Hayes', year: 1822, passed: 1893 },
        { first: 'James', last: 'Garfield', year: 1831, passed: 1881 },
        { first: 'Chester', last: 'Arthur', year: 1829, passed: 1886 },
        { first: 'Grover', last: 'Cleveland', year: 1837, passed: 1908 },
        { first: 'Benjamin', last: 'Harrison', year: 1833, passed: 1901 },
        { first: 'William', last: 'McKinley', year: 1843, passed: 1901 },
        { first: 'Theodore', last: 'Roosevelt', year: 1858, passed: 1919 },
        { first: 'William', last: 'Taft', year: 1857, passed: 1930 },
        { first: 'Woodrow', last: 'Wilson', year: 1856, passed: 1924 },
        { first: 'Warren', last: 'Harding', year: 1865, passed: 1923 },
        { first: 'Calvin', last: 'Coolidge', year: 1872, passed: 1933 },
        { first: 'Herbert', last: 'Hoover', year: 1874, passed: 1964 },
        { first: 'Franklin', last: 'Roosevelt', year: 1882, passed: 1945 },
        { first: 'Harry', last: 'Truman', year: 1884, passed: 1972 },
        { first: 'Dwight', last: 'Eisenhower', year: 1890, passed: 1969 },
        { first: 'John', last: 'Kennedy', year: 1917, passed: 1963 },
        { first: 'Lyndon', last: 'Johnson', year: 1908, passed: 1973 },
        { first: 'Richard', last: 'Nixon', year: 1913, passed: 1994 },
        { first: 'Gerald', last: 'Ford', year: 1913, passed: 2006 },
        { first: 'Jimmy', last: 'Carter', year: 1924, passed: undefined },
        { first: 'Ronald', last: 'Reagan', year: 1911, passed: 2004 },
        { first: 'George', last: 'Bush', year: 1924, passed: 2018 },
        { first: 'Bill', last: 'Clinton', year: 1946, passed: undefined },
        { first: 'George', last: 'Bush', year: 1946, passed: undefined },
        { first: 'Barack', last: 'Obama', year: 1961, passed: undefined },
        { first: 'Donald', last: 'Trump', year: 1946, passed: undefined },
    ];

/*
    Utilize a filter method to create a new array wiht presidents who were born after the 1900's.
*/

let presidents1900 = presidents.filter(president => president.year >= 1900)

// let presidents1900 = presidents.filter(function(pres) {
//     // if (pres.year >= 1900) {
//     //     return pres
//     // } or to simplify
//         return pres.year >= 1900  
// })

console.log(presidents1900)




presidents1900.forEach(({first, last}) => console.log(`${first} ${last}`)) 

// presidents1900.forEach(pres => console.log(`${pres.first} ${pres.last}`)) 











// hello


// Document Object Model (DOM)

/*
    DOM is a data representation of the objects that comprise the structure and content of a document on the web.
    It containts, but is not limited to:
        - Document
            - HTML
                - Head
                    - Meta tags
                    - Link tags
                    - Title tags
                - Body
                    - Nav
                    - Header
                    - Div's
                    - H1's and so on ...
                - And any of their attributes
*/

// Creating our first element
// let h1 = document.createElement("h1")
// h1.innerText = "My first DOM element!"
// h1.style.color = "slategray"
// h1.style.float = "right"
// document.body.appendChild(h1)

// ? OFF TOPIC: Accessing device config with DOM
// let info = navigator.oscpu
// console.log(info)

// Accessing Single element from HTML file

// getElementById selects first instance of an id "listTitle"
let listTitle = document.getElementById("listTitle")
console.log(listTitle)
listTitle.innerText = "Hermione's To-Do & Grocery List"

// Accessing elements using QuerySelector
/*
    Most verstatile of all selectors.
        - acess first element if there's more than one
        - return null if no element is found
        - access by element name, .class, or #id
*/

// let listItem = document.querySelector("ul li")
let listItem = document.querySelector(".listItem")
console.log(listItem)
listItem.style.textAlign = "center"
listItem.style.color = "red"

// Accessing Multiple Elements
/*
    - When accessing several elements, a HTMLCollection is returned
    - Not an array but works like one
        - Can loop through it
        - Can use length property to get the size of the list
    - To get element
        - Use array notation
        - Use Item Method
    - Accessing Multiple Elements requires these Methods:
        - querySelectorAll
        - getElementsByClassName
        - getElementsByTagName
*/

let grocery = document.getElementsByClassName("groceryItem")
// console.log(grocery instanceof Array) // shows that HTMLCollection is not an Array even though it acts like it
// console.log(grocery) // Prints HTMLCollection
// console.log(grocery[2]) // Prints Boom Berry Juice

// console.log(grocery.item(2)) // Prints Boom Berry Juice
grocery[0].innerText = "Finn the Mandrake"// changes grocery item at index of 0

// Accessing all li tags using HTMLCollection
let liTag = document.getElementsByTagName("li")
console.log(liTag)

// QuerySelectorAll 

let selectAll = document.querySelectorAll("ul li")
console.log(selectAll)

// Differences between HTMLCollection & Node List

let newListItem = document.createElement("li")
let groceryList = document.getElementById("groceryList")
groceryList.appendChild(newListItem)
newListItem.innerText = "Test of dynamic vs static."

/*
    Looking at console.log, our new element will show up under the HTMLCollection, but it will not show up under nodeList.
    The reason why is because HTMLCollection is dynamic whereas NodeList is static.
*/

// Accessing Nodes in a Tree

console.log(document.body.childNodes)

// Whitespace in elements is considered as text
// Text is considered to be a node
// Comments are nodes

/* 
    childNodes Property returns a collection of nodes as a NodeList object
        - they are sorted top to botoom
        - they are indexable (start at 0)
    Properties:
        - firstChild - first element of node
        - lastChild - last element of node
        - parentNode - parent element of the node
        - nextSibling - element to be accessed next
        - previousSibling - previous element to be accessed
*/

console.log(document.body.children)

let listDiv = document.getElementById("list")
console.log(listDiv.firstChild)
console.log(listDiv.firstChild.nextSibling.nextSibling)
// firstChild drops to first element of the node.
// firstChild nextSibling is in first element of the adjacent element's sibling.

// Element Iteration

for (tag of liTag) {
    // console.log(tag)
    tag.style.fontFamily = "cursive"
    tag.style.color = "#235474"
}

// The loop pulls each element instance from the HTMLCollection and applies these CSS properties to it.