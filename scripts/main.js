$(function(){

	//*** Listen for when people submit the form ***//

	$('form').submit(function(){
		// code inside here will execute when the form is submitted
		var coffeeOrder = $('#coffeeOrder').val();
		var email = $('#emailInput').val();
		var size = $('#input:checked').val();
		var flavorShot = $('#flavorShot').val();
		var strength = $('#strengthLevel').val();

		console.log(coffeeOrder);
		console.log(email);
		console.log(size);
		console.log(flavorShot);
		console.log(strength);

	});



//*** STATE ***//






//*** ACTION ***//






//*** KICK IT OFF ***//


});