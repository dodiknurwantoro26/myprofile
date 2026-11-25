// typing animation
var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Designer",
    "Web Developer",
    "Graphic Designer",
    "Youtuber",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// SIDEBAR ACTIVE MENU ON CLICK & SCROLL
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".aside .nav a");
  const sections = document.querySelectorAll(".main-content section[id]");

  //mengubah menu active
  function setActiveMenu(id) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + id) {
        link.classList.add("active");
      }
    });
  }

  //klik menu sidebar
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const targetId = this.getAttribute("href").substring(1);
      setActiveMenu(targetId);
    });
  });

  //Deteksi section ketika scroll
  function updateActiveMenu() {
    const scrollPosition = window.scrollY + 150;
    let currentSection = sections[0];

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      if (scrollPosition >= sectionTop) {
        currentSection = section;
      }
    });

    if (currentSection) {
      setActiveMenu(currentSection.id);
    }
  }

  // Event scroll
  window.addEventListener("scroll", updateActiveMenu);

  // Deteksi menu saat halaman dibuka
  if (window.location.hash) {
    const currentId = window.location.hash.substring(1);

    if (document.getElementById(currentId)) {
      setActiveMenu(currentId);
    } else {
      updateActiveMenu();
    }
  } else {
    updateActiveMenu();
  }
});
