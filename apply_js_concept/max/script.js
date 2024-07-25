let man1 = 100;
let man2 = 133;
let man3 = 200;
let maxOutput = Math.max(man1, man2, man3);
console.log(maxOutput);

// last practice
let business = 200;
let minister = 400;
let sochib  = 500;

let result = Math.max(business, minister, sochib);
console.log(result);

let result2 = Math.min(business, minister, sochib);
console.log(result2);


let studentNum = [33, 20, 98, 90, 99, 44, 76];
let max = studentNum[0];
for(let i = 0; i < studentNum.length; i++){
    let element = studentNum[i];
    if(element > max){
        max = element;
    }
}
console.log(max);

let uniqueId = [10, 104, 106, 101, 200, 33, 99];
let maxUnique = uniqueId[0];

for(let i = 0; i < uniqueId.length; i++){
    let element = uniqueId[i];
    if(element > maxUnique){
        maxUnique = element;
    }
}
console.log(maxUnique);


function studentId(){
    let maxId = id[0];
    for(let i = 0; i < id.length; i++){
        let element = id[i];
        if(element > maxId){
            maxId = element;
        }
    }
    return maxId;
}
let id = [5, 20, 30, 7, 9, 10];
console.log(studentId(id));