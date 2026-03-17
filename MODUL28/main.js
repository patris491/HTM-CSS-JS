var btn1 = document.getElementById("btn1");

btn1.onclick = function() {
    alert("Button clicked!");
};

var btn2 = document.getElementById("btn2");

btn2.onmouseover = function() {
    alert("Button 2 hovered!");
};

var btn3 = document.getElementById("btn3");

btn3.onmouseleave = function() {
    alert("Button 3 left!");
};


var btn4 = document.getElementById("btn4");

btn4.onwheel = function() {
    alert("Button 4 wheel!");
};

var btn5 = document.getElementById("btn5");

var text1 = document.getElementById("text1");

btn5.onclick = function() {
    text1.style.color = "red";
};

