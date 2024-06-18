// JavaScript for interactive elements

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const scroll = new SmoothScroll('nav a[href*="#"]', {
        speed: 800,
        speedAsDuration: true
    });

    // Initialize AOS (Animate on Scroll)
    AOS.init();

    // Sticky navigation bar
    let lastScrollTop = 0;
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Downscroll
            nav.style.top = '-80px'; // Adjust the value as needed
        } else {
            // Upscroll
            nav.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });

    
    
});

// Function to toggle mobile menu
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = document.getElementById('mobile-menu-icon');
    navMenu.classList.toggle('active');
    menuIcon.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
  }
  document.querySelectorAll('.nav-menu a').forEach(menuItem => {
    menuItem.addEventListener('click', () => {
      toggleMenu();
    });
  });
