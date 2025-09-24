//var input = document.getElementById('input_id');
//var button = document.getElementById('btn_id');
//var text = document.getElementById('text_id');

var input = document.querySelector('#input_id')
var button = document.querySelector('#btn_id')
var text = document.querySelector('#text_id')

button.onclick = function () {
    text.innerHTML = input.value;
}

var text = "Digital School";
var result = text.search(/School/);
document.getElementById("result2").innerHTML = result;

var text = "Digital School";
var result = text.search("School");
document.getElementById("result1").innerHTML = result;

var text = "Digital School";
var result = text.replace(/Digital School/ , "School digital");
document.getElementById("result3").innerHTML = result;

var text = "abcdef"
var regex = new RegExp("abc")
document.getElementById("result4").innerHTML = regex.test(text);

var text = "MY school is the best in the world";
var regex = /school/g;
document.getElementById("result5").innerHTML = text.match(text);    

var text = "MY school is the best in the world";
var regex = /i/g;
document.getElementById("result6").innerHTML = text.match(text);

var text = "MY school is the best in the world";
var regex = /(top|best|`school)/g;
document.getElementById("result7").innerHTML = text.match(text);

var text = "100 percent";
var regex = /\d/g;
document.getElementById("result8").innerHTML = text.match(text);

var text = "100 percent";
var regex = /\s/g;
document.getElementById("result9").innerHTML = text.match(text);

var text = "Heey, how are you";
var regex = /\e+/g;
document.getElementById("result9").innerHTML = text.match(text);

var text = "so, i hope we'll see eachother again soon...";
var regex = /\so3/g;
document.getElementById("result9").innerHTML = text.match(text);