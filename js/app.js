let carImage = ["images/teslaX.jpg", "images/teslaS.png", "images/mercedesClasseE.jpg", "images/mercedesClasseS.png", "images/mercedesClasseV.jpg", "images/mercedesGLE.png", "images/audiA6.png", "images/audiA8.png", "images/bmwSerie5.jpeg", "images/bmwSerie7.png", "images/rangeRover.jpg"]

let carName = ["Tesla X", "Tesla S", "Mercedes Classe E", "Mercedes Classe S", "Mercedes Class V", "Mercedes GLE", "Audi A6", "Audi A8", "BMW Série 5", "BMW Série 7", "RANGE ROVER"]

let i = 0

    setInterval(function(){
      console.log('intervale')
      mouvement(i)
      i += 1
      if (i == 10) {
        i = 0
      }
      console.log(i)
    },4000)


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
