var storedNum = "0";
var currentNum = "0";
var operation = 0;

function update(){
	document.getElementById("calDisplay").innerHTML = currentNum;
}

function operand(op) {
	if (op == '+') {operation = 1;}

	if (op == '-') {operation = 2;}

	if (op == '*') {operation = 3;}

	if (op == '/') {operation = 4;}

	storedNum = currentNum;
	currentNum = "";
	update();
}

function addNum(num){
 	if ((eval(currentNum) == 0)  && (currentNum.indexOf(".") == -1)) {
 		currentNum = num;
 	} else {
 		currentNum = currentNum + num;
 	}

 	update();
}

function clearDis() { //preformed when 'C' button is pressed. Clears all values from display, resets to "0"
	currentNum = "0";
	update();
}

function decimal() {
	if (currentNum.length === 0) {
		currentNum = "0.";
	} else {
		if (currentNum.indexOf(".") === -1) {
			currentNum = currentNum + '.';
		}
	}

	update();
}

function equal() {  //preformed when '=' button is pressed. Calculation is preformed.
	if (operation == 1) {currentNum = eval(storedNum) + eval(currentNum);}
	if (operation == 2) {currentNum = eval(storedNum) - eval(currentNum);}
	if (operation == 3) {currentNum = eval(storedNum) * eval(currentNum);}
	if (operation == 4) {currentNum = eval(storedNum) / eval(currentNum);}

	operation = 0;
	storedNum = "0";

	update();
}

