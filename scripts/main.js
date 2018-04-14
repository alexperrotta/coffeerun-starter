$(function(){

	// page has loaded, need to pull the old orders from local storage


	var orders = []; // this will hold all the orders
	var oldOrdersJSON = localStorage.getItem('coffeeOrders');  // the old orders
	var oldOrders = JSON.parse(oldOrdersJSON); // retrieving the orders from local storage

	if (oldOrders != null) {  // if local storage is blank
		// edge case
		orders = oldOrders; 
	} 


	// show the old orders to the screen
	var oldOrdersHTML = '';
	orders.forEach(function(currentOrder){
		oldOrdersHTML += renderCoffeeOrder(currentOrder);  // taking our empty string and adding html strings
	});
	$('.cardContainer').append(oldOrdersHTML);


		//*** Delete an order ***//

	  $('.cardContainer').on('click', '.delete', function(){  
        
	  	var idToDelete = $(this).parent().data("id");

	  	// remove orders from orders array
	  	orders = orders.filter(function(currentOrder){
	  		return currentOrder.id != idToDelete;
	  	});

	  	// remove the order from local storage
	  	var ordersJSON = JSON.stringify(orders);
	  	localStorage.setItem('coffeeOrders', ordersJSON);

	  	// remove order from screen
        $(this).parent().remove();

      });  


	function renderCoffeeOrder(order) {
		var finalHTML = '<div class="card data-id="'+ order.id +'">';	// embedded into the html
		finalHTML += '<ul class="list-group list-group-flush">';

		finalHTML += '<li class="list-group-item">'+ order.coffeeOrder +'</li>';
		finalHTML += '<li class="list-group-item">'+ order.email +'</li>';
		finalHTML += '<li class="list-group-item">'+ order.size +'</li>';
		finalHTML += '<li class="list-group-item">'+ order.flavorShot +'</li>';
		finalHTML += '<li class="list-group-item">'+ order.strength +'</li>';
		finalHTML += '<button class="delete">x</button>';

		finalHTML += '</ul>';
		finalHTML += '</div>';

		return finalHTML;
	}
	

	//*** Listen for when people submit the form ***//

	$('form').submit(function(e){
		// code inside here will execute when the form is submitted
		e.preventDefault();

		var currentOrder = {
			id: new Date(),  // creates a time stamp
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
		$('.cardContainer').append(renderedHTML);


		// Save to local storage

		var ordersJSON = JSON.stringify(orders);
		localStorage.setItem('coffeeOrders', ordersJSON);




	});

     

});












