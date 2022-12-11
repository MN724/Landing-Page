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

function operate(a, b, op) {
  if (op === "+") {
    return add(a, b);
  } else if (op === "-") {
    return subtract(a, b);
  } else if (op === "*") {
    return multiply(a, b);
  } else if (op === "/") {
    return divide(a, b);
  }
}

console.log(operate(10, 5, "+"));