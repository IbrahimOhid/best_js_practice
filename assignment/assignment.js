// Assignment No: 1

// Feet To Mile calculation
function feetToMile(feet){
    let result = feet / 5280; // 5280 ft == 1 mile
    return result;
}
let feetToMileResult = feetToMile(5000);
console.log(feetToMileResult);

// Assignment No: 2

// wood calculation
function woodCalculator(chair, table, bed){
    let chairWood = chair * 17;
    let tableWood = table * 32;
    let bedWood = bed * 40;
    let totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
let totalWoodCalculation = woodCalculator(10, 13, 3);
console.log(totalWoodCalculation);

// Assignment No: 3

// Per Floor Brick Calculation
function brickCalculator(floor){
    let perFloor = 0;
    if(floor <= 10){
        perFloor = 15 * 1000;
    }
    else if(floor <= 20){
        let firstTenFloor = 15 * 1000;
        let nextFloor = floor - 10;
        let secondTenFloor = nextFloor * (12 * 1000);
        perFloor = firstTenFloor + secondTenFloor;

    }
    else{
        let firstTenFloor = 15 * 1000;
        let secondTenFloor = 12 * 1000;
        let nextFloor = floor - 20;
        let infinityFloor = nextFloor * (10 * 1000);
        perFloor = firstTenFloor + secondTenFloor + infinityFloor;
    }
    return perFloor;
}
let totalPerFloorBricks = brickCalculator(21);
console.log(totalPerFloorBricks);

// Assignment No: 4

// small Friend Name
function tinyFriend(smallName){
    let smallFriendName = smallName[0];
    for(let i = 0; i < smallName.length; i++){
        let name = smallName[i];
        if(name.length < smallFriendName.length){
            smallFriendName = name;
        }
    }
    return smallFriendName;
}
let friendName = ['ibrahim', 'ohid', 'mohammad', 'rafiya', 'kawser', 'dev'];
console.log(tinyFriend(friendName))