/* UI logic*/

function PizzaOrder(pizzaSize,crust,toppingPrice,delivery){
  this.pizzaS=sizePrice;
  this.crustPrice=crustPrice;

  this.deliveryPrice=deliveryPrice;
}





/*Business logic*/



$(document).ready(function(){
  $(".form_").submit(function(event) {
    //selected Pizza Size Section
    event.preventDefault();
    var pizzaSize=$("#size").val();
    var sizePrice;
    switch (pizzaSize) {
      case "1":
      sizePrice=500;
      break;
      case "2":
      sizePrice=650;
      break;
      case "3":
      sizePrice=700;
      break;
      default:
      console.log("No selected item");
    }
    alert("Your pizza price is"+sizePrice);
    //selected crustPrices
    var crust=$("#crust").val();
    var crustPrice;
    switch (crust){
      case "1":
      crustPrice=100;
      break;
      case "2":
      crustPrice=100;
      break;
      case "3":
      crustPrice=100;
      break;
      default:
      console.log("No selected item");
    }
    alert("Crust price is "+crustPrice);
    //alert(crustPrice);
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
      console.log("No selected item");
    }
  /*  var toppings=[];
    $.each($("input[name='Toppings']:checked"))
    toppings.push($(this).val());
    alert("Selected toppings are "+toppings.join(", "));*/
    /*var toppings = [];
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
    var sum=0;*/
    PizzaOrder.prototype.totalPrice = function (){
      return crustPrice+deliveryPrice+sizePrice;
    };

    var totalPrice=crustPrice+deliveryPrice+sizePrice;
    alert("Your total price is "+totalPrice);



  });
});
$(document).ready(function(event){
  $("#od").click(function(){

    $(".form_").show();

    $("input[name=delivery]").click(function(){
      var deliver=$("input[name=delivery]:checked").val();

      if(deliver == "yes"){
        $("input[id=location]").show();
        $("#second_button").click(function(){
          var location =$("#location").val();
            alert("Your food will be delivered at " + location + "at a cost of "+deliveryPrice );

        });


      }else if (deliver == "no") {
        $("input[id=location]").hide();
      }
      $(".second_button").click(function(event){
          event.preventDefault();
          $(".response").show();
      });

    });
});
});
