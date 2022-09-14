/*
function functionName(parameters){
    function body
    return;
}
var returnedValue = functionName(parameters value); 
*/

function getAverege(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const averege = total / 3;
    return averege;
}

var assignment1Marks = 60;
var assignment2Marks = 58;
var assignment3Marks = 59;
var myAverege = getAverege(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('My averege is so far:', myAverege);