const display = (image1, image2) => {
    document.getElementById('imageOne').src = image1
    document.getElementById('imageTwo').src = image2
  }
  
  fetch('https://rickandmortyapi.com/api/character/')
  .then(response => response.json())
  .then(data => {
    let pic1 = data.results[13].image
    let pic2 = data.results[14].image
      display(pic1, pic2)
  })
  
  