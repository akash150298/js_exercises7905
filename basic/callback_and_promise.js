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
