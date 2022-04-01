function my_dictionary() { //This function creates a dictionary with KVPs
    var Game = {
        System:"PS5",
        Developer:"Sony",
        Color:"White"
    };
    delete Game.System; // This deletes the text defining the variable System
    document.getElementById("Dictionary").innerHTML = Game.System;
}