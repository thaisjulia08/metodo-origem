// Troque somente o valor abaixo quando o checkout da Kiwify estiver pronto.
const CHECKOUT_URL = '';
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
