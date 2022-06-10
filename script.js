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

function refreshVariables(result = []) {
	activeOperand = result;
	firstOperand = [];
	operator = undefined;
	changeElementState(".equal", true);
	if (activeOperand.indexOf(".") != -1) changeElementState(".dot", true);
	else changeElementState(".dot", false);
}

function refreshDisplay() {
	const display = document.querySelector(".display");
	display.textContent = activeOperand.join("");
}

function changeElementState(selector, state) {
	const elements = document.querySelectorAll(selector);
	elements.forEach((item) => {
		item.disabled = state;
	});
}

let firstOperand, activeOperand, operator;

const buttons = document.querySelectorAll("button");

refreshVariables();

buttons.forEach((item) => {
	if (item.classList.contains("operand")) {
		item.addEventListener("click", () => {
			activeOperand[activeOperand.length] = item.textContent;
			if (activeOperand[0] != undefined && firstOperand[0] != undefined) changeElementState(".equal", false);
			if (item.classList.contains("dot")) changeElementState(".dot", true);
			refreshDisplay();
		});
	}
	else if (item.classList.contains("operator")) {
		item.addEventListener("click", () => {
			operator = item.textContent;
			firstOperand = activeOperand;
			activeOperand = [];
			changeElementState(".dot", false);
			refreshDisplay();
		});
	}
	else if (item.classList.contains("equal")) {
		item.addEventListener("click", () => {
			const result = operate(Number(firstOperand.join("")), Number(activeOperand.join("")), operator);
			const resultArr = result.toString().split("");
			refreshVariables(resultArr);
			refreshDisplay();
		});
	}
	else if (item.classList.contains("clear")) {
		item.addEventListener("click", () => {
			refreshVariables();
			refreshDisplay();
		});
	}
	else if (item.classList.contains("delete")) {
		item.addEventListener("click", () => {
			const popped = activeOperand.pop();
			if (popped == ".") changeElementState(".dot", false);
			else if (activeOperand.indexOf(popped)) changeElementState(".equal", true);
			refreshDisplay();
		});
	}
});