var X = 20;
function global_function() {
    document.getElementById("global").innerHTML = (X + 20);
}
function local_function() {
    var Y = 35;
    document.getElementById("local").innerHTML = (Y + 9);
}