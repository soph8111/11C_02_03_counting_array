"use strict";

const array = [];
let counter;

loop();

function init() {
  counter = -1;
  loop();
}

function loop() {
  counter++;

  setTimeout(loop, 650);
  array.unshift(counter);

  if (array.length > 9) {
    // This part you can also do with slice(1, 9);
    array.pop();
  }

  console.log(array);
}
