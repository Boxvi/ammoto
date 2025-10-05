export function initNavbar() {
  const btn = document.querySelector('#menu-btn');
  const menu = document.querySelector('#menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
}
