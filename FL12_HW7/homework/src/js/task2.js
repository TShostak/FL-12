let $game = confirm('Do you want to play a game?');
let $rangeMax = 8;
let $totalPrize = 0;
let $possiblePrize = 100;
let $sessionMax = 100;

const $two = 2;
const $three = 3;
const $four = 4;
const $eight = 8;
const $hundred = 100;

if ($game) {
	let $winNumber = Math.floor(Math.random() * ($rangeMax + 1));
	let i = 0; 
	while (i <= $two) {
		let $userAnswer = parseInt(prompt('Choose roulette poket number from 0 to '+
			$rangeMax +' \n Attempts left: '+ ($three - i) +' \n Total prize: ' +
			$totalPrize + '$ \n Possible prize on current attempt: ' +
			$possiblePrize + '$', ''));
		if ( $userAnswer === $winNumber && !isNaN($userAnswer)) {
			let $winPlayAgain = confirm('Congratulation, you won! Your prize is: '+ 
				$possiblePrize +'$. Do you want to continue?');
			$totalPrize = $totalPrize + $possiblePrize;
			if ( $winPlayAgain ) {
				i = 0;
				$sessionMax = $sessionMax * $two;
				$possiblePrize = $sessionMax;
				$rangeMax = $rangeMax + $four;
				$winNumber = Math.floor(Math.random() * ($rangeMax + 1));
			} else {
				i = $three;
				let $losePlayAgain = confirm('Do you want to play again?');
				if ( $losePlayAgain ) {
					i = 0;
					$rangeMax = $eight;
					$totalPrize = 0;
					$sessionMax = $hundred;
					$possiblePrize = $hundred;
					$winNumber = Math.floor(Math.random() * ($rangeMax + 1));
				} else {
					i = $four;
					alert('You did not become a billionaire, but can.');
				}
			}
		} else {
			$possiblePrize = $possiblePrize / $two;
			i++;
		}
		if ( i === $three ) {
			alert('Thank you for your participation. Your prize is: '+ $totalPrize +'$');
			let $losePlayAgain = confirm('Do you want to play again?');
			if ( $losePlayAgain ) {
				i = 0;
				$rangeMax = $eight;
				$totalPrize = 0;
				$sessionMax = $hundred;
				$possiblePrize = $hundred;
				$winNumber = Math.floor(Math.random() * ($rangeMax + 1));
			} else {
				i = $four;
				alert('You did not become a billionaire, but can.');
			}
		}
	}
}else{
	alert('You did not become a billionaire, but can.');
}