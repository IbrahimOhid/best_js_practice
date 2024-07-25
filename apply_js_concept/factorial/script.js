let num = [1, 3, 5, 6, 10];
let multiply = 1;
for(let i = 0; i < num.length; i++){
    let element = num[i];
    multiply = multiply * element;
}
console.log(multiply);
// for loop

let number = 1;
for(i = 1; i <= 5; i++){
    number = number * i;
}
console.log(number);

function factorial(n){
    let cal = 1;
    for (i = 1; i <= n; i++){
        cal = cal * i;
    }
    return cal;
}
console.log(factorial(5));

// while loop

let number2 = 1;
let i = 1;
while(i <= 5){
    number2 = number2 * i;
    i++;
}
console.log(number2);


function factorial1(n){
    let cal1 = 1;
    let i = 1;
    while(i <= n){
        cal1 = cal1 * i;
        i++;
    }
    return cal1;
}
console.log(factorial1(5))