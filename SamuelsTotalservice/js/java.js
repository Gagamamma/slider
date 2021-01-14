

$(".bild").click(function(){
  var a = window.pageYOffset ;
  console.log(a);
  var pos=0;
  if (a<412) {
    pos=140;
  }

  else {
    pos=79;
  }

  $("html, body").animate({
    scrollTop: $("#hemsidan").offset().top-pos
  }, 2000);
});




$("button").show();     //Jag säger att knappen ska synas.
$("#slider").css("overflow", "hidden");   //Jag sätter att rutan window ska överfördet tas bort (det utanför 200*200px) när jquery är igång.
var x=0; //initierar variabeln x

$("#btn1").click(function () {  //När man klickar på knappen btn1 körs funktionen click.
  x=x+1; //För varje gång funktionen körs plussas x med ett.

  if (x>=3) { //Om x är större eller =
    $("#imgs").animate({right:"0"});  // ska man bläddra tillbaka till bild ett på px 0.
    x=0; //x blir 0 igen eftersom man är på första bilden.
  }else {
    $("#imgs").animate({right:"+=303"});  //Innan x>=3 ska bilderna bläddra 202px mot höger.
  }
});

$("#btn2").click(function () { //När man klickar på knappen btn2 körs funktionen klick.
  if(x>=1){ //När x är större eller = ett kan
    $("#imgs").animate({right:"-=302"}); // funktionen backa bläddringen 202px bakåt, dvs en bild tillbaka.
    x=x-1; //När man går en bild bakåt måste även x blir ett mindre så den inte hoppar bilder.
  }
});   //Denna knappen är tii för att man ska kunna backa en bild istället för att bläddra ett varv runt i onödan.
//Det ska inte gå att backa på första bilden, när x=0.

const navSlide =()=>{

const burger =document.querySelector('.burger');
const nav =document.querySelector('.nav-links');
const navLinks =document.querySelectorAll('.nav-links a');


burger.addEventListener('click', () =>{

  nav.classList.toggle('nav-active');

  navLinks.forEach((link, index) => {

    console.log(index);
    if (link.style.animation) {
      link.style.animation = '';
    }else {
      link.style.animation = `navLinkFade 0.5 ease forwards ${index /7 +2}s`;
    }

  });

  burger.classList.toggle('toggle');

});

}

navSlide();
