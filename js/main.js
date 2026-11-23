document.addEventListener('DOMContentLoaded', () => {
  // Idioma guardado (por defecto español)
  let lang = 'es';
  try { lang = localStorage.getItem('ln-lang') || 'es'; } catch (e) {}
  if (lang !== 'es') applyLanguage(lang);

  document.getElementById('langBtn').addEventListener('click', () => {
    applyLanguage(document.documentElement.lang === 'es' ? 'en' : 'es');
  });

  document.getElementById('themeBtn').addEventListener('click', toggleTheme);

  // Cierra el menú móvil al elegir un enlace
  const menu = document.getElementById('menu');
  document.querySelectorAll('#menu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    });
  });
});
