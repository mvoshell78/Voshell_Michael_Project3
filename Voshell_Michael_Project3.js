//alert("JavaScript works!");
//Michael Voshell
//SDI 092014
// Project 3


//Global Variables
var dogNames = ["Sam","Pedro","Fiona","Tyson"];

// Functions and Procedures

var say = function(message) {console.log(message); };// simplified console log

var myDogs = function(whatName) {
    dogsNames = dogNames[whatName];
     for (var name = 0; name > dogsNames.length; name ++ ) {
       say("I have four dogs one named " + dogsNames ) 
     };
    
};


// Main Code








/*
var tankNames = ["Shark Tank",
                 "Sting Ray Tank",
                 "Dolphin Tank",
                 "Fish Tank"],
    minutesPerTank = [20, 15, 25, 30],
    kidNames = ["Ronnie", "Bobbi", "Micky", "Mike"];
    
var visitTank = function(whatTank) {
    var tankName = tankNames[whatTank],
        minutesThisTank = minutesPerTank[tankNumber];
    console.log(kidNames[0] + " wanted us to visit the " + tankName +
        " for " + minutesThisTank + " minutes. So I set the timer on" +
        " my watch!");
    for (var minutes = 0; minutes < minutesThisTank; minutes += 5) {
            var minutesRemain = minutesThisTank - minutes;
            console.log("We have " + minutesRemain + " minutes left. " +
                minutes + " minutes have past.");
        };
    console.log("We finished with the " + tankName + ".");
};

for (var tankNumber = 0; tankNumber < tankNames.length; tankNumber++) {
    visitTank(tankNumber);
};
*/