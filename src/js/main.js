// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// The panel js for assignments. Not technically needed on all pages,
// But it seemed nice to get it out of the template....
window.addEventListener('load', function () {
    $("#flip").on("click", function(){
      $("#panel").slideToggle("slow");
    });
  });       