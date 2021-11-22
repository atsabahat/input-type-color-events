var colorPicker;
var defaultColor = "#35df90";

window.addEventListener("load", startup, false);

function startup() {
    colorPicker = document.querySelector("#colorPicker");
    colorPicker.value = defaultColor; // set input value
    colorPicker.addEventListener("input", updateFirst, false); // fire every time the color changes
    colorPicker.addEventListener("change", updateAll, false);  // fire when the user dismisses the color picker
    //colorPicker.select();
}

function updateFirst(event) {
    var p = document.getElementById("firstP");
    if (p)
        p.style.color = event.target.value; // When selecting a color in the palette, the new color value is set to the paragraph
}

function updateAll(event) {
    document.querySelectorAll("p").forEach(function (p) {
        p.style.color = event.target.value; // Just after closing the color picker, the new color value is set on all the paragraphs
    });
}