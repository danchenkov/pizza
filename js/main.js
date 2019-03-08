function getReceipt() {
	var order = [];
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
	// runningTotal = price;
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
};

function getMeat() {
	var meats = [];
	// var meatTotal = 0;
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			var m = new Object();
			m.item = meatArray[j].value;
			m.price = 1
			meats.push(m)
			// selectedMeat.push(meatArray[j].value);
			// console.log("selected meat item: ("+meatArray[j].value+")");
			// text1 = text1+meatArray[j].value+"<br>";
		}
	}
	if (meats.length > 0) {
		meats[0].price = 0;
	}
	return meats
	// var meatCount = selectedMeat.length;
	// if (meatCount > 1) {
	// 	meatTotal = (meatCount - 1);
	// } else {
	// 	meatTotal = 0;
	// }
	// runningTotal = (runningTotal + meatTotal);
	// console.log("total selected meat items: "+meatCount);
	// console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	// console.log("meat text1: "+text1);
	// console.log("Purchase Total: "+"$"+runningTotal+".00");
	// document.getElementById("showText1").innerHTML=text1;
	// document.getElementById("totalPrice").innerHTML = "<strong>$"+runningTotal+".00"+"</strong>";
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
		total += order[i].price;
	}
	// finish the writer
}

$(function() {
	var year = (new Date()).getFullYear();
	if ($("footer .year").text() != year) {
		$("footer .year").text(year);
	}
});