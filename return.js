function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const total = add(10, 39);
// console.log(total);

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 150;

var singaras = bringSingara(myTaka);
console.log(singaras);