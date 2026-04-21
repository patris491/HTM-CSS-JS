var person = {firstname: "John", lastName: "dove", age:"25"}

var text = " ";
var x;

for(x in person){
    text +=person[x] + "<br>";

}

document.getElementById("forinloop").innerHTML = text;
console.log(text);