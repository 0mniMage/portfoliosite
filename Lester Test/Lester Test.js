var opSum = 0; //the sum of the values of the opinion statements
var answerDis = 0; //number of disagreed statements, can drop if filtering answerUser for a specific value is possible
var answerUser = []; //self-explanatory, need to make .push function to add answers to it
var answerVal = [1.29, 2, 2.81, 3.25, 3.75, 4.12, 4.59, 5, 5.11, 5.58, 6.18, 6.85, 7.17, 7.42, 7.92, 8.15, 9.42, 9.8, 10.19, 10.42, 10.76]

function opSummer() {
    for(var i = 0; i < answerUser.length; i++){
        if (answerArr[i]){
            opSum = opSum + answerVal[i];
        } else {
            answerDis = answerDis++;
        }
    }
    return opSum;
    return answerDis;
}


$(document).ready();