const promise1  = new Promise(function(resolve, reject) {
    setTimeout(function(){
    console.log("Promise resolved")
    resolve()
},1000)
    })
  promise1.then(function(){
  console.log("promise is nothing but a cleaner way of callback")})
