let hamburger = document.querySelector(".hamburger-menu-link");
let hamburgerMenu = document.getElementById('hamburger-menu')

hamburger.addEventListener("click", function() {
	if (hamburger.classList.contains("hamburger_active")) {
  	hamburger.classList.remove("hamburger_active");
  } else {
  	hamburger.classList.add("hamburger_active");
  }
  if (hamburgerMenu.classList.contains("hamburger-menu_active")) {
  	hamburgerMenu.classList.remove("hamburger-menu_active");
  } else {
  	hamburgerMenu.classList.add("hamburger-menu_active");
  }
});
