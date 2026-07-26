// Toggle do Menu Mobile
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Efeito de rolagem suave nos links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
      // Fecha menu mobile após o clique
      navLinks.classList.remove('active');
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // 1. Remove a classe 'active' de todos os links
      navLinks.forEach(item => item.classList.remove('active'));
      
      // 2. Adiciona a classe 'active' no link que foi clicado
      this.classList.add('active');
    });
  });
});
