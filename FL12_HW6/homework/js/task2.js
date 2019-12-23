let $a = parseInt(prompt('Введіть сторону "a"', ''));
let $b = parseInt(prompt('Введіть сторону "b"', ''));
let $c = parseInt(prompt('Введіть сторону "c"', ''));

if ( isNaN($a) || isNaN($b) || isNaN($c) ) {
	alert('input values should be ONLY numbers');
} else if ( $a <= 0 || $b <= 0 || $c <= 0 ) {
	alert('A triangle must have 3 sides with a positive definite length');
} else if ( $a + $b <= $c || $b + $c <= $a || $a + $c <= $b ) {
	alert('Triangle doesn’t exist');
} else if ( $a === $b === $c ) {
	alert('Equilateral triangle');
} else if ( $a === $b || $a === $c || $b === $c ) {
	alert('Isosceles triangle');
} else {
	alert('Scalene triangle');
}
