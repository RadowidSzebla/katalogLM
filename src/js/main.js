"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const input = document.querySelector('.input--js');
const image = document.querySelector('.image--js');
const label = document.querySelector('.image__label--js');
const buttonLoad = document.querySelector('.buttonLoad--js');

function handleClickLoad(){
  //console.log(input.value)
  //console.log(image.src)
  if (input.value!=""){
    if (input.value == "lm") {
      image.src = "assets/img/logoLM.jpg"
      label.innerHTML = input.value;
    }
    else if (input.value == "piws") {
      image.src = "assets/img/logoPiws.jpg"
      label.innerHTML = input.value;
    }
    else {
      image.src = "assets/img/no-pictures.svg"
      label.innerHTML = "nie znaleziono rysunku";
    }
    input.value = "";
  }
}
buttonLoad.addEventListener('click',handleClickLoad);