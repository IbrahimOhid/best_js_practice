let userInfo = {
    name: 'ibrahim',
    id: 22,
    location: 'islamabad',
}
// property value received
console.log(userInfo.name);
console.log(userInfo.id);
console.log(userInfo['location']);
console.log(userInfo['id']);
//property value change
userInfo.id = 33;
console.log(userInfo);
//new property and value add 
userInfo.postOffice = 'Eidgaon';
console.log(userInfo);
userInfo['policeStation'] = 'Eidgaon';
console.log(userInfo);

