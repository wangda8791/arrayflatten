The flatten function is added into Array of JavaScript

# Installation
npm install arr-flat

# Usage
    require("arr-flat");

    let arr = [1,2,3,[4,5],["a","b"]];

    // Result: [1,2,3,4,5,"a","b"]
    console.log(arr.flatten());
