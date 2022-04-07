function displayType(instrument) {
    var instrumentType = instrument.getAttribute("data-instrument-type");
    alert(instrumentType + " is in the " + instrument.innerHTML + " class.");
}