// Troque somente o valor abaixo quando o checkout da Kiwify estiver pronto.
const CHECKOUT_URL = 'https://pay.kiwify.com.br/cQfafzk';
const links = document.querySelectorAll('.checkout-link');
const notice = document.createElement('div');
notice.className = 'checkoutNotice';
notice.textContent = 'O link de compra será ativado assim que o checkout da Kiwify estiver finalizado.';
document.body.appendChild(notice);
links.forEach(link => {
  if (CHECKOUT_URL) link.href = CHECKOUT_URL;
  link.addEventListener('click', event => {
    if (!CHECKOUT_URL) {
      event.preventDefault();
      notice.classList.add('show');
      window.setTimeout(() => notice.classList.remove('show'), 3200);
    }
  });
});
// Animação das seções ao aparecer na tela
const revealElements = document.querySelectorAll("section");

revealElements.forEach(section => {
  section.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, {
  threshold: 0.15
});
// Animação das seções ao aparecer na tela
const revealElements = document.querySelectorAll("section");

revealElements.forEach(section => {
  section.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(section => observer.observe(section));