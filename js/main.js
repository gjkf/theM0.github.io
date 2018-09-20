let mobileMenu = document.getElementById("mobileMenu");
let mobileBtn = document.getElementById("mobileBtn");
let navLinks = document.getElementsByClassName("header__nav")[0].children;
let bigBtn = document.getElementById("bigBtn");
let about = document.getElementById("about");

function animateMobileMenu() {
  this.classList.toggle("fa-bars");
  this.classList.toggle("fa-times");

  mobileMenu.classList.toggle("mobile");
  document.documentElement.classList.toggle("stop");
}

mobileBtn.addEventListener("click", animateMobileMenu);

Array.from(navLinks).forEach(function(link) {
  link.addEventListener("click", function() {
    const to = this.dataset.to;
    const elem = document.getElementById(to);

    elem.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    animateMobileMenu.apply(mobileBtn);
  });
});

bigBtn.addEventListener("click", () => {
  about.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});