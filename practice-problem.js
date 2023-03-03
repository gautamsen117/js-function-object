/* 
1.
Write a function called foo() which prints "foo" and a function called bar() which prints "bar". Call function bar() in the foo() after printing. What will be the output? Now call the foo() to see the output.
*/

function bar(){
    return 'bar';
}

function foo(){
    const print = 'foo';
    const barFunction = bar();
    const allPrints = print + ' ' + barFunction;
    return allPrints;
}

const prints = foo();
// console.log(prints);

/* 
2.
Write a function called make_avg() which will take an three integers and return the average of those values.
*/

function make_avg(number1, number2, number3){
    const sum = number1 + number2 + number3;
    const average = sum / 3;
    return average;
}
const firstNumber = 120;
const secondNumber = 220;
const thirdNumber = 100;

const averageResult = make_avg(firstNumber, secondNumber, thirdNumber);
const averageString = averageResult.toFixed(2);
const average = parseInt(averageString);
// console.log(average);

/* 
3. Challenging:
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function makeAverage(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        const index = i;
        const element = array[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    const average = sum / array.length;
    return average;

}

const array = [12, 34, 22, 65, 67, 77, 88, 97];
const arrayAverage = makeAverage(array);
// console.log(arrayAverage);

/* 4.
Write a function called odd_even() which takes an integer value and tells whether this value es even or odd.You need to do it in 4 ways:
--> Has return + Has parameter
-->No return + Has parameter
*/

function odd_even(number){
    if(number % 2 === 0){
        console.log('This is even number: ', number)
    }
    else{
        console.log('This is odd number: ', number)
    }
}

// odd_even(13);

/* 5.
You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is red coloured. In this situation if you try to cross the road, you may be in danger. if you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. Its value can be green, yellow or red & we will get different activities as output depending on the variable. So, hurry up.
*/

const signal = 'green';
if(signal === 'red'){
    console.log('If you cross the road, you are danger');
}
else if(signal === 'yellow'){
    console.log('You should stop!!');
}
else if(signal === 'green'){
    console.log('You should cross the road!!');
}
else {
    console.log('You should focus traffic signal when green color show then cross the road');
}

// alternative system
switch (signal) {
    case 'red':
        console.log('You are so danger!!!');
        break;
    case 'yellow':
        console.log('You should Stop');
        break;
    default:
        console.log('You should cross the road');
}