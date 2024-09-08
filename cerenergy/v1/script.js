// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Animate Hero Section Text
anime({
  targets: '.hero-title',
  opacity: [0, 1],
  translateY: [-50, 0],
  easing: 'easeOutQuad',
  duration: 1500
});

anime({
  targets: '.hero-subtitle',
  opacity: [0, 1],
  translateY: [-30, 0],
  delay: 500,
  easing: 'easeOutQuad',
  duration: 1500
});

// Animate Navbar Links
anime({
  targets: '.nav-links li',
  opacity: [0, 1],
  translateY: [-20, 0],
  delay: anime.stagger(200), // Stagger the animation of the links
  easing: 'easeOutQuad',
  duration: 1000
});

// Animate Project Images
anime({
  targets: '.project-img',
  opacity: [0, 1],
  scale: [0.8, 1],
  delay: anime.stagger(300), // Adds delay between each image animation
  easing: 'easeOutQuad',
  duration: 1500
});
