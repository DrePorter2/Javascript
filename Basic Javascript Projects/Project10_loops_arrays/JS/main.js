function Call_Loop() { // This function demonstrates a loop.
    var Digit = "";
    var X = 1;
    while (X < 21) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
var Instruments = ["Vibraphone", "Marimba", "Chimes", "Glockenspiel", "Xylophone"];
var Content = "";
var Y;
function for_Loop() { // This function creates a for loop.
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
function array_function() { // This function creates an array
    var couch = [];
    couch[0] = "brown"
    couch[1] = "black"
    couch[2] = "white"
    couch[3] = "grey"
    document.getElementById("Array").innerHTML = "This couch is " + couch[3] + ".";
}
function constant_function() { // This function sets a constant
    const Musical_Instrument = {type:"vibraphone", brand:"mueller", color:"gold"};
    Musical_Instrument.price = "$5,000";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}
{ // This function demonstrates how to use the let command.
    let X = 32;
    document.getElementById("let").innerHTML = X;
}
let snare = { // This function creates an object using the let keyword.
    make: "System Blue ",
    model: "Double Snare ",
    color: "black ",
    description : function() {
        return "The snare is a " + this.color + this.make + this.model;
     }
};
document.getElementById("snare_object").innerHTML = snare.description();