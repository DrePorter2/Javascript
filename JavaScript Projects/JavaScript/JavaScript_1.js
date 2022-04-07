function Instrument_Function() {
    var instrument_output;
    var instruments = document.getElementById("Instrument_Input").value;
    var instrument_string = " is a great instrument";
    switch(instruments) {
        case "Drums":
            instrument_output = "Drums" + instrument_string;
        break;
        case "Saxophone":
            instrument_output = "Saxophone" + instrument_string;
        break;
        case "Trumpet":
            instrument_output = "Trumpet" + instrument_string;
        break;
        case "Trombone":
            instrument_output = "Trombone" + instrument_string;
        break;
        case "Vibraphone":
            instrument_output = "Vibraphone" + instrument_string;
        break;
        case "Bass":
            instrument_output + "Bass" + instrument_string;
        break;
        default:
        instrument_output = "Please enter an instrument exactly as written on the above list.";
    }
    document.getElementById("instrument").innerHTML = instrument_output;
}
function Good_Morning_function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed!";
}
var c = document.getElementById("project");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2*Math.PI);
ctx.sroke();