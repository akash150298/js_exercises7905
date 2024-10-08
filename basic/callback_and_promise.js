function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched!');
    }, 2000);
}

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
