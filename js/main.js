!function(n){var e={};function c(t){if(e[t])return e[t].exports;var l=e[t]={i:t,l:!1,exports:{}};return n[t].call(l.exports,l,l.exports,c),l.l=!0,l.exports}c.m=n,c.c=e,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var l in n)c.d(t,l,function(e){return n[e]}.bind(null,l));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function() {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function(err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\nconst input = document.querySelector('.input--js');\r\nconst image = document.querySelector('.image--js');\r\nconst label = document.querySelector('.image__label--js');\r\nconst buttonLoad = document.querySelector('.buttonLoad--js');\r\n\r\nfunction handleClickLoad(){\r\n  //console.log(input.value)\r\n  //console.log(image.src)\r\n  if (input.value!=\"\"){\r\n    if (input.value == \"lm\") {\r\n      image.src = \"assets/img/logoLM.jpg\"\r\n      label.innerHTML = input.value;\r\n    }\r\n    else if (input.value == \"piws\") {\r\n      image.src = \"assets/img/logoPiws.jpg\"\r\n      label.innerHTML = input.value;\r\n    }\r\n    else {\r\n      image.src = \"assets/img/no-pictures.svg\"\r\n      label.innerHTML = \"nie znaleziono rysunku\";\r\n    }\r\n    input.value = \"\";\r\n  }\r\n}\r\nbuttonLoad.addEventListener('click',handleClickLoad);\r\n\r\nconsole.log(navigator.mediaDevices);\r\nconsole.log(navigator.mediaDevices.getUserMedia);\r\n/*window.addEventListener('DOMContentLoaded', function ()\r\n{\r\n  if (!('mediaDevices' in navigator &&\r\n      'getUserMedia' in navigator.mediaDevices &&\r\n      'Worker' in window)) {\r\n      alert('Sorry, your browser is not compatible with this app.');\r\n      return;\r\n  }\r\n\r\n  // html elements\r\n  //const snapshotCanvas = document.getElementById('snapshot');\r\n  //const snapshotContext = snapshotCanvas.getContext('2d');\r\n  const video = document.getElementById('camera');\r\n  //const overlay = document.getElementById('snapshotLimitOverlay');\r\n}\r\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcclxuXHJcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XHJcbiAgICB9LCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xyXG5cclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtLWpzJyk7XHJcbmNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlLS1qcycpO1xyXG5jb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZV9fbGFiZWwtLWpzJyk7XHJcbmNvbnN0IGJ1dHRvbkxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uTG9hZC0tanMnKTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNsaWNrTG9hZCgpe1xyXG4gIC8vY29uc29sZS5sb2coaW5wdXQudmFsdWUpXHJcbiAgLy9jb25zb2xlLmxvZyhpbWFnZS5zcmMpXHJcbiAgaWYgKGlucHV0LnZhbHVlIT1cIlwiKXtcclxuICAgIGlmIChpbnB1dC52YWx1ZSA9PSBcImxtXCIpIHtcclxuICAgICAgaW1hZ2Uuc3JjID0gXCJhc3NldHMvaW1nL2xvZ29MTS5qcGdcIlxyXG4gICAgICBsYWJlbC5pbm5lckhUTUwgPSBpbnB1dC52YWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlucHV0LnZhbHVlID09IFwicGl3c1wiKSB7XHJcbiAgICAgIGltYWdlLnNyYyA9IFwiYXNzZXRzL2ltZy9sb2dvUGl3cy5qcGdcIlxyXG4gICAgICBsYWJlbC5pbm5lckhUTUwgPSBpbnB1dC52YWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBpbWFnZS5zcmMgPSBcImFzc2V0cy9pbWcvbm8tcGljdHVyZXMuc3ZnXCJcclxuICAgICAgbGFiZWwuaW5uZXJIVE1MID0gXCJuaWUgem5hbGV6aW9ubyByeXN1bmt1XCI7XHJcbiAgICB9XHJcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgfVxyXG59XHJcbmJ1dHRvbkxvYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGhhbmRsZUNsaWNrTG9hZCk7XHJcblxyXG5jb25zb2xlLmxvZyhuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKTtcclxuY29uc29sZS5sb2cobmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEpO1xyXG4vKndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKClcclxue1xyXG4gIGlmICghKCdtZWRpYURldmljZXMnIGluIG5hdmlnYXRvciAmJlxyXG4gICAgICAnZ2V0VXNlck1lZGlhJyBpbiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmXHJcbiAgICAgICdXb3JrZXInIGluIHdpbmRvdykpIHtcclxuICAgICAgYWxlcnQoJ1NvcnJ5LCB5b3VyIGJyb3dzZXIgaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIGFwcC4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gaHRtbCBlbGVtZW50c1xyXG4gIC8vY29uc3Qgc25hcHNob3RDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc25hcHNob3QnKTtcclxuICAvL2NvbnN0IHNuYXBzaG90Q29udGV4dCA9IHNuYXBzaG90Q2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhJyk7XHJcbiAgLy9jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NuYXBzaG90TGltaXRPdmVybGF5Jyk7XHJcbn1cclxuKi8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);