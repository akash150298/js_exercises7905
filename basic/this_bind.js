<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
</head>
<body>
    <button>Button Clicked</button>
</body>
<script>
    class React {
        constructor(){
            this.library = "React"
            this.server = "https://localhost:300"

            //requirement
            document
                .querySelector('button')
                .addEventListener('click', this.handleClick.bind(this))

        }
        handleClick(){
            console.log("button clicked");
            console.log(this.server);
        }
    }

    const app = new React()
</script>
</html>
// more about this
const person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const unboundGetFullName = person.getFullName;
console.log(unboundGetFullName()); // Outputs: undefined undefined

const boundGetFullName = person.getFullName.bind(person);
console.log(boundGetFullName()); // Outputs: John Doe
