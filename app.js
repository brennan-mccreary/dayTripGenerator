"use strict";

function selectRandomArrayIndex(arr) { //returns random number for an index of an array
    let max = arr.length;
    let result;

    result = (Math.floor(Math.random() * max)); 
    return result;
}

//declare arrays with lists for destinations, restaurants, transportation, and entertainment
let destinationsArr = 
["Miami","New York City","Seattle","Nashville","Pittsburgh","Indianapolis","Charleston","Baltimore","Chicago","Houston"];
let restaurantsArr = 
["Red Robin","Applebee's","Chili's","Wendy's","Hibachi","Texas Roadhouse"];
let transportationArr = 
["Walk","Bus","Rickshaw","Taxi","Ride Share"];
let entertainmentArr = 
["Comedy Show","Movie","City Tour","Magic Show","Sporting Event"];

//declare initial randomized variable choices
let destinationsChoice = destinationsArr[selectRandomArrayIndex(destinationsArr)];
let restaurantsChoice = restaurantsArr[selectRandomArrayIndex(restaurantsArr)];
let transportationChoice = transportationArr[selectRandomArrayIndex(transportationArr)];
let entertainmentChoice = entertainmentArr[selectRandomArrayIndex(transportationArr)];

//display initial choices
console.log
(`Your generated day trip:
Destination: ${destinationsChoice}
Restauraunt: ${restaurantsChoice}
Transportaiton: ${transportationChoice}
Entertainment: ${entertainmentChoice}`);

