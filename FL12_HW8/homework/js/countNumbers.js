function makeNumber(string = '') {
	let $length = string.length;
	let $result = '';
	for (let i=0; i < $length; i++) {
		let $char = string.charAt(i);
		if ( !isNaN($char) ) {
			$result += $char;
		}
	}
	return $result;
}

function countNumbers(string) {
	let onlyNumbers = makeNumber(string);
	let totalResult = {};

	onlyNumbers.split('').forEach(function(e){
		if (!totalResult[e]) { 
			totalResult[e] = 1; 
		} else { 
			totalResult[e] += 1; 
		}
	});

	return totalResult;
}

countNumbers('jbhdfhjd6522020454548hdhfg');