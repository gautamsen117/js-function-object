// Array Vs Object 
// array
var properties = ['book', 'sungalss', 'pen', 'bottle'];
var friendsAge = [12, 45, 22, 12, 15];
// object
var shoppingCart = {
    book: 3,
    sunglass: 2,
    keyboard: 5,
    mouse: 1,
    pen: 1,
    shoes: 3
}
var friendsAge = {
    rahim: 22,
    karim: 34,
    josim: 23,
    robi: 21,
}

const keys = Object.keys(shoppingCart);
// console.log(keys);
const values = Object.values(shoppingCart);
// console.log(values);

// var keys = [ 'book', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ];
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}

// for in loop
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}