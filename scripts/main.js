$(function(){

	var orders = []; // this will hold all the orders


		//*** Delete an order ***//

	  $('.card').on('click', '.delete', function(){  
        $(this).parent().remove();
      });  

	function renderCoffeeOrder(order) {
		var finalHTML = '<div class="card">';	
		finalHTML += '<ul class="list-group list-group-flush">';

		finalHTML += '<li class="list-group-item">'+ order.coffeeOrder +'</li>';
		finalHTML += '<li class="list-group-item">'+ order.email +'</li>';
		finalHTML += '<li class="list-group-item">'+ order.size +'</li>';
		finalHTML += '<li class="list-group-item">'+ order.flavorShot +'</li>';
		finalHTML += '<li class="list-group-item">'+ order.strength +'</li>';
		finalHTML += '<button class="delete">x</button>';

		finalHTML += '</ul';
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

		orders.push(currentOrder);

		// take the above above, render it to the screen
		var renderedHTML = renderCoffeeOrder(currentOrder);

		// get the renderedHTML to show up in the DOM
		$('.card').append(renderedHTML);

	});

     

});












