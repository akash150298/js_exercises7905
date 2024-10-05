function Calculate(num1, num2, ...num) {
    return num
}
console.log(Calculate(4,5,6,9))

function chai() {
    let username = "hitesh"
    console.log(this);
}
const c = chai
console.log(c)
