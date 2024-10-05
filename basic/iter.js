const numbersArray = [1, 3, 5, 6, "JavaScript"];
for (const element of numbersArray) {
    console.log(element);
}
// Same applies for strings

const countryCodesMap = new Map();
countryCodesMap.set("Akash", 1);
countryCodesMap.set(2, "United States of America");
countryCodesMap.set('FR', "France");
countryCodesMap.set('IN', "India");

for (const [code, country] of countryCodesMap) {
    console.log(`Key: ${code} Value: ${country}`);
}
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
 for(const key in myObject) {
     console.log(`${key} ${myObject[key]}`)
 }

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

const languages = ["JavaScript", "Ruby", "Java", "Python", "C++"];

languages.forEach((language) => {
    console.log(language);
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter((number) => {
    return number > 4;
});
console.log(filteredNumbers);

const library = [
    { title: 'Intro to JavaScript', genre: 'Programming', publish: 2001, edition: 2010 },
    { title: 'Ruby Essentials', genre: 'Programming', publish: 2003, edition: 2015 },
    { title: 'Java Deep Dive', genre: 'Programming', publish: 2005, edition: 2011 },
    { title: 'Python for Data Science', genre: 'Data Science', publish: 2010, edition: 2020 },
    { title: 'C++ Mastery', genre: 'Programming', publish: 2008, edition: 2018 },
    { title: 'Introduction to AI', genre: 'Artificial Intelligence', publish: 2012, edition: 2021 },
    { title: 'Big Data Analysis', genre: 'Data Science', publish: 2015, edition: 2022 },
    { title: 'Machine Learning Basics', genre: 'Artificial Intelligence', publish: 2017, edition: 2023 },
    { title: 'Deep Learning with Python', genre: 'Artificial Intelligence', publish: 2019, edition: 2022 },
];

let userLibrary = library.filter((book) => book.genre === 'Programming' || book.genre === 'Data Science');
console.log(userLibrary);

userLibrary = library.filter((book) => {
    return book.publish >= 2010 && book.genre === "Artificial Intelligence";
});
console.log(userLibrary);

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers.map((item) => item*9).map((item) => item +10).filter((item) => item > 45)
console.log(newNums);

const numbers = [1, 2, 3];

let totalSum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(totalSum);

const shoppingCart = [
    {
        itemName: "JavaScript Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Mobile Development Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
];

const totalPrice = shoppingCart.reduce((accumulator, item) => {
    return accumulator + item.price;
}, 0);

console.log(totalPrice);

