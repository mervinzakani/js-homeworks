

var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var answer = document.getElementById('answer');

function sum() {
    var ans = Number(num1.value) + Number(num2.value);
    answer.innerHTML = ans;
}
function min() {
    var ans = Number(num1.value) - Number(num2.value);
    answer.innerHTML = ans;
}
function mul() {
    var ans = Number(num1.value) * Number(num2.value);
    answer.innerHTML = ans;
}
function divide() {
    var ans = Number(num1.value) / Number(num2.value);
    answer.innerHTML = ans;
}
function po() {
    var ans = Number(num1.value) ** Number(num2.value);
    answer.innerHTML = ans;
}
function dar() {
    var ans = Number(num1.value) % Number(num2.value);
    answer.innerHTML = ans;
}
