//ques1
function mainFunction(show) {
	console.log(`I am a main function`);
	let result = `I am a call back function`;
	show(result);
}

function callBackFunction(result) {
	console.log(result);
}

mainFunction(callBackFunction);

//ques2
function printNumberWithDelay(number, delay, callback) {
	setTimeout(function () {
		console.log(number);
		callback();
	}, delay * 1000);
}

function printNumbers() {
	let counter = 1;

	function printNextNumber() {
		if (counter <= 7) {
			printNumberWithDelay(counter, counter, function () {
				counter++;
				printNextNumber();
			});
		}
	}

	printNextNumber();
}

printNumbers();

//ques3
function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function printNumbers() {
	let promise = Promise.resolve();

	for (let number = 1; number <= 7; number++) {
		promise = promise
			.then(() => {
				console.log(number);
			})
			.then(() => delay(number * 1000));
	}
}

printNumbers();

//ques4
function processPromise(input) {
	return new Promise((resolve, reject) => {
		if (input === 'yes') {
			resolve('Promise Resolved');
		} else {
			reject(new Error('Promise Rejected'));
		}
	});
}

processPromise('yes')
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.error(error);
	});

//ques5
function calculate(num1, num2) {
	return num1 + num2;
}

function displayData(name, age) {
	console.log(`${name} : age is ${age}`);
}

displayData('Anu', calculate(10, 12));

//ques6
function doSomething(callback) {
	setTimeout(function () {
		const result = 'Result of doSomething';
		callback(result);
	}, 1000);
}

function doSomethingElse(result, callback) {
	setTimeout(function () {
		const newResult = `New result based on ${result}`;
		callback(newResult);
	}, 2000);
}

function doAnotherThing(newResult, callback) {
	setTimeout(function () {
		const finalResult = `Final result based on ${newResult}`;
		callback(finalResult);
	}, 3000);
}

doSomething(function (result) {
	doSomethingElse(result, function (newResult) {
		doAnotherThing(newResult, function (finalResult) {
			console.log(finalResult);
		});
	});
});

//ques7
function checkNumber(number) {
	return new Promise((resolve, reject) => {
		if (typeof number === 'number') {
			resolve('Valid number');
		} else {
			reject(new Error('Invalid number'));
		}
	});
}

checkNumber(42)
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.error(error);
	});

//ques8
function checkNumber(number) {
	return new Promise((resolve, reject) => {
		if (typeof number === 'number') {
			resolve('Valid number');
		} else {
			reject(new Error('Invalid number'));
		}
	});
}

async function validateNumber() {
	try {
		const result = await checkNumber(42);
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

validateNumber();

//ques9
function asyncOperation1() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('Async operation 1 complete');
		}, 2000);
	});
}

function asyncOperation2() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('Async operation 2 complete');
		}, 1500);
	});
}

async function performAsyncOperations() {
	try {
		const results = await Promise.all([asyncOperation1(), asyncOperation2()]);
		console.log(results);
	} catch (error) {
		console.error(error);
	}
}

performAsyncOperations();
