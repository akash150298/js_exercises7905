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
