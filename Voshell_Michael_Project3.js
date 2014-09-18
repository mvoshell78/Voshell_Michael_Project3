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
      
        }; // for loop
    
};// end of procedure

// string function with return using array

var didNotHave = function(dogNames) {
    var string = "We didn't always have "
    notSoMany = ( string + dogNames )
    return notSoMany
 
};

// Main Code


myDogs(dogNames)

var string = didNotHave(dogNames)
    say (string)




