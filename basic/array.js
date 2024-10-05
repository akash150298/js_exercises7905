const myNumbers = [0, 1, 2, 3, 4, 5];
const mySuperheroes = ["Shaktiman", "Naagraj"];

const anotherNumbersArray = new Array(1, 2, 3, 4);

// Array methods in action

myNumbers.push(6);
myNumbers.push(7);
myNumbers.pop();

myNumbers.unshift(9);
myNumbers.shift();

console.log(myNumbers.includes(9));
console.log(myNumbers.indexOf(3));

const combinedArray = myNumbers.join();

console.log(myNumbers);
console.log(combinedArray);

console.log("Array State A:", myNumbers);

const slicedSection = myNumbers.slice(1, 3);

console.log(slicedSection);
console.log("Array State B:", myNumbers);

const removedElements = myNumbers.splice(1, 3);
console.log("Array State C:", myNumbers);
console.log(removedElements);
