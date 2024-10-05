const marvel = [1, 2, 3, 4, 5];
const dc = [4, 5, 6, 7];

marvel.push(dc);
console.log(marvel);

const arr1 = [...marvel, ...dc];
console.log(arr1);

const another = [1, 2, 3, 4, [4, 5, [5, 5, [9, 9]]]];
const real = another.flat(Infinity);
console.log(real);

const string = "Akash";
console.log(Array.isArray(string));
console.log(Array.from(string));

let a1 = 122;
let a2 = 222;
let a3 = 123;
console.log(Array.of(a1, a2, a3));
