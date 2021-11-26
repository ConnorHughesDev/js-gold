const apiUrl = 'https://rickandmortyapi.com/api/location/';

const retrieveLocation = async(id) => {
  const response = await fetch(apiUrl)
  // console.log(response)
  const data = await response.json()
  // console.log(data.results[id].name)
  return data.results[id-1].name
}

retrieveLocation()


// Please do not modify this code below
document.getElementById('getLocation')
.addEventListener('click',()=>
{retrieveLocation(document.getElementById('locationId').value)
.then(name=>{document.getElementById('locationName').innerHTML=name;});});