document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('div a');
  
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', scrollToSection);
    }
  
    function scrollToSection(event) {
      event.preventDefault();
  
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
});

function toggleMenu() {
  var menuContent = document.querySelector(".menu-content");
  var menuToggle = document.getElementById("menu-toggle");

  menuContent.classList.toggle("show");
  menuToggle.classList.toggle("close");
}




