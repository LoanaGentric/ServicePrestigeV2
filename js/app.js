let carImage = ["images/cars/teslaX.png", "images/cars/teslaS.png", "images/cars/mercedesClasseE.png", "images/cars/mercedesClasseS.png", "images/cars/mercedesClasseV.png", "images/cars/mercedesGLE.png", "images/cars/audiA6.png", "images/cars/audiA8L.png", "images/cars/bmwSerie5.png", "images/cars/bmwSerie7.png", "images/cars/rangeRover.png"]

let carName = ["Tesla X", "Tesla S", "Mercedes Classe E", "Mercedes Classe S", "Mercedes Class V", "Mercedes GLE", "Audi A6", "Audi A8", "BMW Série 5", "BMW Série 7", "RANGE ROVER"]


// slider début

let i = 0

    setInterval(function(){
      console.log('intervale')
      mouvement(i)
      i += 1
      if (i == 10) {
        i = 0
      }
      console.log(i)
    },3000)


//intervalID = window.setInterval(mouvement(i),1000)

// function de mouvement

function mouvement(i){
  if (i == 0) {
    document.querySelector('.leftImg').src=carImage[10];
  }
  else {
    document.querySelector('.leftImg').src=carImage[i-1];
  }
  document.querySelector('.center').src=carImage[i];
  document.getElementById('nomVoiture').innerHTML=carName[i];
  if (i == 10) {
    document.querySelector('.rightImg').src=carImage[0];
  }
  else {
    document.querySelector('.rightImg').src=carImage[i+1];
  }
  console.log(i)
}

//
// action des flèches

document.querySelector('#fleche').addEventListener('click',
function(){
  console.log('a gauche')
  i = i - 1
  mouvement(i)
  if (i == 11) {
    i = 0
  }
  if (i <= 0) {
    i = 11
  }
  console.log(i)

})

document.querySelector('#fleche2').addEventListener('click',
function(){
  console.log('a droite')
  i = i + 1
  if (i == 11) {
    i = 0
  }
  mouvement(i)

  console.log(i)

})

// Slider Fin

// page 4 hover des photos début


document.querySelector(".staff1").addEventListener('mouseover', function(e){
  document.querySelector(".border1").className = "borderHover"
});

document.querySelector(".staff1").addEventListener('mouseleave', function(e){
  document.querySelector(".borderHover").className = "border1"
});


document.querySelector(".staff2").addEventListener('mouseover', function(e){
  document.querySelector(".border2").className = "borderHover"
});

document.querySelector(".staff2").addEventListener('mouseleave', function(e){
  document.querySelector(".borderHover").className = "border2"
});


document.querySelector(".staff3").addEventListener('mouseover', function(e){
  document.querySelector(".border3").className = "borderHover"
});

document.querySelector(".staff3").addEventListener('mouseleave', function(e){
  document.querySelector(".borderHover").className = "border3"
});

// page 4 hover des photos fin





// MENU HAMBURGER

var content = document.querySelector('#hamburger-content');
var sidebarBody = document.querySelector('#hamburger-sidebar-body');
var button = document.querySelector('#hamburger-button');
var overlay = document.querySelector('#hamburger-overlay');
var activatedClass = 'hamburger-activated';

sidebarBody.innerHTML = content.innerHTML;

button.addEventListener('click', function(e) {
	e.preventDefault();

	this.parentNode.classList.add(activatedClass);
});

button.addEventListener('keydown', function(e) {
	if (this.parentNode.classList.contains(activatedClass))
	{
		if (e.repeat === false && e.which === 27)
			this.parentNode.classList.remove(activatedClass);
	}
});

overlay.addEventListener('click', function(e) {
	e.preventDefault();

	this.parentNode.classList.remove(activatedClass);
});



// POP-UP

function myPopup() {

    var overlay = $('<div id="overlay"></div>');
    $('.x').click(function() {
        $('.popup').hide();
        overlay.appendTo(document.body).remove();
        return false;
    });
    var obj = document.getElementsByClassName('buton');

    // alert("name");
    myScript = function() {
        overlay.show();
        overlay.appendTo(document.body);
        $('.popup').show();
        return false;
    };

    obj[0].addEventListener("click", myScript);

}

// SLIDER PAGE 2 notre EXPERTISE début

// flèche gauche (retour en arrière)

function passageRetour(){

  document.querySelector('.textP2-1').innerHTML = '- Un <strong>savoir-faire</strong> acquis sur de longues années auprès d’une <strong>clientèle d’exception</strong>';

  document.querySelector('.textP2-2').innerHTML ='- Une <strong>centrale de réservation</strong> uniquement dédiée aux professionnels avec une équipe d’opérateurs experte dans l’organisation et la gestion de grands événements.'

  document.querySelector('.textP2-3').innerHTML = 'Notre <strong>mission principale</strong> est d‘être <strong>à vos côtés</strong> pour vous soutenir dans la gestion de vos plannings, de vos appels d’offres ou encore de vous fournir les <strong>ressources</strong> dont vous avez besoin sur le territoire national et bien plus encore.'

  document.querySelector("#page2 div.points div.first").className = "first isActive"

  document.querySelector("#page2 div.points div.second").className = "second isNotActive"
}



document.querySelector('#page2 div.slideP2-1').addEventListener('click', function(e){
  passageRetour()
})

document.querySelector('#page2 div.points div.first').addEventListener('click', function(e){
  passageRetour()
})

// flèche droite (passage au text suivant)

function passageSuivant(){
  document.querySelector('.textP2-1').innerHTML = 'Service Prestige Développement c’est surtout un savoir-faire acquis sur de longues années auprès d’une clientèle d’exception. Nous gérons un réseau de plus 120 entreprises en France triées sur le volet, fédérant ainsi les acteurs offrant un Service de haute qualité, qui autrefois étaient réunis au sein de ce qu’on appelait alors  « la Grande Remise ».';

  document.querySelector('.textP2-2').innerHTML = 'Service Prestige Développement c’est aussi une centrale de réservation gérant plusieurs dizaines de milliers de missions de transport annuellement pour le compte de ses affiliés. ';

  document.querySelector('.textP2-3').innerHTML = '';

  document.querySelector("#page2 div.points div.first").className = "first isNotActive"

  document.querySelector("#page2 div.points div.second").className = "second isActive"
}

document.querySelector('#page2 div.slideP2-2').addEventListener('click', function(e){
  passageSuivant()
})

document.querySelector('#page2 div.points div.second').addEventListener('click', function(e){
  passageSuivant()
})

// SLIDER PAGE 2 notre EXPERTISE fin
