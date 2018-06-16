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
