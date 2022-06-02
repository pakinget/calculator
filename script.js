function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function modulo(a, b) {
	return a % b;
}

function factorial(a) {
	if (a == 0) return 1;
	else if (a < 0) return;
	else {
		let result = 1;
		for (let i = 1; i <= a; i++) {
			result *= i;
		}
		return result;
	}

}

function operate(a, b, operator) {
	if (operator == "+") return add(a, b);
	else if (operator == "-") return subtract(a, b);
	else if (operator == "*") return multiply(a, b);
	else if (operator == "/") return divide(a, b);
	else return factorial(a);
}