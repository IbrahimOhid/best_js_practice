// array sum
let numbers = [1, 2, 4, 10, 16, 20, 22];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    let element = numbers[i];
    sum = sum + element;
}
console.log(sum);

let numbers1 = [5, 3, 4, 2, 1];
let sum1 = 0;
for(let i = 0; i < numbers1.length; i++){
    let element1 = numbers1[i];
    sum1 = sum1 + element1;
}
console.log(sum1);

function addNum(){
    let num = 0;
    for(let i = 0; i < numbers2.length; i++){
        let element = numbers2[i];
        num = num + element;
    }
    return num;
}
 let numbers2 = [1, 2, 4, 10, 16, 20, 22];
 console.log(addNum(numbers2));

// array multiply
let multiplyNum = [1, 2, 4, 10];
let multiply = 1;
for(let i = 0; i < multiplyNum.length; i++){
    let element = multiplyNum[i];
    multiply = multiply * element;
}
console.log(multiply);


function multiplyNumbers(){
    let multi = 1;
    for(let i = 0; i < allNumbers.length; i++){
        let element = allNumbers[i];
        multi = multi * element;
    }
    return multi;
}
let allNumbers = [1, 5, 10, 20];
console.log(multiplyNumbers(allNumbers));


// last practice

// sum array Number
// let sumNumber = [10, 20, 30, 40, 50];
// let addNum = 0;
// for(let i = 0; i < sumNumber.length; i++){
//     let element = sumNumber[i];
//     addNum = addNum + element
// }
// console.log(addNum);

function allSum(){
    let sum = 0;
    for(let i = 0; i < sumNumbers.length; i++){
        let element = sumNumbers[i];
        sum = sum + element;
    }
    return sum;
}
let sumNumbers = [3, 5, 10, 20, 50];
console.log(allSum(sumNumbers))

// multiply array number
let multiplyNumber = [1, 3, 4, 10];
let multiplyResult = 1;
for(let i = 0; i < multiplyNumber.length; i++){
    let element = multiplyNumber[i];
    multiplyResult = multiplyResult * element;
}
console.log(multiplyResult);

function multiplyNums(){
    let multiply = 1;
    for(let i = 0; i < userNum.length; i++){
        let element = userNum[i];
        multiply = multiply * element;
    }
    return multiply;
}

let userNum = [3, 10, 20, 2];
console.log(multiplyNums(userNum));

