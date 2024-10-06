# Projects related to DOM

# Solution code for changing bg color
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const { id } = event.target;
    if (id === 'grey') {
      body.style.backgroundColor = id;
    }
  });
});
```
# Solution code for updating clock time in html dom
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const result = document.getElementById('results');
  
  const height = parseInt(heightInput.value);
  const weight = parseInt(weightInput.value);

  if (isNaN(height) || height <= 0) {
    result.innerHTML = `Please provide a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = `Please provide a valid weight.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>Your BMI is ${bmi}</span>`;
  
```
# Solution code for calculating bgw
```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

