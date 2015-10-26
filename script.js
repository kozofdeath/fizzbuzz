
// At a minimum, you’ll need an HTML file and a JavaScript file. 
//The HTML file should link to jQuery and to your application
//JavaScript file. The program should append each number (or its
// “fizz”/”buzz”/”fizzbuzz” substitution) to the body element
//of the DOM (On the page).

// The program should print out each number (not 'one' for 1, but 1 for 1), from 1 to 100, 
//replacing numbers divisible by both 3 and 5 with “fizz buzz”, 
//those divisible by 3 with “fizz”, and those divisible
//by 5 with “buzz”.

// You should use GitHub for this project, and when it’s done, publish it with GitHub pages and submit the link to your mentor below. 

$(document).ready(function(){
	for (var i = 1; i<101; i++) {
		$('.fizzBuzz').append($('<p/>').text(fizzBuzzCalc(i)));
	}
});

function fizzBuzzCalc(i) {
	if (i%3 === 0 && i%5 === 0) {
		return "fizz buzz";
	} else if (i%3 === 0) {
		return "fizz";
	} else if (i%5 === 0) {
		return "buzz";
	} else {
		return i;
	};
}