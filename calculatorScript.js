function clear() {
  ans = 0;
  numArray = [];
  num = 0;
  popDisplay(ans);
  return [ans, numArray, num];
}

function add(a, b) {
  return x = a + b;
}

function subtract(a, b) {
  return x = a - b;
}

function multiply(a, b) {
  return x = a * b;
}

function divide(a, b) {
  return x = a / b;
}

function calculate(a, b) {

}

function operate(a, b, op) {
  if (op === "clear") {
    ans = clear();
  } else if (op === "+") {
    ans = add(a, b);
  } else if (op === "-") {
    ans = subtract(a, b);
  } else if (op === "*") {
    ans = multiply(a, b);
  } else if (op === "/") {
    ans = divide(a, b);
  } else if (op === "=") {
    ans = calculate(a, b);
  }

  popDisplay(ans);
}

function popDisplay(ans) {
  const dispUpdate = document.getElementById('display');
  dispUpdate.textContent = ans;
}

var ans = 0;
var num = 0;

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');

const clearDisp = document.getElementById('clear');
const addDisp = document.getElementById('add');
const subDisp = document.getElementById('sub');
const multDisp = document.getElementById('mult');
const divDisp = document.getElementById('div');
const evalDisp = document.getElementById('eval');



var numArray = [];
var Numbers = [];
var Operators = [];
var Answers = [];

function concateNum (numArray){
  var fullNum = '';
  numArray.forEach ((num) =>
  {
    fullNum = fullNum + num;
  });
  var fullNum = Number(fullNum);
  popDisplay(fullNum);
  return fullNum;
}

one.onclick = () => {
  numArray.push(1);
  num = concateNum(numArray);
}
two.onclick = () => {
  numArray.push(2);
  num = concateNum(numArray);
}
three.onclick = () => {
  numArray.push(3);
  num = concateNum(numArray);
}
four.onclick = () => {
  numArray.push(4);
  num = concateNum(numArray);
}
five.onclick = () => {
  numArray.push(5);
  num = concateNum(numArray);
}
six.onclick = () => {
  numArray.push(6);
  num = concateNum(numArray);
}
seven.onclick = () => {
  numArray.push(7);
  num = concateNum(numArray);
}
eight.onclick = () => {
  numArray.push(8);
  num = concateNum(numArray);
}
nine.onclick = () => {
  numArray.push(9);
  num = concateNum(numArray);
}
zero.onclick = () => {
  numArray.push(0);
  num = concateNum(numArray);
}
dec.onclick = () => {
  numArray.push(".");
  num = concateNum(numArray);
}

clearDisp.onclick = () => [ans, numArray, num] = clear();
addDisp.onclick = () => {
  operate(ans, num, "+");
  Numbers.push(num);
  Operators.push("+");
}
subDisp.onclick = () => {
  operate(ans, num, "-");
  Numbers.push(num);
  Operators.push("-");
}
multDisp.onclick = () => {
  operate(ans, num, "*");
  Numbers.push(num);
  Operators.push("*");
}
divDisp.onclick = () => {
  operate(ans, num, "/");
  Numbers.push(num);
  Operators.push("/");
}
evalDisp.onclick = () => operate(ans, num, "=");