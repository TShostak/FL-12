// Your code goes here
function convert() {
	let resultArray = [];
	for (let i = 0; i < arguments.length;i++) {
		if (typeof arguments[i] === 'string') {
			arguments[i] = Number(arguments[i]);
		} else if (typeof arguments[i] === 'number') {
			arguments[i] = arguments[i].toString();
		}
		resultArray.push(arguments[i]);
	}

	return resultArray;
}

function executeforEach(arr, func) {
	for (const element of arr) {
		func(element);
	}
}

function mapArray(arr, func) {
	const result = [];
	for (let element of arr) {
		if (typeof element === 'string') {
			element = parseInt(element);
		}
		result.push(func(element));
	}
	return result;
}

function filterArray(arr, func) {
	let a = [], resultArray = [];
    executeforEach(arr, function(el) {
		a.push(func(el));
	});
	for(let i = 0; i < a.length; i++){
		if(a[i]) {
			resultArray.push(arr[i]);
		}
	} 
	return resultArray;
}

function flipOver(str) {
	let resultStr = '';
	for (let i = str.length - 1; i >= 0; i--) {
		resultStr += str[i];
	}
	return resultStr;
}

function makeListFromRange(range) {
	let list = [];
	for (let i = range[0]; i <= range[1]; i++) {
		list.push(i);
	}
	return list;
}

function getArrayOfKeys(arr, keyName) {
	let result = [];
	executeforEach(arr, function(el) {
		result.push(el[keyName]);
	});
	return result;
}

function substitute(arr) {
	return mapArray(arr, element => {
		let min = 30;
		return element < min ? '*' : element;
	});
}

function getPastDay(date, daysCount) {
	const miliseconds = 86400000;
	return new Date(date.getTime() - daysCount * miliseconds).getDate();
}

function formatDate(dateInput) {
	let year = dateInput.getFullYear();
	let month = dateInput.getMonth() + 1;
	let day = dateInput.getDate();
	let hours = dateInput.getHours();
	let minutes = dateInput.getMinutes();
    
	return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes;
}