//not made by ai, trust gang human made.
const dropdown = document.querySelector(".dropdown-content");
const calc = document.querySelector(".earth")
const display = document.querySelector("#screen")

let js = "earth";
let numb1 = 0;
let decimal1 = false;
let decimal2 = false;
let afterDecimal1 = 1;
let numb2 = 0;
let operation = "noop";
let afterDecimal2 = 1;
let a = 0;
let b = 0;
let c = 0;
let split = [];

for(const drop of dropdown.children) {
	drop.addEventListener("click", () => {
		js = drop.id;
		calc.className = drop.id;
	})
}

function show() {
	if (operation === "noop") {
		if (decimal1) {
			if (afterDecimal1 === 1) {
				display.textContent = String(numb1) + ".";
			} else {
				display.textContent = String(numb1) + "." + String(afterDecimal1).slice(1);
			}
		}
		if (!decimal1) {
			display.textContent = numb1;
		}
	} else {
		if (decimal2) {
			if (afterDecimal2 === 1) {
				display.textContent = String(numb2) + ".";
			} else {
				display.textContent = String(numb2) + "." + String(afterDecimal2).slice(1);
			}
		}
		if (!decimal2) {
			display.textContent = numb2;
		}
	}
}
show();

function newDigit(digit) {
	if (operation === "noop") {
		if (display.textContent.length < 8) {
			if (!decimal1) {
				numb1 *= 10;
				numb1 += digit;
			} else {
				afterDecimal1 *= 10;
				afterDecimal1 += digit;
			}
		}
	} else {
		if (display.textContent.length < 8 || (numb2 === 0 && !decimal2)) {
			if (!decimal2) {
				numb2 *= 10;
				numb2 += digit;
			} else {
				afterDecimal2 *= 10;
				afterDecimal2 += digit;
			}
		}
	}
	show();
}

function remove() {
	if (operation === "noop"){
		numb1 = 0;
		afterDecimal1 = 1;
		decimal1 = false;
	} else {
		numb2 = 0;
		afterDecimal2 = 1;
		decimal2 = false;
	}
show();
}

function fullRemove() {
	numb1 = 0;
	numb2 = 0;
	afterDecimal1 = 1;
	afterDecimal2 = 1;
	decimal1 = false;
	decimal2 = false;
	operation = "noop";
	show();
}

function point() {
	if (display.textContent.length < 8) {
		if (operation === "noop"){
			decimal1 = true;
		} else {
			decimal2 = true;
		}
	}
show();
}

function backspace() {
	if (operation === "noop"){
		if (decimal1) {
			if (afterDecimal1 === 1) {
				decimal1 = false;
			} else {
				afterDecimal1 = (afterDecimal1 / 10) | 0;
			}
		} else {
			numb1 = (numb1 / 10) | 0;
		}
	} else {
		if (decimal2) {
			if (afterDecimal2 === 1) {
				decimal2 = false;
			} else {
				afterDecimal2 = (afterDecimal2 / 10) | 0;
			}
		} else {
			numb2 = (numb2 / 10) | 0;
		}
	}
	show();
}

function yummyPie() {
	if (operation === "noop") {
		decimal1 = true;
		numb1 = 3;
		afterDecimal1 = 1141593;
	} else {
		decimal2 = true;
		numb2 = 3;
		afterDecimal2 = 1141593;
	}
show();
}

function changeOperation(op) {
	if (operation !== "noop" && (numb2 !== 0 || decimal2)) {
		equals();
	}
	operation = op;
}

function squared() {
	if (operation === "noop" || (numb2 === 0 && !decimal2)) {
		numb1 = Number(String(Number(display.textContent) ** 2).slice(0, 8));
		decimal1 = false;
		afterDecimal1 = 1;
	} else {
		numb2 = Number(String(Number(display.textContent) ** 2).slice(0, 8));
		decimal2 = false;
		afterDecimal2 = 1;
	}
	show();
}

function root() {
	if (operation === "noop" || (numb2 === 0 && !decimal2)) {
		numb1 = Number(String(Math.sqrt(Number(display.textContent))).slice(0, 8));
		decimal1 = false;
		afterDecimal1 = 1;
	} else {
		numb2 = Number(String(Math.sqrt(Number(display.textContent))).slice(0, 8));
		decimal2 = false;
		afterDecimal2 = 1;
	}
	show();
}

function equals() {
	a = decimal1 ? Number(String(numb1) + "." + String(afterDecimal1).slice(1)) : numb1;
	b = decimal2 ? Number(String(numb2) + "." + String(afterDecimal2).slice(1)) : numb2;
	c = a;
	if (operation === "+") { c = a + b; }
	if (operation === "-") { c = a - b; }
	if (operation === "×") { c = a * b; }
	if (operation === "÷") { c = a / b; }
	if (operation === "^") { c = a ** b; }
	if (operation === "%") { c = a % b; }
	numb1 = 0;
	numb2 = 0;
	afterDecimal1 = 1;
	afterDecimal2 = 1;
	decimal1 = false;
	decimal2 = false;
	operation = "noop";
	split = String(c).split(".");
	numb1 = Number(split[0]);
	if (split[1]) {
		decimal1 = true;
		afterDecimal1 *= 10 ** split[1].length;
		afterDecimal1 += Number(split[1]);
	} else { decimal1 = false; }
	show();
}
//chat ppt pls help me :(
//def human written pls dont check me. me human