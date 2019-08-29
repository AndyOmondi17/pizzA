/* UI logic*/
$(document).ready(function(){
  $("#od").click(function(){
    $(".form_").show();
    $("input[name=delivery]").click(function(){
      var deliver=$("input[name=delivery]:checked").val();
      if(deliver == "yes"){
        $("input[id=location]").show();
      }else if (deliver == "no") {
        $("input[id=location]").hide();
      }

    });


  });
});
