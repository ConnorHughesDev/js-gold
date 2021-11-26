/*
    ? What is an API

    - API stands for Application Program Interface
    - In basic trms. API's jsut allow applications to communicate with one another.

    - The API is not the database or even the server, it is the code that allows us access points to the server.

    - those access points come in the form of an endpoint, which directs us to different sets of data we can access.
*/

/*
    ! Asynchronous Programming

    ? Generall, code is read and implemented line by line - this is known as synchronous programming.

    ? In the case of fetching data from an outside source like we do with an API, if JS did not have the ability to run code asynchronously,
    ? it would have to run each line of cod, wait for the response from the API, and then finish running the rest of our code.

    - In basic terms, asynchronous program to do more than one thing at a time.
    
    ? Async programming allows our code to continue to run while we're waiting on a reapnse feom an API. Once the fetch has finished retrieving
    ? the data, it then presents us wiht that data, without having to wait on any other processes.

    ? The fetch() method is an asynchronous method, and it is part of the browser window, not JS.

    ? The fetch() method starts the process of fetching a resource from the network, and will return a promise which is fulfilled once the
    ? response is available.

    - A promise represents a value that is unkown when the promise is created, but represents the eventual fulfilled value or rejection (error)
        - a promis is ALWAYS one of these states:
            -pending: initial state, neither fulfilled or rejectd
            -fulfilled: meaning the operation completed siccessfully
            -rejected: meaning the operation failed

    - In the case of a fetch request, a peomise will resolve into a Respnse object that represents the responce of the request made.
*/

/*
    ! Accessing the API

    We start by locating and grabbing the base URL of the API:
     SpaceX API documentation: https://docs.spacexdata.com/
*/

const baseURL = "https://api.spacexdata.com/v2/rockets";
const searchForm = document.querySelector("form");
const spaceShips = document.querySelector("table")

// function fetchSpace() {
//     // (1)
//     fetch(baseURL)
//     .then(result => {
//         console.log(result);
//                 //(2)
//         return result.json();
//     })
//     .then(json => {
//         console.log(json);
//         displayRockets(json)
//     })
//     //      (4)
//     .catch()
// }
// fetchSpace();

/*
    1. The fetch method starts the process of fetchig a resource from a network, and that fetch returns a promise
    which is fulfilled once the reponse is available -  Asynchronous coding!

    2. When we capture the result from the API in a promise resolver, it is recieved as JSON(JavaScript Object Notation)
    which we need to convert to a JS object. We do this using the json() method. This method also returns a promise,
    which is why we need to retun the result so that the next promis resolver can handle the response from the json() method.

    3. A callback is a function that is to be executed after another function has finished executing. In this case, out callback function 
    is "displayRockets", and it's waiting on our "fetchSpace" function and all of it's promises to resolve before being called and passed data.

    4. A best practice for fetch is to always include a .catch() so that we can catch any errors that occur throughout the fetch and promise process.
*/

// function displayRockets(rockets) {
//     console.log("API Respnse:", rockets);
//     rockets.forEach(r => {
//         console.log(r);
//         let rocket = document.createElement("li");
//         rocket.innerText = r.name
//         spaceShips.appendChild(rocket);
//     })
// }


// Challange
// Make the "Submit" button call the fetch instead of on page load.

// let button = document.getElementById("submit");
// button.addEventListener("click", (e => {
//     fetchSpace()
// }))

searchForm.addEventListener("submit", fetchSpace);

/*
    ?Everytime we click the submit button, the page refreshes before we can see the results. That is intentional, forms have a default action when tehy
    ?are submitted. This default action is to refresh the page. However, we have a method in JS to prevetn that action from occuring
*/

function fetchSpace() {
    event.preventDefault();
    // (1)
    fetch(baseURL)
    .then(result => {
        console.log(result);
                //(2)
        return result.json();
    })
    .then(json => {
        console.log(json);
        displayRockets(json)
    })
    //      (4)
    .catch()
}

function displayRockets(rockets) {
    console.log("API Respnse:", rockets);
    rockets.forEach(r => {
        console.log(r);
        let rocket = document.createElement("tr");
        let rocketName = document.createElement("td");
        let rocketCost = document.createElement("td");

        rocketName.innerText = r.name;
        rocketCost.innerText = r.cost_per_launch;

        spaceShips.appendChild(rocket);
        rocket.appendChild(rocketName);
        rocket.appendChild(rocketCost);
    })
}

