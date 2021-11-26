function greet (greeting, name) {
    return `${greeting} ${name}`
};

console.log(greet("Hello", "Connor"))


for(let i = 0; i <= 100; i++) {
    if(i % 15 === 0) {
        console.log("Fizz Buzz");
    } else if(i % 3 === 0) {
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}

function parameter(base, height) {
    let area = base * height;
    console.log(area)
}

let monsters = {
    goblin: {
        traits: ["sneaky", "trait2"],
        size: "small",
        description: "little devious devil-like creature",
        dangerous: true,
        defeatMethods: {
            hammer: "swing",
            rock: "swing harder"
        }
    },
    leprechaun: {

    }
}