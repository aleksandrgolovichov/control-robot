const burger = document.getElementById('burger');
const nav = document.getElementById('navMenu');
const overlay = document.getElementById('menuOverlay');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('active');
});

