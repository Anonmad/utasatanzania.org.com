// Hero slideshow
    const hero = document.getElementById("hero");
    const images = [
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
      "img/mbili.jpg",
      "img/tatu.jpg"
    ];

    let currentIndex = 0;
    hero.style.backgroundImage = `url(${images[currentIndex]})`;

    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      hero.style.backgroundImage = `url(${images[currentIndex]})`;
    }, 5000);

    // Mobile menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navbarMobile = document.getElementById("navbar-mobile");

    menuToggle.addEventListener("click", () => {
      navbarMobile.classList.toggle("open");
      if (navbarMobile.classList.contains("open")) {
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    });

    // Mobile submenu toggle
    document.querySelectorAll(".submenu-toggle").forEach(toggle => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const parent = toggle.parentElement;
        parent.classList.toggle("open");
      });
    });