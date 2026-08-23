// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

//ketika hamburger menu di klik
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar menghilangkan sidebar
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
