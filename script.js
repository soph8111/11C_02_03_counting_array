"use strict";

const array = [];
let counter;

init();

function init() {
    counter = 0;
    loop();
}

function loop() {
    counter++;
    setTimeout(loop, 650);
    array.push(counter);
    console.log(array);
}