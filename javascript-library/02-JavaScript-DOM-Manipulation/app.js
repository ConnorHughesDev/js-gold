var x = 10;
console.log(x)

document.getElementById('testParagraph').style.color = 'blue';
console.log(document.getElementById('testParagraph').style.color);

console.log(document.querySelectorAll("p.sampleClass"));

document.querySelectorAll("p.sampleClass")[0].innerText = "My text was changed!";

console.log(document.querySelectorAll("p.sampleClass"));
document.querySelectorAll("p.sampleClass")[0].innerHTML = "<span>I am a whole new element!</span>"

document.getElementById('clickThisButton').addEventListener('click', () => {
    console.log('I was clicked!');
});

document.getElementById('clickThisButton').addEventListener('click', (details) => {
    console.log(details);
});

document.getElementById('clickThisButton').addEventListener('click', (details) => {
    details.target.style.backgroundColor = 'red';
});

document.getElementById('nameInput').addEventListener('keyup', (event) => {
    console.log(event);
})

document.getElementById('nameInput').addEventListener('keyup', (event) => {
    console.log(event.target.value);
    console.log(document.getElementsByTagName("p"));
})

document.getElementById('nameInput').addEventListener('keyup', (event) => {
    if (event.target.value === '') {
        document.getElementsByTagName('p')[1].innerText = `No name has been entered`;
    } else {
        document.getElementsByTagName("p")[1].innerText = `Everyone please welcome ${event.target.value} to the stage.`;
    }
});