let number = 4.53;

let result1 = Math.floor(number);
console.log(result1);

let result2 = Math.ceil(number);
console.log(result2);

let result3 = Math.round(number);
console.log(result3);

let result4 = Math.floor(Math.random() * 10);
console.log(result4);

for(i = 0; i < 6; i++){
    let random = Math.random() * 6;
    let result = Math.round(random);
    console.log(result);   
}


// last practice

// floor number
let num = 3.12;
let floorNum = Math.floor(num);
console.log(floorNum);
// ceil number
let num1 = 1.51;
let ceilNum = Math.ceil(num1);
console.log(ceilNum);
// round number
let num3 = 5.5;
let roundNum = Math.round(num3);
console.log(roundNum);
// random number
let num4 = Math.random() * 6;
console.log(num4);     

let num5 = Math.random() * 6;
let randomRoundNum = Math.round(num5);
console.log(randomRoundNum);   

for(i = 1; i <= 6; i++){
    let num6 = Math.random() * 6;
    let randomRoundNum = Math.round(num6);
    console.log(randomRoundNum);          
}




















