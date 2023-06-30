"use strict";
let count = 0;
count++;
const message = "Hello";
const flag = true;
const numbers = [1, 2, 3, 4];
const messageArr = ["a", "b", "c", "d"];
messageArr.push("1");
const canUndefined = undefined;
const canNull = null;
let a = "red";
let color = "red";
const sum = (x, y) => {
    return x + y;
};
const sumArr = (arr) => {
    let sum = arr.reduce((prev, now) => (prev += now), 0);
    return sum;
};
console.log(sumArr([1, 2, 3, 4, 5]));
