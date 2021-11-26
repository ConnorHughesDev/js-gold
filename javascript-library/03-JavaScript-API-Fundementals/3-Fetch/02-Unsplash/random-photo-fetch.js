let randomImage = document.querySelector('.random-image');
console.log("randomImage:", randomImage);

fetch('https://source.unsplash.com/random')
.then(function(responce) {
    if (!responce.ok) {
        console.log(responce);
        return new Error(responce);
    }
    console.log("responce", responce)
    return responce.blob();
})
.then(function(photoBlob) {
    console.log("My Blob:", photoBlob)
    var objectURL = URL.createObjectURL(photoBlob);
    console.log("Object URL:", objectURL);
    randomImage.src = objectURL;

    console.log("randomImage.src, randomImage.src");
})
.catch(function(err) {
    console.log(err);
})