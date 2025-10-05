export async function loadComponent(selector, path) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const res = await fetch(path);
    const html = await res.text();
    el.innerHTML = html;
  } catch (err) {
    console.error(`Error cargando ${path}:`, err);
  }
}
