/* Modo día / noche: usa data-bs-theme de Bootstrap y guarda la preferencia. */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  try { localStorage.setItem('ln-theme', theme); } catch (e) {}
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-bs-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
}
