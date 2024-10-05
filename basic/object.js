const uniqueSym = Symbol("uniqueKey");

const userDetails = {
    name: "Akash",
    "fullName": "Akash Kumar",
    [uniqueSym]: "uniqueKey1",
    age: 25,
    location: "Bengaluru",
    email: "akash@example.com",
    isLoggedIn: true,
    lastLoginDays: ["Sunday", "Wednesday"]
};

// Accessing properties
// console.log(userDetails.email);
// console.log(userDetails["email"]);
// console.log(userDetails["fullName"]);
// console.log(userDetails[uniqueSym]);

userDetails.email = "akash@newemail.com";
// Object.freeze(userDetails);
userDetails.email = "akash@anotheremail.com";
// console.log(userDetails);

userDetails.greeting = function(){
    console.log("Hello JS user");
};

userDetails.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
};

console.log(userDetails.
