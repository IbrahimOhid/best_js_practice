let number = [1, 3, 2, 5, 3, 7, 8, 9, 3, 1];
let uniqueNum = [];

for(let i = 0; i < number.length; i++){
    let element = number[i];
    let index = uniqueNum.indexOf(element);
    if(index == -1){
        uniqueNum.push(element);
    }
}
console.log(uniqueNum);