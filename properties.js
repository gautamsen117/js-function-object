var shoppingCart = {
    book: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1, 
    pen: 25
}

// when you know the specific property name, use dot notation to get the value
var penCount = shoppingCart.pen;
// alternative system
// when you know the specific property name, use dot notation to get the value
var penCount2 = shoppingCart['pen'];

var propertyName = 'mouse';

var propertyValue = shoppingCart[propertyName];

// console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);

console.log(shoppingCart);
// console.log(properties);
// console.log(propertyValues);



// set property values

shoppingCart.mouse = 15;     // system 1 to set property value
console.log(shoppingCart);

shoppingCart['mouse'] = 29; // system 2 to set property value
console.log(shoppingCart);

shoppingCart[propertyName] = 89; // system 3 to set property value
console.log(shoppingCart);