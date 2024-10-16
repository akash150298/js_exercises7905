function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched!');
    }, 2000);
}

function abc(callback) {
    setTimeout(() => {
        console.log("Timeout");

        // Call the callback function after the first timeout
        callback();
    }, 2000);
}

function bds(callback) {
    setTimeout(() => {
        console.log("TimmeeOOOuuut");

        // Call the callback function after the second timeout
        callback();
    }, 1000);
}

abc(() => {
    bds(() => {
        console.log("All done!");
    });
});

console.log('Starting...');


fetchData((message) => {
    console.log(message); // Outputs: Data fetched!
});

//  let understand promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched!');
        }, 2000);
    });
}

fetchData()
    .then((message) => {
        console.log(message); // Outputs: Data fetched!
    })
    .catch((error) => {
        console.log(error);
    });
//  now lets see how promises object are created

const promise1  = new Promise(function(resolve, reject) {
    setTimeout(function(){
    console.log("Promise resolved")
    resolve()
},1000)
    })
  promise1.then(function(){
  console.log("promise is nothing but a cleaner way of callback")})
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "akash", email: "akash@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    return user.username
}).then(function(username) {
console.log(username)})
// fetch will return me the the promise object
fetch('https://api.github.com/users/akash150298')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// async await
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully!');
        }, 2000);
    });
}

async function getData() {
    console.log('Fetching data...');
    try {
        const data = await fetchData();
        console.log(data); // Outputs: Data fetched successfully!
    } catch (error) {
        console.error('Error:', error);
    }
}

// Wrap callback inside promise
function callback_chain(arg1, arg2, callback) {
    setTimeout(()=>{
        sum = arg1 + arg2
        if (sum % 2 !== 0) {
            callback(null, sum)
        }
        else{
            callback(new Error("The function is not odd", null))
        }
    }, 1000)
}
function promisified(arg1, arg2) {
    return new Promise((resolve, reject) => {
        callback_chain(arg1, arg2, (error, result) => {
            if (error) {
                reject("error")
            }
            else {
                resolve(result)
            }
        })
    })
}

promisified(2,3).then((result) => {
    console.log(result)
})
.catch((error)=>{
    console.log(error.message)
})
