

$("#sortimentButton").show();
$("#verkstadButton").show();
$("#öppettiderButton").show();
$("#omossButton").show();

$("#bkkButton").click(function(){


  $('html, body').animate({
        scrollTop: $("#bkorkort").offset().top-90
    }, 2000);



});

$("#hemButton").click(function(){


  $('html, body').animate({
        scrollTop: $("#hemsidan").offset().top-140
    }, 2000);



});

$("#sortimentButton").click(function(){


  $('html, body').animate({

        scrollTop: $("#sortiment").offset().top-150
    }, 2000);



});


$("#verkstadButton").click(function(){


  $('html, body').animate({

        scrollTop: $("#verkstad").offset().top-150
    }, 2000);



});

$("#öppettiderButton").click(function(){


  $('html, body').animate({

        scrollTop: $("#öppettider").offset().top-150
    }, 2000);



});

$("#omossButton").click(function(){


  $('html, body').animate({

        scrollTop: $("#omoss").offset().top-140
    }, 3000);



});

$(".bild").click(function(){


  $('html, body').animate({

        scrollTop: $("#hemsidan").offset().top-90
    }, 2000);



});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



$("button").show();     //Jag säger att knappen ska synas.
$("#slider").css("overflow", "hidden");   //Jag sätter att rutan window ska överfördet tas bort (det utanför 200*200px) när jquery är igång.
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
