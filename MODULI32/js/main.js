var input =  document.getElementById("input_id")
var button = document.getElementById("btn_id")
var text = document.getElementById("tekst_id")



button.onclick = function(){
    text.innerHTML = input.value;
}

var text = "the best school in the world is Digital School"
var result = text.search("Digital School")
document.getElementById('result1').innerHTML = result;


var text = "the best school in the world is Digital School"
var result = text.search(/Digital School/)
document.getElementById('result2').innerHTML = result;


var text = "the best school in the world is Digital School"
var result = text.replace(/Digital School/,"shtefan gjeqovi")
document.getElementById('result3').innerHTML = result;


var text = "abcdef"
var regex = new RegExp('abc')
document.getElementById('result4').innerHTML = regex.test(text);


var text = "MY school is the best school in the world";
var regex = /school/g;
document.getElementById('result5').innerHTML = regex.match(regex);



var text = "Digital school is the best school in the world"
var regx =  /i/g;
document.getElementById('result6').innerHTML = regex.match(regex);

var text = "Digital school is the best school in the world"
var regx =  /[abc]/g;
document.getElementById('result7').innerHTML = regex.match(regex);

var text = "Digital school is  in top 10 of the best school in the world"
var regx =  /[0-9]/g;
document.getElementById('result8').innerHTML = regex.match(regex);