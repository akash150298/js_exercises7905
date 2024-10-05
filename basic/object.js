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

// Define a new tinderUser object
const tinderUser = {};

tinderUser.id = "001xyz";
tinderUser.name = "Arjun";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "example@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Akash",
            lastname: "Kumar"
        }
    }
};

console.log(regularUser.fullname.userfullname.firstname);

const object1 = {1: "x", 2: "y"};
const object2 = {3: "z", 4: "w"};
const object4 = {5: "a", 6: "b"};

// Combine objects using spread operator
const combinedObject = {...object1, ...object2, ...object4};
console.log(combinedObject);

const userList = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    },
    {
        id: 3,
        email: "user3@gmail.com"
    },
];

console.log(userList[1].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const courseDetails = {
    courseName: "JavaScript Essentials",
    price: "499",
    instructor: "Arjun"
};

const {instructor} = courseDetails;
console.log(instructor);

