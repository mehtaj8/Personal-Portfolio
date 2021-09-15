
$(document).ready(function () {
  setTimeout(function () {
    $('body').addClass('loaded');
  }, 5000);
});

//Parallax

let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);
