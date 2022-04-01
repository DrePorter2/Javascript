function addition_function() { // This function deals with addition
 var addition = 33 + 41;
 document.getElementById("math").innerHTML = "33 + 41 = " + addition;
}
function subtraction_function() {// This function deals with subtraction
    var subtraction = 33 - 12;
    document.getElementById("Math").innerHTML = "33 - 12 = " + subtraction;
}
function multiply_function() { // This function deals with multiplication
    var mul = 16 * 7;
    document.getElementById("Mul").innerHTML = "16 * 7 = " + mul
}
function division_function() { // This function deals with division
    var div = 32 / 8;
    document.getElementById("Div").innerHTML = "32 / 8 = "+ div
}
function math_function() { // This function deals with multiple addition, multiplication, and division
    var more = (63 + 33) * 5 / 3;
    document.getElementById("Lot").innerHTML = "63 + 33 * 5 / 3 = " + more;
}
function modulus_function() { // This function finds the remainder of two numbers
    var simple = 30 % 4;
    document.getElementById("Mod").innerHTML = "When you divide 30 by 4 you have a remainder of: " + simple;
}
function negation_function() { // This function makes the variable the opposite
    var x = 22;
    document.getElementById("Neg").innerHTML = -x;
}
    var X = 9; // This adds 1
    X++;
    document.write(X);

    var Y = 3; // This subtracts 1
    Y--;
    document.write(Y)

    window.alert(Math.random())

function object_function() { // This function shows the circumference of a cirlcle Pi
    Math.PI;
    document.getElementById("PI").innerHTML = Math.PI;
}