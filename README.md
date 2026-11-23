# Lotus Neo — Laboratorio de Ingeniería de Software

> **Landing Page Oficial de Lotus Neo**  
> Desarrollado por **Henrik Anderson Oloroso** · Ciudad de Guatemala  
> Ecosistema de proyectos backend, bases de datos relacionales, automatización con n8n y entornos contenerizados con Docker.

---

## 🌐 Vista Previa y Dominio
- **Sitio Web:** [lotusneo.dev](https://lotusneo.dev)
- **Portafolio:** [anderson-oloroso.github.io/portfolio](https://anderson-oloroso.github.io/portfolio/)
- **Contacto Directo:** [anderson.oloroso@lotusneo.dev](mailto:anderson.oloroso@lotusneo.dev)

---

## 🚀 Arquitectura y Stack Tecnológico

La landing page fue diseñada siguiendo estándares modernos de desarrollo web, priorizando rendimiento (Core Web Vitals), accesibilidad, experiencia de usuario (UX/UI) y arquitectura limpia sin sobrecarga innecesaria:

- **HTML5 Semántico:** Estructura accesible con tags semánticos (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) y metadata Open Graph.
- **Bootstrap 5.3.3 (CDN con SRI):** Framework de utilidades responsivo servido mediante CDN con *Subresource Integrity* (`sha384-...`) y `crossorigin="anonymous"`, optimizando el tiempo de primer byte (TTFB) y First Contentful Paint (FCP).
- **CSS3 Personalizado (Design Tokens):** Sistema de temas claro/oscuro mediante variables CSS (`:root`, `[data-bs-theme="dark"]`, `[data-bs-theme="light"]`), animaciones sutiles y diseño adaptable.
- **JavaScript Modular (ES6+):**
  - `i18n.js`: Motor de internacionalización cliente (Español / Inglés) con persistencia en `localStorage`.
  - `theme.js`: Conmutador de tema claro/oscuro con detección de preferencias del sistema y persistencia local.
  - `main.js`: Lógica de navegación y eventos responsivos.
- **Formato WebP & SVG:** Recursos gráficos optimizados para máxima velocidad de transferencia.

---

## ⚡ Optimización de Rendimiento: Bootstrap CDN vs. Local

Durante la auditoría de rendimiento y optimización del repositorio se evaluó el uso de Bootstrap local (`vendor/`) frente a Bootstrap CDN:

| Criterio | Bootstrap Local (`vendor/`) | Bootstrap CDN (jsDelivr / Cloudflare) | Decisión |
| :--- | :--- | :--- | :--- |
| **Peso en Repositorio** | ~313.5 KB (71% del peso total) | **0 KB** en el repositorio | ✅ **CDN** reduce el repo de 439 KB a 126 KB (-71%). |
| **Entrega al Usuario** | Limitado al ancho de banda del hosting | **Edge Global Anycast** con compresión Brotli (~34 KB CSS / ~24 KB JS) | ✅ **CDN** acelera LCP y FCP. |
| **Seguridad** | Dependiente de archivos locales | Validado con hash criptográfico **SRI (Subresource Integrity)** | ✅ **Seguridad bancaria garantizada**. |
| **Mantenibilidad** | Actualizaciones manuales y duplicidad de código | Versionamiento explícito y desacoplado | ✅ Código limpio y sin dependencias vendor huérfanas. |

---

## 🌿 Flujo de Trabajo Gitflow

El repositorio sigue un modelo estricto de **Gitflow**:

```text
  main (Producción v1.0.0) ──────────────────────────────────────────●
                                                                    /
  dev (Integración continua) ──●─────────●─────────●─────────●─────●
                                \       / \       / \       /
  feature/bootstrap-cdn-opt      ●─────●   │     │   │     │
  feature/contact-update                   ●─────●   │     │
  feature/docs-and-config                            ●─────●
```

- **`main`**: Rama de producción protegida. Aloja el código estable y versiones listas para despliegue.
- **`dev`**: Rama principal de desarrollo e integración activa.
- **`feature/*`**: Ramas de características para desarrollo aislado y commits atómicos:
  - `feature/assets-branding`: Recursos visuales y emblemas.
  - `feature/ui-styling`: Estilos y variables de tema.
  - `feature/core-logic`: Controladores de internacionalización y tema.
  - `feature/bootstrap-cdn-optimization`: Migración de vendor local a CDN con SRI.
  - `feature/contact-update`: Actualización de canales de comunicación institucional.
  - `feature/docs-and-config`: Documentación técnica y configuración de versionado.

---

## 📁 Estructura del Proyecto

```text
lotus-neo/
├── .gitignore          # Reglas de exclusión de archivos
├── LICENSE             # Licencia MIT
├── README.md           # Documentación general y arquitectura
├── index.html          # Entrada principal de la landing page
├── css/
│   └── styles.css      # Tokens de diseño, tema y estilos personalizados
├── js/
│   ├── i18n.js         # Soporte multilenguaje (ES / EN)
│   ├── main.js         # Inicialización de eventos y menú responsive
│   └── theme.js        # Gestión de tema Dark/Light
└── img/
    ├── favicon.png     # Ícono de pestaña
    ├── flower-dark.webp
    ├── flower-light.webp
    ├── nav-dark.webp
    └── nav-light.webp
```

---

## 📬 Contacto y Soporte

Para propuestas de proyectos backend, diseño de bases de datos o integraciones de automatización:
- **Email:** [anderson.oloroso@lotusneo.dev](mailto:anderson.oloroso@lotusneo.dev)
- **LinkedIn:** [linkedin.com/in/Anderson-oloroso](https://www.linkedin.com/in/Anderson-oloroso)
- **GitHub:** [@Anderson-Oloroso](https://github.com/Anderson-Oloroso)

---

## 📄 Licencia

Distribuido bajo la Licencia **MIT**. Consulta `LICENSE` para más detalles.
