let a = 7;
let b = 8;
a = a + b;
console.log(a);
b = a - b;
console.log(b);
a = a - b;
console.log(a);
console.log('after swap value a = ', a, 'b =', b);



let x = 3;
let y = 5;
[x, y] = [y, x];
console.log(x, y);

let p = 8;
let q = 10;
[p, q] = [q, p];
console.log(p, q);


// last practice

let c = 10;
let d = 20;

c = c + d;
console.log(c);
d = c - d;
console.log(d);
c = c - d;
console.log(c)
console.log('c = ', c, 'd = ', d);

let g = 50;
let h = 100;
[g, h] = [h, g];
console.log('g = ', g, 'h = ', h);