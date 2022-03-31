function My_First_Function() { //This function allows the html document to call for the text when the button is clicked
    var str="This is the button text!";
    document.getElementById("Button_text").innerHTML = str;
}

function myfunction() { //This function allows the html document to call for the concatenated text when the button is clicked
    var sentence = "I'm enjoying this course";
    sentence += " so much!";
    document.getElementById("concatenate").innerHTML = sentence;
}