// for loop
let num = [33, 2, 34, 44, 55, 66, 88, 99, 77];

for(let i = 0; i < num.length; i++){
   let element = num[i];
   console.log(element)
}

// array number multiply
let numbers = [1, 3, 3, 5, 10];
let multiply = 1;
for(let i = 0; i < numbers.length; i++){
   let singleNumber = numbers[i];
   multiply = multiply * singleNumber;
}
console.log(multiply);

function multiplyNum(number){
   let multiply = 1;
   for(let i = 0; i < number.length; i++){
      let numberElement = number[i];
      multiply = multiply * numberElement;
   }
   return multiply;
}

let someNum = [3, 2, 5, 10];
console.log(multiplyNum(someNum));

// factorial 
function factorialValue(num){
   let factorial = 1;
   for(let i = 1; i <= num; i++){
      factorial = factorial * i;
   }
   return factorial;
}
let result = factorialValue(5);
console.log(result);



