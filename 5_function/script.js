function iLove(){
    console.log('I love you');
}
iLove();

function doubleIt(num){
    console.log(num * 2);
}
doubleIt(5);
doubleIt(30);
doubleIt(100);

function add(num1, num2){
    let result = num1 + num2;
    return result;
}
let total1 = add(20, 100);
let total2 = add(10, 20);
let totalAmount = total1 + total2;
console.log(totalAmount);

function multiply(num3){
    //console.log(num3 ** 2);
    let totalMultiply = num3 ** 2;
    return totalMultiply;
}
let totalResult = multiply(2);
let totalResult1 = multiply(9);
console.log(totalResult, totalResult1);