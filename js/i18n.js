/* Diccionarios ES / EN. Las claves coinciden con los atributos data-i18n del HTML. */
const I18N = {
  es: {
    nav_home: "Inicio",
    nav_philosophy: "Filosofía",
    nav_projects: "Proyectos",
    nav_creator: "Creador",
    nav_contact: "Contacto",
    hero_badge: "LABORATORIO DE SOFTWARE POR HENRIK ANDERSON OLOROSO",
    hero_title: "Transformando la complejidad en código limpio y escalable.",
    hero_sub: "Lotus Neo reúne mis proyectos y soluciones en APIs REST con Node.js y Express, bases de datos relacionales en MySQL y PostgreSQL, automatizaciones con n8n y entornos contenerizados con Docker.",
    hero_cta1: "Explorar Proyectos",
    hero_cta2: "Ver Repositorios",
    phi_title: "El significado de Lotus Neo",
    phi_lead: "Dos palabras, una forma concreta de construir software.",
    phi_lotus_tag: "Del lodo a la luz",
    phi_lotus: "Estructuro lógica, esquemas relacionales normalizados y procedimientos almacenados claros para que cada aplicación sea mantenible y confiable.",
    phi_neo_tag: "Automatización y proyección",
    phi_neo: "Integro flujos automatizados en n8n, Docker y buenas prácticas de ingeniería con proyección hacia sistemas escalables y ciberseguridad.",
    pro_title: "Ecosistema de proyectos",
    pro_lead: "Repositorios y aplicaciones desarrolladas en el ecosistema de proyectos.",
    pro_minerva_tag: "Node.js · Express · MySQL · Docker",
    pro_minerva: "Gestor de libros para biblioteca con API, interfaz web y entorno contenerizado para administrar catálogo y préstamos.",
    pro_hydra_tag: "Node.js · JavaScript · MySQL",
    pro_hydra: "Sistema interactivo de consola para gestionar clientes, planes de entrenamiento, membresías, seguimiento físico, nutrición e ingresos/egresos.",
    pro_countries_tag: "Node.js · Express · Docker",
    pro_countries: "API REST de países con operaciones CRUD, validación de datos y control de límite de solicitudes, probada con Postman e Insomnia.",
    pro_techzone_tag: "PostgreSQL · PL/pgSQL",
    pro_techzone: "Modelo de base de datos relacional para tienda tecnológica con tablas, inserción de datos, procedimientos almacenados y consultas.",
    pro_tutorbot_tag: "n8n · Telegram Bot API · Google Sheets",
    pro_tutorbot: "Automatización en Telegram para gestionar solicitudes de tutorías y conectar estudiantes con tutores según disponibilidad.",
    pro_inv_tag: "Python · Consola",
    pro_inv: "Aplicación de consola en Python para agregar, listar, actualizar y eliminar productos, y calcular el valor total del inventario.",
    pro_code: "GitHub →",
    cr_badge: "CREADOR · CIUDAD DE GUATEMALA",
    cr_role: "Técnico en desarrollo de Software · APIs REST, Bases de Datos, Docker y n8n",
    cr_bio: "Enfocado en APIs REST con Node.js y Express, modelado relacional con PostgreSQL y MySQL, contenerización con Docker, automatización con n8n y Prompt Engineering, con proyección hacia software escalable y ciberseguridad.",
    cr_portfolio: "Ver Portafolio",
    stk_title: "Stack & Herramientas",
    ct_title: "¿Construimos algo sólido y eficiente?",
    ct_lead: "Escríbeme directamente para proyectos backend, automatización de flujos o colaboraciones técnicas.",
    ct_cta: "Contactar a Henrik Anderson Oloroso",
    footer_rights: "© 2026 Lotus Neo · Henrik Anderson Oloroso.",
    footer_portfolio: "Portafolio"
  },
  en: {
    nav_home: "Home",
    nav_philosophy: "Philosophy",
    nav_projects: "Projects",
    nav_creator: "Creator",
    nav_contact: "Contact",
    hero_badge: "SOFTWARE LAB BY HENRIK ANDERSON OLOROSO",
    hero_title: "Turning complexity into clean, scalable code.",
    hero_sub: "Lotus Neo brings together my projects and solutions across REST APIs with Node.js and Express, relational databases in MySQL and PostgreSQL, workflow automation with n8n, and Dockerized environments.",
    hero_cta1: "Explore Projects",
    hero_cta2: "View Repositories",
    phi_title: "The meaning of Lotus Neo",
    phi_lead: "Two words, one concrete way of building software.",
    phi_lotus_tag: "From mud to light",
    phi_lotus: "I structure logic, normalized relational schemas, and clear stored procedures so every application stays maintainable and reliable.",
    phi_neo_tag: "Automation & growth",
    phi_neo: "I integrate automated workflows in n8n, Docker, and engineering best practices with a focus on scalable software and cybersecurity.",
    pro_title: "Project ecosystem",
    pro_lead: "Repositories and applications built across the project ecosystem.",
    pro_minerva_tag: "Node.js · Express · MySQL · Docker",
    pro_minerva: "Library book manager with an API, web interface, and containerized setup to manage catalogs and loans.",
    pro_hydra_tag: "Node.js · JavaScript · MySQL",
    pro_hydra: "Interactive CLI system to manage clients, training plans, memberships, physical tracking, nutrition, and income/expenses.",
    pro_countries_tag: "Node.js · Express · Docker",
    pro_countries: "Countries REST API featuring CRUD operations, data validation, and rate limiting, tested with Postman and Insomnia.",
    pro_techzone_tag: "PostgreSQL · PL/pgSQL",
    pro_techzone: "Relational database model for a tech store with tables, seed data, stored procedures, and queries.",
    pro_tutorbot_tag: "n8n · Telegram Bot API · Google Sheets",
    pro_tutorbot: "Telegram automation to handle tutoring requests and match students with tutors based on availability.",
    pro_inv_tag: "Python · CLI",
    pro_inv: "Python console application to add, list, update, and delete products, and calculate total inventory value.",
    pro_code: "GitHub →",
    cr_badge: "CREATOR · GUATEMALA CITY",
    cr_role: "Software Development Technician · REST APIs, Databases, Docker & n8n",
    cr_bio: "Focused on REST APIs with Node.js and Express, relational modeling with PostgreSQL and MySQL, containerization with Docker, automation with n8n, and Prompt Engineering, aiming toward scalable software and cybersecurity.",
    cr_portfolio: "View Portfolio",
    stk_title: "Stack & Tools",
    ct_title: "Shall we build something solid and efficient?",
    ct_lead: "Reach out directly for backend projects, workflow automation, or technical collaborations.",
    ct_cta: "Contact Henrik Anderson Oloroso",
    footer_rights: "© 2026 Lotus Neo · Henrik Anderson Oloroso.",
    footer_portfolio: "Portfolio"
  }
};

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.es;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = dict[el.dataset.i18n];
    if (text) el.textContent = text;
  });
  const btn = document.getElementById('langBtn');
  if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';
  try { localStorage.setItem('ln-lang', lang); } catch (e) {}
}