$(function(){

	function renderCoffeeOrder(order) {
		var finalHTML = '<div class="order">';

		finalHTML += '<span>'+ order.coffeeOrder +'</span>';
		finalHTML += '<span>'+ order.email +'</span>';
		finalHTML += '<span>'+ order.size +'</span>';
		finalHTML += '<span>'+ order.flavorShot +'</span>';
		finalHTML += '<span>'+ order.strength +'</span>';

		finalHTML += '</div';

		return finalHTML;
	}

	//*** Listen for when people submit the form ***//

	$('form').submit(function(e){
		// code inside here will execute when the form is submitted
		e.preventDefault();

		var currentOrder = {
			coffeeOrder: $('#coffeeOrder').val(),
			email: $('#emailInput').val(),
			size: $('input:checked').val(),
			flavorShot: $('#flavorShot').val(),
			strength: $('#strengthLevel').val(),
		};

		// take the above above, render it to the screen
		var renderedHTML = renderCoffeeOrder(currentOrder);

		// get the renderedHTML to show up in the DOM
		$('#orderList').append(renderedHTML);


	});



//*** STATE ***//






//*** ACTION ***//






//*** KICK IT OFF ***//


});