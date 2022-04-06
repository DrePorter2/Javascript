function sentence_function() {
    var part_1 = "I will ";
    var part_2 = "become ";
    var part_3 = "a pro ";
    var part_4 = "fortnite player.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concat").innerHTML = whole_sentence;
}
function slice_function() {
    var Sentence = "Today was a productive day.";
    var Section = Sentence.slice(6,9);
    document.getElementById("slice").innerHTML = Section;
}
function string_function() {
    var X = 300;
    document.getElementById("numstring").innerHTML = X.toString();
}
function precision_function() {
    var Y = 185.40954;
    document.getElementById("precision").innerHTML = Y.toPrecision(4);
}