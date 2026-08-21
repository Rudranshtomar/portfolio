document.addEventListener("DOMContentLoaded", function () {
  /* YEAR */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  /* MOBILE MENU */

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  }

  /* 3D INTRO */
  const loader = document.getElementById("intro-loader");

  if (!loader) {
    return;
  }

  // Wait for animation to finish
  setTimeout(function () {
    loader.classList.add("loader-hide");
  }, 2800);

  // Completely remove loader after fade-out
  setTimeout(function () {
    loader.style.display = "none";
  }, 3800);

  /* CLOSE MOBILE MENU */

  if (nav) {
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("show");
      });
    });
  }

  /* 3D HERO CARD */

  const heroCard = document.querySelector(".hero-card");

  if (heroCard) {
    heroCard.addEventListener("mousemove", function (e) {
      if (window.innerWidth < 700) return;

      const rect = heroCard.getBoundingClientRect();

      const x = e.clientX - rect.left;

      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;

      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;

      const rotateY = ((x - centerX) / centerX) * 8;

      heroCard.style.transform = `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;
    });

    heroCard.addEventListener("mouseleave", function () {
      heroCard.style.transform = "";
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  /* =========================
       MOBILE MENU
    ========================= */

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }

  /* =========================
       CLOSE MENU AFTER CLICK
    ========================= */

  if (nav) {
    const links = nav.querySelectorAll("a");

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("active");
      });
    });
  }

  /* =========================
       FOOTER YEAR
    ========================= */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
