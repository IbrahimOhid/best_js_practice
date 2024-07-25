// Array
// array value position check
let friendsAge = [14, 16, 11, 20, 32];
console.log(friendsAge);
console.log(friendsAge[4]);
// array value change
friendsAge[1] = 33;
console.log(friendsAge);
// array value add
friendsAge[5] = 20;
console.log(friendsAge);
friendsAge[friendsAge.length] = 3;
console.log(friendsAge);
friendsAge[friendsAge.length - 1] = 55;
console.log(friendsAge);
// index of
const position = friendsAge.indexOf(11);
console.log(position)
// array length check
console.log(friendsAge.length);

const userName = ['ibrahim', 'ohid', 'mohammd', 'rafiya', 'kawser', 'rifa'];
console.log(userName.length);
// array add last value - Use push
userName.push('soriyem');
console.log(userName);
// array remove last value - use pop
userName.pop();
console.log(userName);
// array remove last value - use pop
const age = [11, 12, 33, 14, 99, 80];
age.pop();
console.log(age);
// array add last value - Use push
age.push(27);
console.log(age);
// array first value add - use unshift)
const person = ['abul', 'kabul', 'babul', 'habul', 'rahim', 'karim'];
person.unshift('monir');
console.log(person);
// array first value remove - use shift
person.shift();
console.log(person);

// slice method
const value = [11, 13, 22, 36, 88, 90, 199];
console.log(value.slice(1,5))


