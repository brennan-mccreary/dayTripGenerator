"use strict";

function selectRandomArrayIndex(arr) { //returns random number for an index of an array
    let max = arr.length;
    let result;

    result = (Math.floor(Math.random() * max)); 
    return result;
}
function logTripChoices() { //display trip choices
    console.log
(`Your generated day trip:
Destination: ${destinationsChoice}
Restaurant: ${restaurantsChoice}
Transportation: ${transportationChoice}
Entertainment: ${entertainmentChoice}`);
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

//log choices
logTripChoices();

//allow user to replace a choice
let change = prompt("Would You Like to Change Any of These Choices?\nY or N"); 
let option;
change = change.toLowerCase(change);

if(change === "y") { //if yes, determine which choice to change
    while(change === "y") {
        option = prompt("Which option would you like to change?");
        option = option.toLowerCase(option);
        if(option === "destination") { //change specific choice based on user input
            console.log(`Changing: ${option}`);

            destinationsChoice = destinationsArr[selectRandomArrayIndex(destinationsArr)];
            logTripChoices();

            change = prompt("Would You Like to Change Any of These Choices?\nY or N");
            change = change.toLowerCase(change);
        }
        else if(option === "restaurant") {
            console.log(`Changing: ${option}`);
            
            restaurantsChoice = restaurantsArr[selectRandomArrayIndex(restaurantsArr)];
            logTripChoices();

            change = prompt("Would You Like to Change Any of These Choices?\nY or N");
            change = change.toLowerCase(change);
        }
        else if(option === "transportation") {
            console.log(`Changing: ${option}`);

            transportationChoice = transportationArr[selectRandomArrayIndex(transportationArr)];
            logTripChoices();

            change = prompt("Would You Like to Change Any of These Choices?\nY or N");
            change = change.toLowerCase(change);
        }
        else if(option === "entertainment") {
            console.log(`Changing: ${option}`);

            entertainmentChoice = entertainmentArr[selectRandomArrayIndex(transportationArr)];
            logTripChoices();

            change = prompt("Would You Like to Change Any of These Choices?\nY or N");
            change = change.toLowerCase(change);
        }
        else {
            console.log("Please enter a valid category");
        }

        if(change === "n") {
            console.log("\nEnjoy your trip!");
        }
        else if(change !== "y") {
            console.log("\nPlease enter 'Y' or 'N'");
        }
    }
}
else if(change === "n") {
    console.log("\nEnjoy your trip!");
}
else {
    console.log("\nPlease enter 'Y' or 'N'");
}
