"use strict";
let promesa20 = new Promise((resolve, reject) => {
    resolve("Soy la promesa 20");
});
let promesa21 = new Promise((resolve, reject) => {
    resolve("Soy la promesa 21");
});
let promesa22 = new Promise((resolve, reject) => {
    resolve("Soy la promesa 22");
});
promesa20.then((res) => {
    console.log(res);
    return promesa21;
}).then((res) => {
    console.log(res);
    return promesa22;
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
