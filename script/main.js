// Counter

function animateCounter(element, target, duration, label) {
    let startTime = null;
    const startValue = 0;
  
    function updateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentValue = Math.min(startValue + (progress / duration) * target, target);
  
      element.textContent = Math.floor(currentValue) + label;
  
      if (progress < duration) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + label; 
      }
    }
  
    requestAnimationFrame(updateCounter);
  }
  
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.target);
          const label = entry.target.dataset.label || '';
          const duration = 2000; // 
          animateCounter(entry.target, target, duration, label);
          observer.unobserve(entry.target); 
        }
      });
    },
    { threshold: 0.5 } 
  );
  
  counters.forEach(counter => observer.observe(counter));
  

// ----------------------------------------------------------------------------------------------------


  // Swiper Slider

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoHeight: false,
    centeredSlides:true,
    slidesPerView: 1,
    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView:2,
          spaceBetween: 40,
      },
      992: {
        slidesPerView: 3,
          spaceBetween: 40,
      }
    },
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  
    // And if we need scrollbar
    /*scrollbar: {
      el: '.swiper-scrollbar',
    },*/
  });
  





  // Navbar Color

  document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const hero = document.getElementById("hero-section-banner");
  
    const heroHeight = hero.offsetHeight;
  
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition <= heroHeight) {
        // If at the top or in hero section
        navbar.classList.add("bg-blur");
        navbar.classList.remove("bg-primary");
      } else {
        // If scrolled past the hero section
        navbar.classList.add("bg-primary");
        navbar.classList.remove("bg-blur");
      }
    });
  });
  