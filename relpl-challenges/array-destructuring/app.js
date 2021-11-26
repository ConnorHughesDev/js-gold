let shoppingList = [[ 'eggs', 'milk', 'butter' ], [ 'cleaner', 'trash bags', 'detergent' ], [ 'thank you card', 'pens', 'gift wrapping' ], [ 'shoes', 't-shirt', 'slacks' ]];

let obj = {
cleaning: [],
gifts: [],
clothing: [],
grocery: []
};

const [grocery, cleaning, gifts, clothing] = shoppingList
let newList = [...grocery, ...cleaning, ...gifts, ...clothing]

let newerList = newList.map(index => {
  if (grocery.includes(index)) {
    return obj.grocery.push(index)
  } else if (gifts.includes(index)) {
    return obj.gifts.push(index)
  } else if (clothing.includes(index)) {
    return obj.clothing.push(index)
  } else {
    return obj.cleaning.push(index)
  }
})

console.log(obj)

/*
With the given shoppingList array (within the JS file), use array destructuring to assign each array within the shoppingList 
array its own variable. Then, reinitialize the shoppingList array so it is a single array containing all of the values from the 
original array.
*/
/*
after the shoppingList array has been reinitialized, using the array.prototype.map method,
map over the newly initialized shoppingList array. You should do the following within the map method:

include a parameter for index

utilize the array.prototype.push method to push the current value being mapped over into the appropriate key/value 
pair in the obj variable

you will need to implement some sort of logic to check the index of the current item
*/
