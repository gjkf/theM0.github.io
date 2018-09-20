let mobileMenu = document.getElementById("mobileMenu");
let mobileBtn = document.getElementById("mobileBtn");
let navLinks = document.getElementsByClassName("header__nav")[0].children;
let bigBtn = document.getElementById("bigBtn");
let about = document.getElementById("about");

mobileBtn.addEventListener("click", function() {
  this.classList.toggle("fa-bars");
  this.classList.toggle("fa-times");

  mobileMenu.classList.toggle("mobile");
  document.documentElement.classList.toggle("stop");
});

Array.from(navLinks).forEach(function(link) {
  link.addEventListener("click", function() {
    const to = this.dataset.to;
    const elem = document.getElementById(to);

    elem.scrollIntoView({
      behavior: "smooth"
    });
  });
});

bigBtn.addEventListener("click", () => {
  about.scrollIntoView({
    behavior: "smooth"
  });
});