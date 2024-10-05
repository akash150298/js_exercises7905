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
