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

makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');
