// check for similarity
const matches = (obj, source) =>
  // Iterate over each key in the source object and check if it exists in the obj object and has the same value.
Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

//  print in specified format
var today = new Date();

// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
var day = today.getDay();

// Array of day names
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Display the current day
console.log("Today is: " + daylist[day] + ".");

// Get the current hour, minute, and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

// Determine if it's AM or PM
var prepand = (hour >= 12) ? " PM " : " AM ";

// Convert 24-hour format to 12-hour format
hour = (hour >= 12) ? hour - 12 : hour;

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}

// Display the current time
console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second);

// rotate string
function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}

// logic for leap ear (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);

//  find whether day 1 january is sunday or not
for (var year = 2014; year <= 2050; year++) {
    // Create a Date object for January 1st of the current year
    var d = new Date(year, 0, 1);

    // Check if January 1st is a Sunday (where Sunday corresponds to day index 0)
    if (d.getDay() === 0) {
        // Log a message if January 1st is a Sunday for the current year
        console.log("1st January is being a Sunday  " + year);
    }
}

// exceptional handling
const ab = function(number) {
    if (!Number.isInteger(number)) {
        throw new Error("The number is not an integer")
    }
    console.log("The number is valid")
}
ab('12')
// 2
try {
  // Declare a constant variable undefinedObject and assign it the value undefined
  const undefinedObject = undefined;
  // Access a property of the undefined object, which will result in an error
  console.log(undefinedObject.property); // Accessing property of undefined object
} 
// Catch block to handle errors thrown in the try block
catch (error) {
  // Check if the error is an instance of TypeError
  if (error instanceof TypeError) 
  {
    // Log an error message indicating property access to an undefined object
    console.log('Error: Property access to undefined object');
  } 
  // If the error is not a TypeError, rethrow the error
  else 
  {
    throw error; // Rethrow the error if it's not a TypeError
  }
}

//  error handling for url
function(url) {
    try {
        decoding = decodeURI(decoded)
        console.log(deocoding)
    }
    catch(error) {
        if (error instanceof URIError) {
            console.log('URIError', error.message)
        }
        else {
            console.log(error.message)
        }
    }
}

//  get used to finally block
function divide_Numbers(x, y) {
  // Try block to handle potential errors
  try {
    // Check if x and y are both numbers
    if (typeof x !== 'number' || typeof y !== 'number') {
      // If either x or y is not a number, throw a TypeError
      throw new TypeError('Invalid arguments. Both arguments should be numbers.');
    }
    // Check if y is zero
    if (y === 0) {
      // If y is zero, throw an Error indicating division by zero is not allowed
      throw new Error('Invalid divisor. Cannot divide by zero.');
    }
    // Calculate the result of the division
    const result = x / y;
    // Log the result to the console
    console.log('Result:', result);
  } catch (error) {
    // If an error occurs during execution, log the error message to the console
    console.log('Error:', error.message);
  } finally {
    // Finally block to execute cleanup code regardless of whether an error occurred or not
    console.log('Cleanup code executed.');
  }
}
// swap adjacent pairs
function swap(number) {
    if (number.toString().length%2 != 0) {
        return false
    }
    let x = 1
    let n  = number
    let result  = 0
    while(n) {
        let lastDigit = n%10
        let secondLast = ((n - lastDigit)/10)%10
        result += x*(10*lastDigit + secondLast)
        n = Math.floor(n/100)
        x = x*100
    }
    return result
}
console.log(swap(1234))
//  call back function
function f1(str, f) {
    console.log(str)
    f(str)
}
function f() {
    console.log("Yhi to call back function hota h")
}
f1("kyaa baat h", f)
