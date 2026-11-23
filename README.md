# Lotus Neo — Laboratorio de Ingeniería de Software

Landing page oficial de Lotus Neo, espacio de ingeniería de software enfocado en desarrollo backend, diseño de bases de datos relacionales, automatizaciones de procesos e infraestructura contenerizada.

---

## Objetivo

El objetivo principal de este proyecto es servir como carta de presentación institucional y punto de acceso centralizado al ecosistema de proyectos de Lotus Neo. Proporciona una interfaz web rápida, accesible y responsiva para:

- Exponer las soluciones técnicas desarrolladas en APIs REST, bases de datos y flujos de automatización.
- Facilitar el acceso directo a los repositorios de código y demostraciones de cada proyecto.
- Ofrecer una experiencia de usuario moderna con soporte bilingüe (español e inglés) y adaptación visual de tema claro y oscuro.
- Establecer un canal formal de contacto técnico y colaboraciones profesionales.

---

## Tecnología

El desarrollo de la landing page se diseñó con un enfoque ligero, optimizado y sin sobrecarga de dependencias:

- **HTML5 Semántico:** Estructura modular, jerarquía clara y metadatos para indexación y accesibilidad.
- **Bootstrap 5.3.3 (CDN con SRI):** Framework CSS responsivo integrado mediante red de distribución de contenidos con Subresource Integrity (SRI) y modo de origen cruzado para máxima seguridad y rendimiento de carga.
- **CSS3 y Tokens de Diseño:** Variables CSS nativas para la gestión dinámica de temas (Dark / Light), tipografías Montserrat y Orbitron, y estilos personalizados.
- **JavaScript Modular (ES6+):**
  - Motor de internacionalización cliente (`i18n.js`) para alternar entre español e inglés con persistencia local.
  - Conmutador de tema (`theme.js`) compatible con preferencias del sistema y almacenamiento en `localStorage`.
  - Controlador de eventos e interacción móvil (`main.js`).
- **Gráficos WebP y SVG:** Formatos de imagen comprimidos para reducir tiempos de transferencia.

---

## Creador

- **Nombre:** Henrik Anderson Oloroso
- **Rol:** Técnico en Desarrollo de Software (Especializado en Backend, Bases de Datos, Docker y n8n)
- **Ubicación:** Ciudad de Guatemala
- **Contacto Institucional:** [anderson.oloroso@lotusneo.dev](mailto:anderson.oloroso@lotusneo.dev)
- **GitHub:** [@Anderson-Oloroso](https://github.com/Anderson-Oloroso)
- **LinkedIn:** [Henrik Anderson Oloroso](https://www.linkedin.com/in/Anderson-oloroso)

---

## Dónde ver

El proyecto y sus demostraciones se encuentran disponibles en los siguientes enlaces:

- **Sitio Web Oficial:** [lotusneo.dev](https://lotusneo.dev)
- **Portafolio:** [anderson-oloroso.github.io/portfolio](https://anderson-oloroso.github.io/portfolio/)
- **Repositorio en GitHub:** [github.com/Anderson-Oloroso/lotusneo](https://github.com/Anderson-Oloroso/lotusneo)

---

## Estructura del Proyecto

```text
lotus-neo/
├── .gitignore
├── LICENSE
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── i18n.js
│   ├── main.js
│   └── theme.js
└── img/
    ├── favicon.png
    ├── flower-dark.webp
    ├── flower-light.webp
    ├── nav-dark.webp
    └── nav-light.webp
```

---

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más información.
