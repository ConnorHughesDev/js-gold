const apiURL = "https://api.spacexdata.com/v3/capsules/";

fetch(apiURL)
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))

async function getData() {
    let responce = await fetch("https://api.spacexdata.com/v3/capsules/")
    let data = await responce.json()
    console.log(data)
}

getData()