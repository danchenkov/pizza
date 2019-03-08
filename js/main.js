function getReceipt() {
	var order = [];
	clearAll();
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
		}
	}
	if (selectedSize === "Personal Pizza") {
		price = 6;
	} else if (selectedSize === "Medium Pizza") {
		price = 10;
	} else if (selectedSize === "Large Pizza") {
		price = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		price = 16;
	}

	var pizza = new Object();
	pizza.item = selectedSize;
	pizza.price = price;
	order.push(pizza);
	order.push.apply(order, getMeat());
	order.push.apply(order, getVeggies());
	order.push(getCheese());
	order.push(getCrust());
	order.push(getSauce());

	log(order);
	print(order);
};

function getMeat() {
	var meats = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			var m = new Object();
			m.item = meatArray[j].value;
			m.price = 1
			meats.push(m)
		}
	}
	if (meats.length > 0) {
		meats[0].price = 0;
	}
	return meats
}

function getVeggies() {
	var veggies = [];
	// var meatTotal = 0;
	var veggieArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggieArray.length; j++) {
		if (veggieArray[j].checked) {
			var v = new Object();
			v.item = veggieArray[j].value;
			v.price = 1
			veggies.push(v)
		}
	}
	if (veggies.length > 0) {
		veggies[0].price = 0;
	}
	return veggies
}

function getCheese() {
	var cheeseArray = document.getElementsByClassName("cheese");

	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			var selectedCheese = cheeseArray[i].value;
		}
	}

	var cheese = new Object();
	cheese.item = selectedCheese;
	if (selectedCheese === "Extra cheese") {
		cheese.price = 3;
	} else {
		cheese.price = 0;
	}
	return cheese
}

function getCrust() {
	var crustArray = document.getElementsByClassName("crust");

	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			var selectedCrust = crustArray[i].value;
		}
	}

	var crust = new Object();
	crust.item = selectedCrust;
	if (selectedCrust === "Cheese Stuffed Crust") {
		crust.price = 3;
	} else {
		crust.price = 0;
	}
	return crust
}

function getSauce() {
	var sauceArray = document.getElementsByClassName("sauce");

	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			var selectedSauce = sauceArray[i].value;
		}
	}

	var sauce = new Object();
	sauce.item = selectedSauce;
	sauce.price = 0;
	return sauce
}

function log(order) {
	console.log("---------------------------");
	var total = 0;
	for (var i = 0; i < order.length; i++) {
		total += order[i].price;
		console.log(order[i].item + ": $" + order[i].price);
	}
	console.log("Total: " + total);
}

function print(order) {
	var total = 0;
	for (var i = 0; i < order.length; i++) {
		$("#total").before("<tr><td>" + order[i].item + "</td><td>$" + order[i].price + "</td></tr>\n");
		total += order[i].price;
	}
	$("#totalAmount").text("$" + total);
	$("#cart").show();
}

function clearAll() {
	$("#cart").hide();
	board = $("#cart table tr");
	if (board.length > 2) {
		$("#cart table").html(board[0].outerHTML + board[board.length-1].outerHTML);
	}
	$("#totalAmount").text("");
}

$(function() {
	var year = (new Date()).getFullYear();
	if ($("footer .year").text() != year) {
		$("footer .year").text(year);
	}
});