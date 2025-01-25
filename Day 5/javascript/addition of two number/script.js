let num1, num2;

function get(){
    num1 = parseInt(document.getElementById("num1").value)
    num2 = parseInt(document.getElementById("num2").value)
}

function add() {
    let sum = num1 + num2;
    display(sum)
}

function sub() {
    let sum = num1 - num2;
    display(sum)
}

function mul() {
    let sum = num1 * num2;
    display(sum)
}

function div() {
    let sum = num1 / num2;
    display(sum)
}

function display(sum){
    document.getElementById('result').innerText = sum
}