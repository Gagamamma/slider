


$("button").show();     //Jag säger att knappen ska synas.
$("#window").css("overflow", "hidden");   //Jag sätter att rutan window ska överfördet tas bort (det utanför 200*200px) när jquery är igång.
var x=0; //initierar variabeln x

$("#btn1").click(function () {  //När man klickar på knappen btn1 körs funktionen click.
  x=x+1; //För varje gång funktionen körs plussas x med ett.


  if (x>=3) { //Om x är större eller =
    $("#imgs").animate({right:"0"});  // ska man bläddra tillbaka till bild ett på px 0.
    x=0; //x blir 0 igen eftersom man är på första bilden.
  }else {
    $("#imgs").animate({right:"+=202"});  //Innan x>=3 ska bilderna bläddra 202px mot höger.

  }

});

$("#btn2").click(function () { //När man klickar på knappen btn2 körs funktionen klick.
  if(x>=1){ //När x är större eller = ett kan
    $("#imgs").animate({right:"-=202"}); // funktionen backa bläddringen 202px bakåt, dvs en bild tillbaka.
    x=x-1; //När man går en bild bakåt måste även x blir ett mindre så den inte hoppar bilder.
  }
});   //Denna knappen är tii för att man ska kunna backa en bild istället för att bläddra ett varv runt i onödan.
      //Det ska inte gå att backa på första bilden, när x=0.
