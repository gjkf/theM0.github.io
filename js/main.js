let mobileMenu = document.getElementById("mobileMenu");
let mobileBtn = document.getElementById("mobileBtn");

mobileBtn.addEventListener("click", function() {
  this.classList.toggle("fa-bars");
  this.classList.toggle("fa-times");

  mobileMenu.classList.toggle("mobile");
  document.documentElement.classList.toggle("stop");
});