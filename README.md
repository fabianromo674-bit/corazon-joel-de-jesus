# Sitio web — Voluntariado El Corazón de Joel de Jesús

Este es el sitio web de la asociación. Está hecho para que **ustedes lo puedan
mantener sin ayuda de nadie** y sin pagar un solo peso de hosting.

Esta guía está escrita para una persona que **no sabe programar**. Si algo aquí
no se entiende, es culpa de la guía, no suya: avísennos y lo simplificamos.

---

## 📋 Lo que hay que saber en 30 segundos

| Quiero… | Voy a… |
|---|---|
| Cambiar el correo o el teléfono | Editar **solo** `docs/assets/js/contenido.js` |
| Editar un programa (textos, lista, foto) | Editar `contenido.js` → sección `programas` |
| Subir un boletín nuevo | Poner el PDF en `docs/assets/boletines/` y editar `contenido.js` |
| Agregar una historia o infografía | Editar `contenido.js` |
| Cambiar el lema, las cifras, el equipo o las preguntas de donantes | Editar `contenido.js` |
| Cambiar un párrafo largo de una página | Abrir el `.html` de esa página y buscar `✏️ EDITABLE` |
| Cambiar una foto | Poner la imagen en `docs/assets/img/` |
| Publicar los cambios en internet | Subir los archivos a GitHub (ver más abajo) |

> 💡 **Truco de negritas:** en cualquier texto de `contenido.js` pueden
> escribir `**palabras importantes**` entre dobles asteriscos y saldrán
> en negritas en la página.

> **Regla de oro:** nunca borren archivos. Si algo sale mal, siempre se puede
> deshacer con `Ctrl + Z` antes de guardar.

---

## 🗂️ Cómo está organizado

```
CORAZON JOEL DE JESUS/
├── docs/                    ← 🌐 EL SITIO. Esto es lo que se publica.
│   ├── index.html                Página de Inicio
│   ├── quienes-somos.html        Quiénes somos
│   ├── que-hacemos.html          Qué hacemos
│   ├── transparencia.html        Transparencia
│   ├── historias.html            Historias de impacto
│   ├── derechos-ciudadanos.html  Derechos en Formato Ciudadano
│   ├── como-ayudar.html          Cómo ayudar
│   ├── contacto.html             Contacto
│   ├── 404.html                  Página de "no encontrado"
│   └── assets/
│       ├── js/contenido.js   ← 📝 AQUÍ SE EDITAN LOS DATOS
│       ├── js/sitio.js          (no tocar)
│       ├── css/estilo.css       (no tocar: colores y letras)
│       ├── img/                 Logos e imágenes
│       ├── boletines/        ← 📄 AQUÍ VAN LOS PDF DE BOLETINES
│       └── infografias/      ← 🖼️ AQUÍ VAN LAS INFOGRAFÍAS
│
├── previews/                Capturas de cada página, para revisar
├── README.md                Esta guía
└── CONTENIDO_PENDIENTE.md   Lista de lo que falta entregar
```

**Solo importa la carpeta `docs/`.** Todo lo demás es documentación.

---

## ✏️ 1. Cómo cambiar un texto

Los textos largos viven dentro de las páginas `.html`.

1. Abran la carpeta `docs/` y hagan **clic derecho** sobre la página que quieren
   cambiar (por ejemplo `index.html`) → **Abrir con** → **Bloc de notas**.
2. Busquen la marca `✏️ EDITABLE` (con `Ctrl + B` o `Ctrl + F` pueden buscarla).
   Debajo de esa marca está el texto que se puede cambiar.
3. Cambien **solo las palabras**, nunca los símbolos `<` y `>`.

**Ejemplo.** Esto está en el archivo:

```html
<!-- ✏️ EDITABLE -->
<h2>Cuatro caminos, un mismo destino</h2>
```

Si quieren que diga otra cosa, cambien **únicamente** lo que está en medio:

```html
<!-- ✏️ EDITABLE -->
<h2>Nuestros programas</h2>
```

✅ Correcto: cambiar las palabras.
❌ Incorrecto: borrar `<h2>` o `</h2>`.

4. Guarden con `Ctrl + S`.

> 💡 **Para ver cómo quedó antes de publicar:** hagan doble clic en el archivo
> `index.html`. Se abre en su navegador y se ve el sitio completo, solo en su
> computadora. Nadie más lo ve hasta que lo publiquen.

---

## 📝 2. Cómo cambiar el correo, el teléfono o el Facebook

Estos datos aparecen en **todas** las páginas. Por eso **no** se editan página
por página: se editan **una sola vez** en un archivo.

1. Abran `docs/assets/js/contenido.js` con el Bloc de notas.
2. Hasta arriba encontrarán esto:

```js
contacto: {
  correo: "corazondejoeldejesus.2002@gmail.com",
  telefono: "33 1670 9118",
  telefonoLink: "+523316709118",
  ...
}
```

3. Cambien **solo lo que está entre comillas**.

⚠️ **Ojo con el teléfono:** hay dos líneas. `telefono` es como se ve escrito y
`telefonoLink` es el que usa el celular para marcar (lleva `+52` y va sin
espacios). **Si cambia el número, cambien las dos.**

---

## 📄 3. Cómo subir un boletín nuevo (lo más importante)

Esto es lo que van a hacer cada tres meses. Son 3 pasos.

### Paso 1 — Guardar el PDF

Copien el PDF dentro de la carpeta `docs/assets/boletines/`.

Pónganle un nombre **sin espacios, sin acentos y sin eñes**:

- ✅ `boletin-2026-3T.pdf`
- ❌ `Boletín 3er trimestre (final).pdf`

### Paso 2 — Anunciarlo en `contenido.js`

Abran `docs/assets/js/contenido.js` y busquen la sección `boletines`.
Verán bloques que empiezan con `{` y terminan con `},` así:

```js
{
  etiqueta: "Boletín · 2º trimestre 2026",
  titulo: "Acciones y resultados del trimestre",
  resumen: "Talleres impartidos, intervenciones hospitalarias y donaciones entregadas.",
  archivo: null,
  peso: "",
  estado: "proximamente",
},
```

**Copien un bloque completo** (desde `{` hasta `},`) y **péguenlo arriba de los
demás** — el más nuevo va siempre primero. Luego cámbienlo:

```js
{
  etiqueta: "Boletín · 3er trimestre 2026",
  titulo: "Lo que hicimos de julio a septiembre",
  resumen: "Este trimestre acompañamos a 24 familias y dimos 6 talleres.",
  archivo: "boletin-2026-3T.pdf",     ← el nombre EXACTO del PDF
  peso: "PDF · 1.2 MB",
  estado: "publicado",                ← cambiar a "publicado"
},
```

### Paso 3 — Publicar

Suban los cambios a GitHub (ver la sección 6). En unos minutos el boletín ya se
puede descargar desde el sitio.

> **¿Y si el boletín todavía no está listo?** Déjenlo con `archivo: null` y
> `estado: "proximamente"`. La tarjeta se ve, pero sin botón de descarga.
> Es mejor decir «viene en camino» que no decir nada.

---

## 🖼️ 4. Cómo cambiar o poner una foto

### Dónde van los espacios de foto

En el sitio verán unos recuadros grises punteados que dicen
**«Espacio para fotografía»**. Ahí van sus fotos.

### 🔒 REGLA ABSOLUTA — LEER ANTES DE SUBIR CUALQUIER FOTO

> **Nunca, por ningún motivo, se publica la foto del rostro de una niña, un niño
> o un adolescente.** Ni con permiso. Ni de espaldas si se le puede reconocer.
> Ni aunque se vea bonita. Ni aunque un donante lo pida.
>
> **Sí se puede fotografiar:** manos, materiales, juguetes, espacios, el aula
> vacía, el equipo de voluntariado adulto (con su permiso).

### Cómo hacerlo

1. Guarden la foto en `docs/assets/img/`, con nombre sin espacios ni acentos
   (ejemplo: `taller-escuela-2026.jpg`).
2. En la página, busquen el bloque que dice `foto-pendiente` y reemplácenlo por:

```html
<img src="assets/img/taller-escuela-2026.jpg"
     alt="Materiales del taller de derechos sobre una mesa."
     loading="lazy" width="800" height="600">
```

3. El texto de `alt=` es **obligatorio**: es lo que escucha una persona ciega.
   Describan lo que se ve en una frase corta.

> 💡 **Que la foto no pese mucho.** Antes de subirla, redúzcanla a un máximo de
> 1600 píxeles de ancho. Se puede hacer gratis en <https://squoosh.app>
> (funciona en el navegador, no hay que instalar nada). Una foto de más de
> 500 KB hace lento el sitio en celulares.

---

## 🚀 5. Cómo publicar el sitio en internet (GRATIS)

Se usa **GitHub Pages**. Es gratuito y no caduca. Esto se hace **una sola vez**.

### La primera vez (configuración inicial)

1. Entren a <https://github.com> y creen una cuenta gratuita con el correo de la
   asociación.
2. Ya dentro, den clic en el botón verde **New** (crear repositorio nuevo).
3. En **Repository name** escriban: `corazondejoeldejesus`
4. Elijan **Public** (público). Debe ser público para que el sitio sea gratis.
5. Den clic en **Create repository**.
6. En la pantalla que sigue, den clic en **uploading an existing file**
   («subiendo un archivo existente»).
7. **Arrastren la carpeta `docs` completa** a esa ventana. Esperen a que
   terminen de subir todos los archivos (puede tardar unos minutos).
8. Abajo den clic en el botón verde **Commit changes**.
9. Arriba, entren a la pestaña **Settings** (Configuración) → en el menú de la
   izquierda busquen **Pages**.
10. En **Source** elijan **Deploy from a branch**.
11. En **Branch** elijan `main`, y a un lado, en la carpeta, elijan **`/docs`**.
12. Den clic en **Save**.
13. Esperen unos 2 minutos y recarguen esa página. Va a aparecer un recuadro
    verde con la dirección de su sitio:

    **https://<su-usuario>.github.io/corazondejoeldejesus/**

    ¡Eso es todo! Ese enlace ya se puede compartir.

### Cada vez que quieran cambiar algo

1. Entren a su repositorio en GitHub.
2. Naveguen hasta el archivo que quieren cambiar (por ejemplo
   `docs/assets/js/contenido.js`).
3. Den clic en el ícono del **lápiz** ✏️ (arriba a la derecha).
4. Hagan el cambio directamente ahí.
5. Bajen y den clic en **Commit changes**.
6. Esperen 1 o 2 minutos. El sitio se actualiza solo.

**Para subir un PDF nuevo:** entren a la carpeta `docs/assets/boletines/` en
GitHub → botón **Add file** → **Upload files** → arrastren el PDF →
**Commit changes**.

> ⚠️ **Después de publicar, hay que corregir una dirección.** Si su sitio quedó
> en una dirección distinta a `https://corazondejoeldejesus.github.io/`, hay que
> actualizarla en los archivos `docs/sitemap.xml` y en la línea `canonical` de
> cada página. Esto solo afecta a Google, no a que el sitio funcione. Si no
> saben hacerlo, pídannos apoyo: es un cambio de 10 minutos.

---

## ❓ 6. Si algo sale mal

### Aparece un aviso amarillo arriba del sitio

Dice: *«Hay un error en el archivo contenido.js»*.

Significa que al editar `contenido.js` se borró una coma o una comilla.
El sitio les avisa en vez de quedarse en blanco. **No cunda el pánico:**

1. Abran `contenido.js`.
2. Revisen lo último que cambiaron: ¿está la coma `,` al final de la línea?
   ¿están las dos comillas `"` completas?
3. Si no lo encuentran, en GitHub pueden ver el historial y regresar a la
   versión anterior (pestaña **History** del archivo).

### El sitio no se actualiza

Esperen 3 minutos y recarguen con `Ctrl + F5` (recarga forzada). GitHub tarda
un poco en publicar.

### Se borró algo por accidente

GitHub guarda **todas** las versiones anteriores. Nada se pierde de verdad.
Entren al archivo → pestaña **History** → elijan una versión anterior.

---

## 🎨 7. Notas de diseño (para quien nos suceda)

- **Colores y tipografías** están todos en `docs/assets/css/estilo.css`, en el
  bloque `:root` de hasta arriba. Son los oficiales del Manual de Identidad.
- **Contraste verificado:** los pares de color están anotados en el CSS con su
  medición WCAG. El botón principal usa **coral con texto azul marino** (4.88:1)
  porque coral con texto blanco solo llega a 3.23:1 y **no cumpliría** la norma
  de accesibilidad.
- **Tipografía de cuerpo:** la oficial es **Codec Pro**, que es de pago. El sitio
  usa **Jost** (gratis) como sustituto. Si algún día compran Codec Pro, basta
  agregarla al inicio de la lista `--fuente-cuerpo` en el CSS.
- **El logo aparece una sola vez por página**, como pide el manual: el logo
  completo va en la portada de Inicio y en el pie de las demás páginas; el
  corazón solo va en la barra de arriba y en el ícono de la pestaña.
- **La línea dorada de kintsugi** entre secciones es el elemento firma. Se dibuja
  sola con `sitio.js`; no hay que hacer nada.
- **Sin rastreadores, sin cookies, sin Google Analytics.** El sitio no recoge
  ningún dato de quien lo visita.

---

## 📞 Dudas

Cualquier cosa que no se entienda de esta guía es un error nuestro.
Escríbannos y lo corregimos.

**Regla de oro del proyecto:** todo lo que se construyó aquí lo tiene que poder
operar la asociación sin nosotros.
