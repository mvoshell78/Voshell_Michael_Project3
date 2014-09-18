//alert("JavaScript works!");
//Michael Voshell
//SDI 092014
// Project 3


//Global Variables
var dogNames = ["Sam",
                "Pedro",
                "Fiona",
                "Tyson"];


// Functions and Procedures

var say = function(message) {console.log(message); };// simplified console.log

var myDogs = function(dogNames) {
       
        for ( var dogs = 0; dogs < dogNames.length; dogs++) {
       say("I have " + dogNames.length + " dogs, one named " + dogNames[dogs] )
      
        }; // for loop loop
    
};// end of procedure


// Main Code


myDogs(dogNames)





