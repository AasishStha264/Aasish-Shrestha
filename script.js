// Initialize AOS
AOS.init({ duration: 1000 });

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  const icon = document.querySelector('.theme-toggle i');
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');
}

// Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  this.reset();
});

// Smooth Scrolling
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Update active link on scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.pageYOffset >= sectionTop - 60 && window.pageYOffset < sectionTop + sectionHeight - 60) {
        currentSection = section.getAttribute('id');
      }
    });
  
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });
