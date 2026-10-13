const HOLD_TIME = 3000;
const start = Date.now();

window.addEventListener('load', () => {
  const wait = Math.max(0, HOLD_TIME - (Date.now() - start));
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
    document.body.classList.add('loaded');
  }, wait);
});