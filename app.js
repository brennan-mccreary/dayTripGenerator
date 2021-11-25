"use strict";

function selectRandomArrayIndex(arr) { //returns random number for an index of an array
    let max = arr.length;
    let result;

    result = (Math.floor(Math.random() * max)); 
    return result;
}