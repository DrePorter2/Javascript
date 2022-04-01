function addition_function() {
 var addition = 33 + 41;
 document.getElementById("math").innerHTML = "33 + 41 = " + addition;
}
function subtraction_function() {
    var subtraction = 33 - 12;
    document.getElementById("Math").innerHTML = "33 - 12 = " + subtraction;
}
function multiply_function() {
    var mul = 16 * 7;
    document.getElementById("Mul").innerHTML = "16 * 7 = " + mul
}
function division_function() {
    var div = 32 / 8;
    document.getElementById("Div").innerHTML = "32 / 8 = "+ div
}
function math_function() {
    var more = (63 + 33) * 5 / 3;
    document.getElementById("Lot").innerHTML = "63 + 33 * 5 / 3 = " + more;
}
function modulus_function() {
    var simple = 30 % 4;
    document.getElementById("Mod").innerHTML = "When you divide 30 by 4 you have a remainder of: " + simple;
}
function negation_function() {
    var x = 22;
    document.getElementById("Neg").innerHTML = -x;
}
    var X = 9;
    X++;
    document.write(X);

    var Y = 3;
    Y--;
    document.write(Y)

    window.alert(Math.random())

function object_function() {
    Math.PI;
    document.getElementById("PI").innerHTML = Math.PI;
}