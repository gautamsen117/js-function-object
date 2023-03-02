var shoppingCart = {
    book: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1, 
    pen: 25,
    shoes: 2
}

var friendsAge = {
    rahim: 12,
    samad: 45, 
    karim: 48, 
    jamal: 12, 
    robi: 32, 
    kazi: 14
}



const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys = [ 'book', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName]
    // console.log(propertyName, propertyValue);
}

// for in Loop 

for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}