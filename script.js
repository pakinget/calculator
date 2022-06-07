let firstOperand, activeOperand, operator;

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
}

function refreshDisplay() {
	const display = document.querySelector(".display");
	display.textContent = activeOperand.join("");
}

const buttons = document.querySelectorAll("button");

refreshVariables();

buttons.forEach((item) => {
	if (item.classList.contains("operand")) {
		item.addEventListener("click", () => {
			activeOperand[activeOperand.length] = item.textContent;
			refreshDisplay();
		});
	}
	else if (item.classList.contains("operator")) {
		item.addEventListener("click", () => {
			operator = item.textContent;
			firstOperand = activeOperand;
			activeOperand = [];
			refreshDisplay();
		});
	}
	else if (item.textContent == "=") {
		item.addEventListener("click", () => {
			const result = operate(Number(firstOperand.join("")), Number(activeOperand.join("")), operator);
			const resultArr = result.toString().split("");
			refreshVariables(resultArr);
			refreshDisplay();
		});
	}
	else if (item.textContent == "c") {
		item.addEventListener("click", () => {
			refreshVariables();
			refreshDisplay();
		});
	}
	else if (item.textContent == "del") {
		item.addEventListener("click", () => {
			activeOperand.pop();
			refreshDisplay();
		});
	}
});