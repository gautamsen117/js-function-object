var shoppingCart = {
    book: 3,
    sunglass: 2,
    keyboard: 5,
    mouse: 1,
    pen: 1
}
// when you know the specific property name, use dot notaion to get the property value
var penCount = shoppingCart.pen;
// Alternative system
var penCount2 = shoppingCart['pen'];

var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);
var properties = Object.keys(shoppingCart);
var propertiesValue = Object.values(shoppingCart);
// console.log(propertiesValue);
// console.log(properties);
console.log(shoppingCart);

// Set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 55;
console.log(shoppingCart);