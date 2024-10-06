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

