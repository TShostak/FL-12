let $a = prompt('Введіть аргумент "a" для квадратного рівняння', '1');
let $b = prompt('Введіть аргумент "b" для квадратного рівняння', '1');
let $c = prompt('Введіть аргумент "c" для квадратного рівняння', '1');
const $4 = 4;
const $2 = 2;

if ( parseFloat($a) === 0 || isNaN($a) || isNaN($b) || isNaN($c) ) {
	alert('Invalid input data');
} else {
	$a = parseFloat($a);
	$b = parseFloat($b);
	$c = parseFloat($c);

	let $d = $b * $b - $4 * $a * $c;

	if ($d < 0) {
		alert('no solution');
	} else if ( $d === 0 ) {
		let $x = -$b / ( $2 * $a );
		alert('x = ' + $x);
	} else if ( $d > 0 ) {
		let $x1 = -$b / ( $2 * $a ) - Math.sqrt( $d ) / ( $2 * $a );
		let $x2 = -$b / ( $2 * $a ) + Math.sqrt( $d ) / ( $2 * $a );
		alert('x1 = ' + $x1 + ' and x2 = ' + $x2);
	}
}
