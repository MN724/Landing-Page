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

function operate(a, op, b) {
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
  return ans;
}

function popDisplay(ans) {
  const dispUpdate = document.getElementById('display');
  roundedAns = round(ans, 5);
  dispUpdate.textContent = roundedAns;
}

function round(value, decimals) {
  if (value < 1+'e-'+decimals && value > 0) {
    return 0;
  }
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

var ans = 0;
var num = 0;

const zero = document.getElementById('0');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const decimal = document.getElementById('dec');

const numButtons = [zero, one, two, three, four, five, six, seven, eight, nine];

const clearDisp = document.getElementById('clear');
const addDisp = document.getElementById('add');
const subDisp = document.getElementById('sub');
const multDisp = document.getElementById('mult');
const divDisp = document.getElementById('div');
const evalDisp = document.getElementById('eval');
var ans = 0;
const exp1 = [0, "+", ""];
const exp2 = [0, "+", ""];

numButtons.forEach ((numButton, index) => {
  numButton.onclick = () => {
    exp1[0] = exp2[0];
    exp1[1] = exp2[1];
    exp1[2] = exp2[2];
    exp1[2] += index.toString();
    // exp1[2] = Number(exp1[2]);
    exp2[0] = exp1[0];
    exp2[1] = exp1[1];
    exp2[2] = exp1[2];
    console.log(exp1);
    console.log(exp2);
    popDisplay(exp1[2]);
  }
})

decimal.onclick = () => {
  exp1[0] = exp2[0];
  exp1[1] = exp2[1];
  exp1[2] = exp2[2];
  exp1[2] += ".";
  exp2[0] = exp1[0];
  exp2[1] = exp1[1];
  exp2[2] = exp1[2];
  console.log(exp1);
  console.log(exp2);
  popDisplay(exp1[2]);
}

addDisp.onclick = () => {
  exp1[2] = Number(exp1[2]);
  ans = operate(exp1[0], exp1[1], exp1[2]);
  exp2[0] = ans;
  exp2[1] = "+";
  exp2[2] = "";
  console.log(ans);
  console.log(exp1);
  console.log(exp2);
}
subDisp.onclick = () => {
  exp1[2] = Number(exp1[2]);
  ans = operate(exp1[0], exp1[1], exp1[2]);
  exp2[0] = ans;
  exp2[1] = "-";
  exp2[2] = "";
  console.log(ans);
  console.log(exp1);
  console.log(exp2);
}
multDisp.onclick = () => {
  exp1[2] = Number(exp1[2]);
  ans = operate(exp1[0], exp1[1], exp1[2]);
  exp2[0] = ans;
  exp2[1] = "*";
  exp2[2] = "";
  console.log(ans);
  console.log(exp1);
  console.log(exp2);
}
divDisp.onclick = () => {
  exp1[2] = Number(exp1[2]);
  ans = operate(exp1[0], exp1[1], exp1[2]);
  exp2[0] = ans;
  exp2[1] = "/";
  exp2[2] = "";
  console.log(ans);
  console.log(exp1);
  console.log(exp2);
}
evalDisp.onclick = () => {
  exp1[2] = Number(exp1[2]);
  ans = operate(exp1[0], exp1[1], exp1[2]);
  exp2[0] = ans;
  exp1[0] = exp2[0];
  exp2[0] = "";
  exp2[1] = "+";
  exp2[2] = "";
  console.log(ans);
  console.log(exp1);
  console.log(exp2);
}

clearDisp.onclick = () => {
  ans = 0;
  exp1[0] = "";
  exp1[1] = "+";
  exp1[2] = "";
  exp2[0] = "";
  exp2[1] = "+";
  exp2[2] = "";
  console.log(ans);
  console.log(exp1);
  console.log(exp2);
  popDisplay(ans);
}