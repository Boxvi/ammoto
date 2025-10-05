import { loadComponent } from './utils.js';

const routes = {
  home: './src/html/pages/home.html',
  motos: './src/html/pages/motos.html',
  personas: './src/html/pages/personas.html',
};

export function initRouter() {
  const defaultRoute = 'home';
  loadPage(defaultRoute);

  document.querySelectorAll('button[data-route]').forEach(btn => {
    btn.addEventListener('click', () => {
      const route = btn.dataset.route;
      loadPage(route);
      updateActiveButton(route);
    });
  });
}

async function loadPage(route) {
  const path = routes[route];
  if (!path) return;
  await loadComponent('#app', path);

   const titleEl = document.querySelector('#header-title');
      if (titleEl) titleEl.textContent = getTitle(route);


  // Ejecutar JS específico de la página si existe
  import(`./pages/${route}.js`).then(module => {
    if (module.initPage) module.initPage();
  }).catch(() => {});
}

function getTitle(route) {
  const titles = {
    home: 'Ingrese el Sticker',
    motos: 'Motos ingresadas',
    personas: 'Personas ingresadas',
  };
  return titles[route] || 'AMMOTO';
}


function updateActiveButton(route) {
  document.querySelectorAll('button[data-route]')  .forEach(btn => {
    if (btn.dataset.route === route) {
      btn.classList.remove('text-slate-500', 'dark:text-slate-400');
      btn.classList.add('text-primary');
    } else {
      btn.classList.remove('text-primary');
      btn.classList.add('text-slate-500', 'dark:text-slate-400');
    }
  });
}
