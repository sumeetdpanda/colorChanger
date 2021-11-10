const colors = [ "#B983FF", "#94B3FD", "#94DAFF", "#FBF46D", "#B4FE98", "#FF5F7E", "#99FEFF", "#F0F8FF"]

var counter = 0;

function changeColor() {
    if (counter > 7) {
        counter = 0;
        colorPicker();
    }
    else{
    colorPicker();
    }
}

function colorPicker() {
    document.querySelector("body").style.backgroundColor = colors[counter];
    document.querySelector(".color_text").textContent = colors[counter];
    counter++;
}