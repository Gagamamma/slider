


$("button").show();
$("#window").css("overflow", "hidden");
var x=0; //initierar variabeln x

$("#btn1").click(function () {
  x=x+1; //För varje gång funktionen körs plussas x med ett.


  if (x>=3) {
    $("#imgs").animate({right:"0"});
    x=0;
  }else {
    $("#imgs").animate({right:"+=202"});

  }

});

$("#btn2").click(function () {
  if(x>=1){
    $("#imgs").animate({right:"-=202"});
    x=x-1;
  }
});
