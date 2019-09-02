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
      console.log("No selected item");
    }
    alert(sizePrice);
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
      console.log("No selected item");
    }
    //alert(crustPrice);



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

    alert("Delivery price is "+deliveryPrice);
    var totalPrice=crustPrice+deliveryPrice+sizePrice;
    alert("Your total Price is "+totalPrice);
    /*  var toppings=$().val();*/

  });
});
