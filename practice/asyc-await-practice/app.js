// let baseURL = 'https://api.spacexdata.com/v3/capsules';

// let fetchData = async () => {
//     await fetch(baseURL)
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// fetchData()


const apiUrl = 'https://rickandmortyapi.com/api/location/';

const retrieveLocation = async(id) => {
  const response = await fetch(apiUrl)
  const data = await response.json()
  return data.results[id-1].name
}

retrieveLocation()

document.getElementById('getLocation').addEventListener('click',()=>{retrieveLocation(document.getElementById('locationId').value).then(name=>{document.getElementById('locationName').innerHTML=name;});});

const retrieveLocation = async(id) => {
  const response = await fetch(apiUrl)
  const data = await response.json()
  return data.results[id].name
}

retrieveLocation()




/*
   Purpose to get data from API
   Once we get the data from the API want another fx to generate our wlwments
   The API will retun our data and then that data will be injected into the function invokation thru its parameter
*/

// async function getAPI() {
//   let res = await fetch("https://swapi.dev/api/people")
//   let data = await res.json()
//   let result = data.results

//   displayData(result)
// }

// gatAPI()      //result becomes info in the next function

// function displayData(info) {
//   let ul = document.createElement('ul')
//   document.body.appendChild(ul)
//   for (item of info) {
//     if (item.name == "Luke Skywalker") {
//         let hairColor = item.hair_color
//         console.log(hairColor)
//     }
//   }
// }

// function displayData(info) {
//   let ul = document.createElement('ul')
//   document.body.appendChild(ul)
//   for (item of info) {
//     if (item.name == "Luke Skywalker") {
//         let hairColor = item.hair_color
//         console.log(hairColor)
//     }
//   }
// }




// mini promise lesson

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1
//   if (a == 2) {
//     resolve("Success")
//   } else {
//       reject("Failed")
//   }
// })

// p.then(message => console.log("This is in the then" + message))



