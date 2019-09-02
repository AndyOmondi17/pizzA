/* UI logic*/

$(document).ready(function(event){
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
    });
});
});

/*Business logic*/



$(document).ready(function(event){
  $(".form_").submit(function() {
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
    var toppings=$().val();
    var delivery=$("input[name=delivery:checked]").val();
    var deliveryPrice;
    if(deliver == "yes"){
      deliveryPrice=150;
    }else {
      deliveryPrice=0;
    }
    var totalPrice=crustPrice+deliveryPrice+sizePrice;
    alert("Your total price is"+totalPrice);

  });
});
