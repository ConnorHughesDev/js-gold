//API Promises Fetch Async Await

// API

/*
    Application Programming Interface allows apps to communicate with one another.

    Code that allows us access points from the client (browser) to the server (could be our own or one from an API we're pulling data from, such as SpaceX).

    API works through sending HTTP requests from our client (browser) and recieving HTTP reponses from the server.

    This happens using REST API which stands for Representational State Transfer.
    It is a service that allows us to send specific requests and recieve specific responses in a client-server communication.

    HTTP request can have several pieces of info attached to it:
        - Endpints (URL) - where we're going
        - Query Strings (in URL) to pass info to the server withour request body (only in a GET request)
        - Headers - metadata
        - Body - where request/responce info is being stored (only in POST, PUT, DELETE)

    HTTP reponse which we get from the server agter HTTP request 
        - Reponse body - information that will be served to us
        - Repnse conde - tells us what happened with our request
            - 200 - all good
            - 404 - not found
            - 500 - server error
            - 403 - forbiddenS
*/

// Promises

/*
    Promise represents a value that is unkown when the promis is created, byt represints the eventual fulfilled value or rejection.
        - Pending: initial stat (not fulfilles nor rejected)
        - Fulfilled: completed succesfully
        - Rejected: operation failed
*/

// let myPromise = new Promise((resolved, rejected) => {
//     setTimeout(() => {
//         if (1 + 1 == 2) {
//             resolved("Success")
//         } else {
//             rejected("Failed. It didn't resolve")
//         }
//     }, 10000)
// })

// console.log(myPromise)

// myPromise
// .then(data => console.log(data))
// .catch(data => console.log(data))

// Fetch

/*
    Fetch API is an asynchronous method and is pert of a browser window. It retuns a promis that can be resolved int a response object.
*/

// fetch("https://api.spacexdata.com/v3/capsules/upcoming")
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

// Asychronous Function

/*
    Introduced in ES8 Async allows us to avoid chaining promises.
    Allows us to write async code in a synchronous matter and run applications concurrantly.
    Still retuns a promise just like fetch
*/

// ! Synchronous Fx Declaration
function getData() {
    setTimeout(() => {
        return "some data"
    }, 3000)
}

let data = getData()
console.log(data)

function standFx() {
    return "This is a synchronus function"
}

async function asyncFx() {
    return Promise.resolve("The result of a resolved promise.") // We used this instead of await to explain promises
}

console.log(asyncFx())
console.log(standFx())









