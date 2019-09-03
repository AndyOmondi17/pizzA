/*function PizzaOrder(pizza,crusts,deliver){
  this.pizzaSize=pizzaSize;
  this.crust=crust;

  this.delivery=deliver;
}*/

var pizzaSize=$("#size").val();
var sizePrice;
switch (pizzaSize) {
  case "1":
  sizePrice=340;
  break;
  case "2":
  sizePrice=500;
  break;
  case "3":
  sizePrice=700;
  break;
  default:
  sizePrice=0;
}
alert(sizePrice);*/

//selected crustPrices
var crust=$("#crust").val();
var crustPrice;
switch (crust){
  case "1":
  crustPrice=100;
  break;
  case "2":
  crustPrice=200;
  break;
  case "3":
  crustPrice=300;
  break;
  default:
  crustPrice=0;
}

alert(crustPrice);
//DeliveryPrice option
var delivery=$(".radioButton").val();
var deliveryPrice;

switch (delivery) {
  case "yes":
  deliveryPrice=150;
  break;
  case "no":
  deliveryPrice=0;
  break;
  default:
  deliveryPrice=0;
}
alert(deliveryPrice);
  var toppings=[];
$.each($("input[name='Toppings']:checked"))
toppings.push($(this).val());
alert("Selected toppings are "+toppings.join(", "));*/
var toppings = [];
$.each($("input[name='Toppings']:checked"), function(){
  toppings. push($(this). val());
});
var pepperoniPrice=0;
var mushroomPrice=0;
var baconPrice=0;
var toppingPrice=0;
switch (toppings) {
  case toppings[0]:
  pepperoniPrice=100;
    break;
  case toppings[1]:
  mushroomPrice=200;
    break;
  case toppings[2]:
  baconPrice=150;
  break;
  default:
  console.log("No selected item");
}
toppingPrice=pepperoniPrice+mushroomPrice+baconPrice;
alert("Your total topping price is "+toppingPrice);

alert("Toppings selected are "+toppings.join(" ,"));
var sum=0;

/*PizzaOrder.prototype.totalPrice = function (){
  return crustPrice+deliveryPrice+sizePrice;
};

/*Business logic*/
var crustPrice=0;
var pizzaPrice=0;
var toppingPrice=0;
var deliveryPrice=0;
var finalPrice=0;


//var arrayToppings=[pepperoni,mushroom,bacon];
//create crust prices
function Toppings(pepperoni,mushroom,bacon){
  this.pepperoni = pepperoni;
  this.mushroom = mushroom;
  this.bacon = bacon;
}

var priceTopping = new Toppings(50,50,50);

/*function PizzaCrust(Crispy,Stuffed,Glutenfree) {
	this.Crispy = Crispy;
	this.Stuffed = Stuffed;
	this.Glutenfree = Glutenfree;

}

//instantiate the pricing object
var priceCrust = new PizzaCrust(100,150,230);*/

/*function PizzaDelivery(yes,no){
  this.yes = yes;
  this.no = no;
}
var priceDelivery = new PizzaDelivery(150,0);*/

//Create pizza size prices
function PizzaSize(small,medium,large) {
	this.small = small;
	this.medium = medium;
	this.large = large;
}
//Create an instance of the size price
var pricePizza = new PizzaSize(350,500,700);

//Create a method for final price

//Create pizza object


function Pizza(size,toppings,crust,delivery) {
	this.size = size;
	this.totalToppings = toppings;
  this.crust = crust;
  this.delivery = delivery;
}
// //Create an instance of the object pizza
// myPizza = new Pizza(myPizzaSizePrice,myToppingsPrices);

//Create a prototype for final price on object pizza
Pizza.prototype.getFinalPrice = function(pricePizza,priceTopping,priceCrust,priceDelivery){
	return pricePizza + toppingPrice + priceCrust + priceDelivery;
};

//User interface logic
$(document).ready(function(){

    $("#od").click(function(){

      $(".form_").show();

      $("input[name=delivery]").click(function(){
        var deliver=$("input[name=delivery]:checked").val();

        if(deliver == "yes"){
          $("input[id=location]").show();
          $("#second_button").click(function(){
            var location =$("#location").val();
              alert("Your food will be delivered at " + location );

          });


        }else if (deliver == "no") {
          $("input[id=location]").hide();
        }





        /*$("#mezesha").append("<tr><td#CRUST>"+ newOrder.crust + "</td></tr>");

        $("#mezesha").append("<tr><td#DELIVERY>"+ newOrder.delivery + "</td></tr>");*/




$("form_").submit(function(event){
  event.preventDefault();

	var y = $("#size option:selected").val();
  if(y=="1"){
    pizzaPrice = pricePizza.small;
  	let displaySizePrice = "ksh" + pizzaPrice;
  	let displayFinalPrice = "ksh" + pizzaPrice;
    alert(pizzaPrice);
  	console.log(pizzaPrice);
    $("#mezesha").append("<tr><td#pizzaSIZE>"+ displaySizePrice + "</td></tr>");
  }else if(y=="2"){
    pizzaPrice = pricePizza.medium;
  	let displaySizePrice = "$" + pizzaPrice;
  	let displayFinalPrice = "$" + pizzaPrice;
  	console.log(pizzaPrice);

  	//Display subtotal and final price
  	/*$("#size-price").show().text(displaySizePrice);
  	$("#final-price").show().text(displaySizePrice);*/

  }else if(y=="3"){
    pizzaPrice = pricePizza.large;
  	let displaySizePrice = "$" + pizzaPrice;
  	let displayFinalPrice = "$" + pizzaPrice;
  	console.log(pizzaPrice);

  }
  else{
    let displaySizePrice = 0;
    $("#mezesha").append("<tr><td#pizzaSIZE>"+ displaySizePrice + "</td></tr>");
  }

	// $("#size-price").toggle();
	// let price = "$" + $("input#option1").val();


	//Display subtotal and final price
	//$("#size-price").show().text(displaySizePrice);

	//$("#final-price").show().text(displaySizePrice);



	// $("#size-price").show();



	//Display subtotal and final price
/*	$("#size-price").show().text(displaySizePrice);
	$("#final-price").show().text(displaySizePrice);*/
  //$("#mezesha").append("<tr><td#pizzaSIZE>"+ displaySizePrice + "</td></tr>");

	// blanks.forEach(function (blank) {
	// let arr = parseInt($("#" + blank).val);
	// console.log(arr);
	// const totalToppings = arr => arr.reduce((a, b) => a + b, 0);
	// $("#toppings-price").show().text("$" + totalToppings);
	// // console.log(totalToppings);
	// });
	// $("input#cheese").checkbox(function () {

	var pepperoni = $('input[id="pepperoni"]');
	let numCheese = parseInt(priceTopping.pepperoni);
	pepperoni.change(function () {
	if (this.checked === true) {
	toppingPrice += numCheese;
	console.log(numCheese);
//	$("#toppings-price").show().text("$" + toppingPrice);

	finalPrice = pizzaPrice + toppingPrice;

	console.log(finalPrice);
  $("#mezesha").append("<tr><td#TOPPING>"+ toppingPrice +"</td><tr>");
	} else {
	toppingPrice -= numCheese;
	console.log(numCheese);
	//$("#toppings-price").show().text("$" + toppingPrice);

	//Subtract from final price
	finalPrice = pizzaPrice - toppingPrice;

	console.log(finalPrice);
  $("#mezesha").append("<tr><td#TOPPING>"+ toppingPrice + "</td><tr>");
	}
	});

	var mushroom = $('input[id="mushroom"]');
	let numMozzarella = parseInt(priceTopping.mushroom);
	mushroom.change(function () {
	if (this.checked === true) {
	toppingPrice += numMozzarella;
	console.log(numMozzarella);
	//$("#toppings-price").show().text("$" + toppingPrice);

	//add to final price
	finalPrice = pizzaPrice + toppingPrice;
	$("#final-price").text("$" + finalPrice);
	console.log(finalPrice);
    $("#mezesha").append("<tr><td#TOPPING>"+ toppingPrice + "</td><tr>");
	} else {
	toppingPrice -= numMozzarella;
	console.log(numMozzarella);
	//$("#toppings-price").show().text("$" + toppingPrice);

	//Subtract from final price
	finalPrice = pizzaPrice - toppingPrice;

	console.log(finalPrice);
    $("#mezesha").append("<tr><td#TOPPING>"+ toppingPrice+"</td><tr>");
	}
	});
	var bacon = $('input[id="bacon"]');
	let numMushroom = parseInt(priceTopping.bacon);
	bacon.change(function () {
	if (this.checked === true) {
	toppingPrice += numMushroom;
	console.log(numMushroom);
	//$("#toppings-price").show().text("$" + toppingPrice);

	//add to final price
	finalPrice = pizzaPrice + toppingPrice;
	//$("#final-price").text("$" + finalPrice);
	console.log(finalPrice);
  $("#mezesha").append("<tr><td#TOPPING>"+toppingPrice+"</td><tr>");
	} else {
	toppingPrice -= numMushroom;
	console.log(numMushroom);
	$("#mezesha").append("<tr><td#TOPPING>"+toppingPrice+"</td><tr>");

	//Subtract from final price
	finalPrice = pizzaPrice - toppingPrice;
	$("#final-price").text("$" + finalPrice);
	console.log(finalPrice);
  $("#mezesha").append("<tr><td#TOPPING>"+toppingPrice+"</td><tr>");
	}
	});
});
});
});
});
