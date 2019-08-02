
let display = document.getElementById("display");
let clickedOperator=false;

let firstoperand;
let secondoperand;

let operator='';

function clicknumber (number){
    display.value+=number;

}
function clickOperator (operatorValue){
    clickedOperator=true;
    clickedOperator=operatorValue;
    console.log(operatorValue);
    clickedOperator=false;

}