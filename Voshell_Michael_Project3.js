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

var json = {
       "dogs" : [
         {
                  "name"   : "Sam",
                  "age"    : 8,
                  "breed"  : " Boxer"      
         },
         {
                  "name"   : "Pedro",
                  "age"    : 8,
                  "breed"  : " Shitszu" 
         },
         {
                  "name"   : "Fiona",
                  "age"    : 6,
                  "breed"  : " Boxer" 
         },
         {
                  "name"   : "Tyson",
                  "age"    : 3,
                  "breed"  : " Boxer" 
         }
       ]
       
};

// Functions and Procedures



var say = function(message) {console.log(message); };// simplified console.log

var dogInfo = function(json) {
    say("I have four dogs, ")
    for (var i = 0; i < json.dogs.length; i++) { 
    var dogs = json.dogs[i];
    say(dogs.name + " who is " + dogs.age + " years old, and is a " + dogs.breed )
    }; // for loop
    }; // EOP
    
    
var myDogs = function(dogNames, enjoys) {
         for ( var dogs = 0; dogs < dogNames.length; dogs++) {
            for (var i = 0; i < enjoys.length; i++) {
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


var goneSoLong = function() {
    var i = 1
    while (i <= 8 ) {
            if (i > 1 ) {
            say (" We have been looking for Fiona for " + i + " months ")
            i++;
            } else {
            say (" We have been looking for Fiona for " + i + " month ")
            i++;
    }; // end of conditional
}; // while loop
}; //EOP

// Main Code

dogInfo(json);

myDogs(dogNames, enjoys)



var isitTrue = howMany(dogAges) 
    if (isitTrue === true ) {
        say (" We didn't always have all four ")
    } else {
        say (" We used to only have Three");
        };//else

dogAges.pop();

var isitTrue = howMany(dogAges) 
    if (isitTrue === true ) {
        say (" We didn't always have all four ")
    } else {
        say (" We used to only have Three");
        };//else


goneSoLong()


var string = didNotHave(dogNames)
    say (string)


var ages = combinedAges(dogAges)
    say ("Their combined ages are " + ages + " years old" )

var dogYear = dogYears(ages)
    say ("Thats " + dogYear + " In dog years! ")
