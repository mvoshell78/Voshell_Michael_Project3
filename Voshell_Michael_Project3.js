//alert("JavaScript works!");
//Michael Voshell
//SDI 092014
// Project 3


//Global Variables
var dogNames = ["Sam",
                "Pedro",
                "Fiona",
                "Tyson"];

var enjoys = ["Sleeping",
               "Eating",
               "Playing"];

var dogAges = [8,
               8,
               6,
               3
               ];           
// Functions and Procedures



var say = function(message) {console.log(message); };// simplified console.log

var myDogs = function(dogNames, enjoys) {
         for ( var dogs = 0; dogs < dogNames.length; dogs++) {
            for (var i = 0; i < enjoys.length; i++) {
            say("I have " + dogNames.length + " dogs, one named " + dogNames[dogs] )
                if (dogNames[dogs] === "Fiona") {
                    say (dogNames[dogs] + " enjoys " + enjoys[i] + ", because she's a dog and doesn't have anything better to do"   )
                } else {
                    say (dogNames[dogs] + " enjoys " + enjoys[i] + ", because he's a dog and doesn't have anything better to do"  )
                }; // end of conditional
            }; // Nested loop
        }; // for loop 
        }; // End of procedure
    

// string function with return using array

var didNotHave = function(dogNames) {
    var string = "We didn't always have "
    notSoMany = ( string + dogNames )
    return notSoMany
 
};

// Math function with return value

var combinedAges = function(dogAges) {
    var agesMath = dogAges[0] + dogAges[1] + dogAges[2] + dogAges [3]
    return(agesMath)
    
};

var dogYears = function(ages) {
    var dogyears = ages * 7
    return dogyears
    
};

// boolean arguement with return value
var howMany = function(dogAges) {
    if (dogAges.length === 4  ) {
        return true
    } else { return false 
        };
    };






// Main Code


myDogs(dogNames, enjoys)



var isitTrue = howMany(dogAges)
    if (isitTrue === true ) {
        say (" Four is alot ")
    } else {
        say (" Why did you lie to me ?")
        };


var string = didNotHave(dogNames)
    say (string)


var ages = combinedAges(dogAges)
    say ("Their combined ages are " + ages + " years old" )

var dogYear = dogYears(ages)
    say ("Thats " + dogYear + " In dog years! ")
