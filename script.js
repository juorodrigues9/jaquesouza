// Ticker
const words = [
  'Alimentação Saudável',
  'Saúde e Bem-Estar',
  'Nutrição Funcional',
  'Emagrecimento',
  'Hidratação',
  'Qualidade de Vida',
  'Equilíbrio Nutricional',
  'Bio Check — Araxá/MG',
  'Treinamento de Força',
  'Acompanhamento MFit',
];
const tt = document.getElementById('tt');
const tickHtml = words.map(w =>
  `<span class="tick-item">${w}<span class="tick-dot"></span></span>`
).join('');
tt.innerHTML = tickHtml + tickHtml;

// Nav: transparente sobre hero, sólido ao rolar
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Nav toggle + overlay
const navToggle = document.querySelector('.nav-toggle');
const navOverlay = document.getElementById('navOverlay');
const navClose = document.getElementById('navClose');

function openMenu() {
  navToggle.classList.add('open');
  navOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  navToggle.classList.remove('open');
  navOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

navToggle.addEventListener('click', () => {
  navOverlay.classList.contains('open') ? closeMenu() : openMenu();
});
navClose.addEventListener('click', closeMenu);
navOverlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// Animações de entrada com IntersectionObserver
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('v');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });
document.querySelectorAll('.fi').forEach(el => io.observe(el));

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
