# 🏗️ Arquitectura del proyecto

Guía técnica breve para quien tome este proyecto (pensada para un estudiante
con conocimientos básicos de web). Para editar contenido sin saber programar,
mejor lean el `README.md`.

---

## El plano general

Es un **sitio 100% estático**: HTML + CSS + JS vanilla, sin frameworks, sin
build, sin servidor. Se publica gratis en GitHub Pages desde la carpeta `docs/`.

```
docs/                       ← lo que se publica (GitHub Pages apunta aquí)
├── *.html                  ← 8 páginas + 404 (estructura y prosa editorial)
├── assets/css/estilo.css   ← todo el diseño (variables del manual en :root)
├── assets/js/contenido.js  ← LOS DATOS (lo único que edita la asociación)
├── assets/js/sitio.js      ← EL MOTOR (renderiza datos → HTML, no se toca)
├── assets/img/             ← logos e imágenes
├── assets/boletines/       ← PDFs de transparencia
└── assets/infografias/     ← piezas de la campaña de derechos
```

## La decisión central: contenido híbrido

**Analogía:** la estructura va colada en obra; el mobiliario va suelto.

| Tipo de contenido | Dónde vive | Por qué |
|---|---|---|
| Datos que cambian seguido y son repetitivos (programas, boletines, historias, infografías, equipo, preguntas, cifras, lema, contacto) | `contenido.js` | Se editan sin tocar HTML; una entrada nueva genera su tarjeta sola |
| Prosa editorial (historia, misión, dimensiones, textos de portada) | Los `.html`, marcada con `<!-- ✏️ EDITABLE -->` | Mejor SEO (el texto está en el HTML), y un error de dedo solo afecta una página, no el sitio entero |

**Por qué objeto JS y no JSON ni markdown:** `contenido.js` se carga con
`<script>`, así que funciona hasta abriendo el archivo con doble clic (JSON
con `fetch()` falla sin servidor por CORS); además admite comentarios en
español, que son la mitad del valor del archivo. Markdown habría requerido un
compilador — una pieza más que la asociación no puede mantener.

## Cómo fluye el renderizado

1. Cada página carga `contenido.js` (define el objeto global `CONTENIDO`) y
   luego `sitio.js`.
2. En el HTML hay contenedores vacíos con atributos-etiqueta:
   `[data-programas]`, `[data-boletines]`, `[data-historias]`,
   `[data-infografias]`, `[data-equipo]`, `[data-preguntas]`,
   `[data-programas-detalle]`, `[data-lema]`, `[data-cifras]`,
   y `[data-correo] / [data-telefono] / [data-facebook]` para contacto.
3. `sitio.js` recorre cada lista con un bucle y fabrica las tarjetas con
   `createElement` + `textContent` (nunca HTML crudo del usuario).
4. Las negritas `**así**` pasan por `conNegritas()`: primero se escapan
   `& < >` y después se convierte `**x**` en `<strong>x</strong>`.
   Orden importante: escapar → convertir. Así un texto pegado con HTML
   no puede romper ni inyectar nada.

**Caso especial — `pintarProgramasDetalle()`:** genera las secciones grandes
de "Qué hacemos" (programas 1–3) alternando el lado de la foto y el color de
fondo, e inserta las costuras de kintsugi entre ellas. Por eso en el arranque
se llama **antes** que `pintarKintsugi()` (que dibuja los SVG de todas las
costuras que encuentre). El programa 4 (donaciones) tiene su sección especial
escrita en el HTML porque su layout y contenido son únicos.

## Red de seguridad

Si `contenido.js` tiene un error de sintaxis, `CONTENIDO` no se define;
`sitio.js` lo detecta y muestra un aviso amarillo (`role="alert"`) arriba del
sitio en vez de dejar secciones vacías en silencio. Cada contenedor dinámico
tiene además un `<noscript>` con lo esencial.

## Reglas que NO se negocian

- **Identidad:** colores y tipografías del Manual (variables en `:root` del
  CSS, contrastes WCAG anotados junto a cada par). El botón coral lleva texto
  azul marino (4.88:1) porque con blanco no cumple AA (3.23:1).
- **Logo:** una sola vez por página; sobre azul marino siempre dentro de
  tarjeta blanca; prohibido deformarlo o recolorearlo.
- **Protección de infancia:** cero rostros de menores, cero nombres reales.
  Las historias llevan bandera `verificada`; los espacios de foto llevan la
  advertencia en el propio placeholder.
- **Accesibilidad:** navegación completa por teclado, foco visible,
  `prefers-reduced-motion` respetado, landmarks, alt text.
- **Cero dependencias:** sin npm, sin CDN de librerías, sin trackers.

## Publicación

GitHub Pages · rama `main` · carpeta `/docs`. Pasos no técnicos en el
`README.md`. Pendiente al publicar: actualizar `sitemap.xml` y las etiquetas
`canonical`/`og:url` con la URL real que asigne GitHub.
