var runningTotal = 0;
var text1 = "<h3>You Ordered:</h3>";

function getReceipt() {
  console.log("Entered: getReceipt fxn")
  runningTotal = 0;
  
  getSize();
  getMeat();
  getVeggies();
  getCheese();
  getCrust();
  getSauce();
  
  console.log("Running Total is: " + runningTotal);
  
}

function getSize() {
  console.log("Running Total Start = " + runningTotal);
  console.log("Entered: Size fxn")
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	console.log("Running Total = " + runningTotal);
	runningTotal += sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	
}

function getMeat() {
  console.log("Entered: Meat fxn")
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	
	console.log("Running Total = " + runningTotal);
	runningTotal += meatTotal;
	

	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
}

function getVeggies() {
  console.log("Entered: Veggies fxn")
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggiesArray = document.getElementsByClassName("veggies");
	for (var d = 0; d < veggiesArray.length; d++) {
		if (veggiesArray[d].checked) {
			selectedVeggies.push(veggiesArray[d].value);
			console.log("selected veggie item: ("+veggiesArray[d].value+")");
			text1 = text1+veggiesArray[d].value+"<br>";
		}
	}
	var veggiesCount = selectedVeggies.length;
	if (veggiesCount > 1) {
		veggiesTotal = (veggiesCount - 1);
	} else {
		veggiesTotal = 0;
	}
	console.log("Running Total = " + runningTotal);
	runningTotal += veggiesTotal;
	console.log(selectedVeggies+" = $"+veggiesTotal+".00");
	
}

function getCheese()  {
  console.log("Entered: Cheese fxn")
  //text1 = "<h3>You Ordered:</h3>";
  var cheeseTotal = 0;
  var sizeArray2 = document.getElementsByClassName("cheese");
  for (var a = 0; a < sizeArray2.length; a++) {
		if (sizeArray2[a].checked) {
			var selectedCheese = sizeArray2[a].value;
			text1 = text1 + selectedCheese + "<br>";
		}
	}
	
  if (selectedCheese === "Regular Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "No Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	}
	
	console.log("Running Total = " + runningTotal);
	runningTotal += cheeseTotal; 
	
	console.log(selectedCheese+" = $"+cheeseTotal+".00");

}


function getCrust()  {
  console.log("Entered: Crust fxn")
  console.log("Running Total Start = " + runningTotal);
  var crustTotal = 0;
  var crustArray = document.getElementsByClassName("crust");
  for (var c = 0; c < crustArray.length; c++) {
  	if (crustArray[c].checked) {
  		var selectedCrust = crustArray[c].value;
  		text1 = text1+selectedCrust+"<br>";
  	}
  }
  if (selectedCrust === "Plain Crust") {
  	crustTotal = 0;
  } else if (selectedCrust === "Garlic Butter Crust") {
  	crustTotal = 0;
  } else if (selectedCrust === "Cheese Stuffed Crust") {
  	crustTotal = 3;
  } else if (selectedCrust === "Spicy Crust") {
  	crustTotal = 0;
  } else if (selectedCrust === "House Special Crust") {
  	crustTotal = 0;
  } 
	
	console.log("crusty Total = " + crustTotal);
  console.log("Running Total = " + runningTotal);
  runningTotal += crustTotal; 

  console.log(selectedCrust + ": = $" + crustTotal);


  
}

function getSauce()  {
  console.log("Entered: Sauce fxn")
  //text1 = "<h3>You Ordered:</h3>";
  var sauceTotal = 0;
  var sauceArray = document.getElementsByClassName("sauce");
  for (var s = 0; s < sauceArray.length; s++) {
		if (sauceArray[s].checked) {
			var selectedSauce = sauceArray[s].value;
			text1 = text1 + selectedSauce + "<br>";
		}
	}
	
  if (selectedSauce === "Marinera Sauce") {
		cheeseTotal = 0;
	} else if (selectedSauce === "White Sauce") {
		cheeseTotal = 0;
	} else if (selectedSauce === "Barbecue Sauce") {
		cheeseTotal = 0;
	} else if (selectedSauce === "No Sauce") {
		cheeseTotal = 0;
	}
	console.log("Running Total = " + runningTotal);
	runningTotal += sauceTotal; 
	console.log(selectedSauce+" = $"+sauceTotal+".00");
	
document.getElementById("showText").innerHTML=text1;
console.log("Running Total Final= " + runningTotal);
document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	  
}


