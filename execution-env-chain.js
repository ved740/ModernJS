var color = 'red';

function first() {
  var color = 'green';
  console.log(color);
  second();
}

function second() {
  console.log(color);
}

first();
console.log(color);
