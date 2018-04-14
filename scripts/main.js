$(function(){

	// page has loaded, need to pull the old orders from local storage


	var orders = []; // this will hold all the orders
	var oldOrdersJSON = localStorage.getItem('coffeeOrders');  // the old orders
	var oldOrders = JSON.parse(oldOrdersJSON); // retrieving the orders from local storage

	orders = oldOrders;

	// show the old orders to the screen
	var oldOrdersHTML = '';
	orders.forEach(function(currentOrder){
		oldOrdersHTML += renderCoffeeOrder(currentOrder);  // taking our empty string and adding html strings
	});
	$('.card').append(oldOrdersHTML);


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


		// Save to local storage

		var ordersJSON = JSON.stringify(orders);
		localStorage.setItem('coffeeOrders', ordersJSON);




	});

     

});












