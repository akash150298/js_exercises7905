function user(name, score) {
    this.name = name
    this.score = score
}

user.prototype.incre = function() {
    this.score++
    console.log(this.score)
}

const user1 = new user("akash", 1)
console.log(user1.incre())
