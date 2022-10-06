"use strict";
let greet;
greet = () => {
    console.log('hello world');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
};
add(5, 10, 'hello');
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
