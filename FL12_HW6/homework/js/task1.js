let $a = parseFloat(prompt('Введіть аргумент "a" для квадратного рівняння', '1'));
let $b = parseFloat(prompt('Введіть аргумент "b" для квадратного рівняння', '1'));
let $c = parseFloat(prompt('Введіть аргумент "c" для квадратного рівняння', '1'));
const $4 = 4;
const $2 = 2;

let $d = $b * $b - $4 * $a * $c;

if ( $a === 0 || isNaN($a) || isNaN($b) || isNaN($c) ) {
	alert('Invalid input data');
}

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

