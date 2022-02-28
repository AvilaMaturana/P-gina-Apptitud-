$(document).ready(function () {

  window.addEventListener('resize', function(){
    var nav = document.querySelector('nav');
    nav.classList.toggle('navbar-light' , window.innerWidth<1000);
});  

window.addEventListener('resize', function(){
  var nav = document.getElementById('#navbarDos');
  nav.classList.toggle('navbar-light' , window.innerWidth<1000);
}); 

})





var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


