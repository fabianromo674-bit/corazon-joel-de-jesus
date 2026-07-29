# Sitio web — Voluntariado El Corazón de Joel de Jesús

**El sitio ya está publicado y funcionando aquí:**

### 👉 https://fabianromo674-bit.github.io/corazon-joel-de-jesus/

Esta guía está escrita para una persona que **no sabe programar**. Si algo no se
entiende, es culpa de la guía y no suya: avísennos y la corregimos.

> **Regla de oro del proyecto:** todo lo que se construyó aquí lo tiene que poder
> operar la asociación sin ayuda de nadie.

---

## 🔒 LO PRIMERO, Y LO MÁS IMPORTANTE

> ### Nunca se publica la foto del rostro de una niña, un niño o un adolescente.
>
> **Ni con permiso firmado. Ni de espaldas si se le puede reconocer. Ni aunque
> la foto sea bonita. Ni aunque un donante lo pida.**
>
> **Sí se puede fotografiar:** manos, materiales, juguetes, despensas, el aula
> vacía, personas adultas (con su permiso), o niñas y niños **de espaldas**
> cuando no haya forma de identificarles.
>
> Tampoco se publican nombres reales, escuelas, domicilios ni diagnósticos.

Esta regla es el corazón del proyecto. El sitio se lo promete a las familias en
el pie de todas las páginas: si se rompe, se rompe la confianza que sostiene
todo lo demás.

---

## 📋 Lo que necesitan saber en 30 segundos

| Quiero… | Voy a… |
|---|---|
| Cambiar el correo, el teléfono o el Facebook | `docs/assets/js/contenido.js` → `contacto` |
| Cambiar los números de la portada | `contenido.js` → `cifras` |
| Editar uno de los 4 programas | `contenido.js` → `programas` |
| **Subir un boletín nuevo** | Poner el archivo en `docs/assets/boletines/` y editar `contenido.js` → `boletines` |
| **Subir una infografía nueva** | Poner la imagen en `docs/assets/infografias/` y editar `contenido.js` → `infografias` |
| Agregar una foto a la galería del inicio | Poner la foto en `docs/assets/img/fotos/` y editar `contenido.js` → `galeriaFotos` |
| Agregar o cambiar una historia | `contenido.js` → `historias` |
| Cambiar los roles del equipo | `contenido.js` → `equipo` |
| Cambiar las preguntas de donantes | `contenido.js` → `preguntas` |
| Cambiar un párrafo largo de una página | Abrir el `.html` de esa página y buscar `✏️ EDITABLE` |
| **Que me lleguen los mensajes del formulario** | ⚠️ Ver la **sección 6** — hay que activarlo una sola vez |
| **Publicar los cambios en internet** | Ver la sección 7 de esta guía |

**Casi todo se edita en un solo archivo:** `docs/assets/js/contenido.js`

---

## 🗂️ 1. Cómo está organizado

```
CORAZON JOEL DE JESUS/
├── docs/                        ← 🌐 EL SITIO (esto es lo que se publica)
│   ├── index.html                   Inicio
│   ├── quienes-somos.html           Quiénes somos
│   ├── que-hacemos.html             Qué hacemos
│   ├── transparencia.html           Transparencia
│   ├── historias.html               Historias de impacto
│   ├── derechos-ciudadanos.html     Derechos en Formato Ciudadano
│   ├── como-ayudar.html             Cómo ayudar
│   ├── contacto.html                Contacto
│   └── assets/
│       ├── js/contenido.js      ← 📝 AQUÍ SE EDITA CASI TODO
│       ├── js/sitio.js              (no tocar: hace funcionar el sitio)
│       ├── css/estilo.css           (no tocar: colores y letras)
│       ├── img/                     Logos
│       ├── img/fotos/           ← 📷 AQUÍ VAN LAS FOTOS
│       ├── boletines/           ← 📄 AQUÍ VAN LOS BOLETINES
│       └── infografias/         ← 🖼️ AQUÍ VAN LAS INFOGRAFÍAS
│
├── README.md                    Esta guía
├── CONTENIDO_PENDIENTE.md       Lista de lo que falta por entregar
└── ARQUITECTURA.md              Explicación técnica (para programadores)
```

**Solo importa la carpeta `docs/`.** Todo lo demás es documentación.

---

## ✏️ 2. Las tres reglas para no romper nada

Cuando abran `contenido.js` van a ver textos entre comillas. Solo hay que
respetar tres cosas:

**Regla 1 — Cambien solo lo que está entre comillas.**

```js
titulo: "Cambien este texto",
         └────────────────┘   ✅ esto sí
└────┘                        ❌ esta palabra NO se toca
```

**Regla 2 — Cada línea termina con una coma. No la borren.**

**Regla 3 — Si el texto lleva comillas por dentro, usen comillas sencillas:**

```js
cita: "Ella dijo 'gracias' al salir",
```

> 💡 **Truco de negritas:** dentro de cualquier texto pueden poner palabras
> entre dos asteriscos y saldrán en **negritas**:
> `"Trabajamos en el **Hospital Civil** desde 2015"`

### Si algo sale mal

El sitio les va a mostrar un **aviso amarillo** arriba explicando que hay un
error en `contenido.js` — en vez de quedarse en blanco. No cunda el pánico:

1. Abran `contenido.js` y revisen lo último que cambiaron.
2. ¿Está la coma al final? ¿Están las dos comillas completas?
3. Si no lo encuentran, en GitHub pueden volver a la versión anterior
   (pestaña **History** del archivo). **Nada se pierde nunca.**

> 💡 **Para ver cómo quedó antes de publicar:** hagan doble clic en
> `docs/index.html`. Se abre en su navegador, solo en su computadora.
> Nadie más lo ve hasta que lo publiquen.

---

## 📄 3. Cómo subir un boletín nuevo

Esto es lo que van a hacer cada trimestre. Son 3 pasos.

### Paso 1 — Guardar el archivo

Copien el PDF dentro de `docs/assets/boletines/`, con un nombre **sin espacios,
sin acentos y sin eñes**:

- ✅ `boletin-2026-4T.pdf`
- ❌ `Boletín 4to trimestre (final).pdf`

### Paso 2 — Anunciarlo en `contenido.js`

Busquen la sección `boletines`. Verán bloques que empiezan con `{` y terminan
con `},`. **Copien un bloque completo y péguenlo arriba de los demás** (el más
nuevo va primero). Luego cámbienlo:

```js
{
  etiqueta: "Boletín · 4º trimestre 2026",
  titulo: "Lo que hicimos de octubre a diciembre",
  resumen: "Este trimestre acompañamos a 24 familias y dimos 6 talleres.",
  archivo: "boletin-2026-4T.pdf",     ← el nombre EXACTO del archivo
  peso: "PDF · 1.2 MB",
  estado: "publicado",                ← cambiar a "publicado"
},
```

### Paso 3 — Publicar (ver sección 6)

En un par de minutos el boletín ya se puede descargar desde el sitio.

> **¿Y si el boletín todavía no está listo?** Déjenlo con `archivo: null` y
> `estado: "proximamente"`. La tarjeta se ve, pero sin botón de descarga. Es
> mejor decir «viene en camino» que no decir nada.

> **Nota:** el boletín n.º 1 está hecho como página web (`.html`) en vez de PDF,
> para que se pueda leer bien en el celular. El sitio detecta solo el tipo de
> archivo: si es `.html` dice «Leer», si es PDF o Word dice «Descargar».

---

## 🖼️ 4. Cómo subir una infografía de la campaña

### Paso 1 — Guardar la imagen

Póngala en `docs/assets/infografias/`, con nombre sin espacios ni acentos.
Formato vertical (más alta que ancha) y **menos de 400 KB**.

### Paso 2 — Anunciarla en `contenido.js` → `infografias`

```js
{
  tema: "Acompañamiento",          ← esto crea el botón de filtro
  titulo: "3 · Mi familia se queda conmigo",
  resumen: "El acompañamiento familiar en el hospital no es una cortesía.",
  archivo: "infografia-3-acompanamiento.jpg",
  alt: "Infografía sobre el derecho al acompañamiento familiar.",
  estado: "publicado",
},
```

**Sobre `tema`:** los botones de filtro de la galería se crean solos con los
temas que ustedes escriban. Si usan un tema nuevo, aparece un botón nuevo.
Si repiten uno existente, la pieza se suma a ese filtro.

**Sobre `alt`:** es la descripción que escucha una persona ciega. **Es
obligatoria.** Describan lo que se ve en una frase.

---

## 📷 5. Cómo agregar una foto a la galería del inicio

> ⚠️ **Antes de nada, relean la regla de protección de la infancia al principio
> de esta guía.** Si la foto muestra el rostro de un menor de edad, no se sube.
> Punto.

### Paso 1 — Preparar la foto

1. Guárdenla en `docs/assets/img/fotos/`, con nombre sin espacios ni acentos.
2. **Que no pese mucho:** redúzcanla a máximo 1400 píxeles de ancho. Se puede
   hacer gratis en <https://squoosh.app> (funciona en el navegador, no hay que
   instalar nada). Una foto de más de 500 KB hace lento el sitio en celulares.

### Paso 2 — Anunciarla en `contenido.js` → `galeriaFotos`

```js
{
  archivo: "fotos/taller-escuela-2026.jpg",
  titulo: "Taller de derechos en primaria",
  alt: "Materiales del taller sobre una mesa del aula.",
},
```

La primera foto de la lista es la que se ve más grande en la galería: pongan
ahí la más representativa.

---

## 📬 6. El formulario de contacto (¡PASO OBLIGATORIO!)

Cuando alguien llena el formulario de la página de Contacto, el mensaje
**llega solo al correo de la asociación**. Pero hay que activarlo una vez.

### ⚠️ Actívenlo así (5 minutos, se hace UNA sola vez)

1. Entren al sitio publicado, vayan a **Contacto** y manden un mensaje de
   prueba (pueden escribir «prueba» en todos los campos).
2. Revisen la bandeja de **corazondejoeldejesus.2002@gmail.com**. Va a llegar
   un correo de **FormSubmit** pidiendo confirmar la dirección.
   > Si no lo ven, revisen la carpeta de **correo no deseado / spam**.
3. Ábranlo y den clic en el botón de activación.
4. Listo. Desde ese momento **todos** los mensajes del formulario llegan solos
   a su correo, para siempre. No hay que volver a hacer nada.

> **Mientras no lo activen**, el formulario no se rompe: le abre a la persona
> su programa de correo con el mensaje ya escrito. Nadie se queda sin poder
> contactarlos.

### Qué recibe la asociación

Cada mensaje llega con un asunto así:

```
[Sitio web · Quiero ser voluntario] Ana Ramírez
```

Y quien escribió recibe **una respuesta automática** diciéndole que su mensaje
llegó y que le van a responder. Ese texto se edita en `contenido.js` →
`formulario` → `respuestaAutomatica`.

### 🗂️ Cómo convertir el correo en un CRM sencillo (recomendado)

Como el asunto siempre incluye el motivo, Gmail puede clasificar los mensajes
solo. Háganlo una vez y su bandeja se organiza para siempre:

1. En Gmail, den clic en el buscador y luego en **Mostrar opciones de búsqueda**.
2. En el campo **Asunto** escriban: `[Sitio web · Quiero donar]`
3. Den clic en **Crear filtro**.
4. Marquen **Aplicar la etiqueta** → **Crear etiqueta nueva** → llámenla
   `Donantes`. Marquen también **No enviar nunca a Spam**.
5. Repitan para los otros motivos, con etiquetas como
   `Voluntariado`, `Alianzas`, `Historias`, `Talleres`.

Desde entonces, cada persona que escribe queda archivada en su carpeta y
pueden ver de un vistazo cuántos donantes o voluntarios llegaron este mes.

### Si quieren que los datos NO pasen por ningún servicio externo

Hoy el mensaje viaja por **FormSubmit**, que solo lo reenvía (no lo publica ni
lo vende), y así está explicado en la página de Contacto. Si algún día
prefieren que todo quede dentro de su propia cuenta de Google —y de paso tener
los contactos en una hoja de cálculo—, se puede cambiar por un **Google Apps
Script** gratuito. Es un cambio de una línea en `contenido.js` → `formulario`
→ `endpoint`. Pídanle a alguien con conocimientos técnicos que les ayude, o
escríbannos.

### Si cambia el correo de la asociación

Hay que cambiarlo en **dos lugares** de `contenido.js`:
- en `contacto` → `correo`
- en `formulario` → `endpoint` (la dirección va al final de esa línea)

Y volver a hacer la activación del punto 1.

---

## 🚀 7. Cómo publicar los cambios en internet

El sitio vive en **GitHub Pages**, que es gratuito y no caduca. Ya está todo
configurado; solo hay que subir los cambios.

### Opción A — Desde la página de GitHub (la más fácil)

1. Entren a
   [github.com/fabianromo674-bit/corazon-joel-de-jesus](https://github.com/fabianromo674-bit/corazon-joel-de-jesus)
2. Naveguen hasta el archivo que quieren cambiar
   (por ejemplo `docs` → `assets` → `js` → `contenido.js`).
3. Den clic en el ícono del **lápiz** ✏️ (arriba a la derecha).
4. Hagan el cambio directamente ahí.
5. Bajen y den clic en el botón verde **Commit changes**.
6. Esperen 1 o 2 minutos. **El sitio se actualiza solo.**

**Para subir un archivo nuevo** (un boletín, una foto, una infografía):
entren a la carpeta correspondiente en GitHub → botón **Add file** →
**Upload files** → arrastren el archivo → **Commit changes**.

### Opción B — Desde la computadora (si trabajan con los archivos locales)

Abran una terminal en la carpeta del proyecto y escriban estas dos líneas:

```bash
git add -A ; git commit -m "Describan aquí qué cambiaron"
```

```bash
git push
```

En 1 o 2 minutos el sitio público queda actualizado.

### Si el sitio no se actualiza

Esperen 3 minutos y recarguen la página con `Ctrl + F5` (recarga forzada).
GitHub tarda un poco en publicar.

---

## ♿ 8. Por qué el sitio se ve así (no lo cambien sin avisar)

El diseño no es decorativo: está construido para que **cualquier persona** pueda
usarlo, incluidos donantes mayores y personas con discapacidad visual.

- **Letra grande (18px) e interlineado amplio**, pensado para adultos mayores.
- **Contraste de color verificado** con la norma internacional WCAG AA. Cada
  combinación está medida y anotada en el CSS. Por ejemplo, el botón principal
  es coral con texto azul marino (4.88:1) y **no** coral con texto blanco, que
  se queda en 3.23:1 y no cumpliría.
- **Se puede navegar todo el sitio solo con el teclado**, y el recuadro que
  indica dónde está uno se ve tanto sobre fondo claro como oscuro.
- **Respeta a quien pidió menos animación** en la configuración de su
  computadora o celular.
- **Todas las imágenes tienen descripción** para lectores de pantalla.
- **Funciona sin JavaScript**: se pierden los efectos, no la información.
- **Cero rastreadores, cero cookies, cero costo.** El sitio no recoge ningún
  dato de quien lo visita.

### Sobre los colores y las letras

Son los oficiales del Manual de Identidad y están todos juntos hasta arriba del
archivo `docs/assets/css/estilo.css`. La tipografía oficial del cuerpo es
**Codec Pro**, que es de pago; el sitio usa **Jost** (gratuita) como sustituto.
Si algún día compran Codec Pro, se agrega en una sola línea.

### Sobre el logo

Aparece **una sola vez por página**, como pide el manual: el logo completo en la
portada del inicio y en el pie de las demás páginas; el corazón solo en la barra
de arriba y en el ícono de la pestaña. Sobre azul marino siempre va dentro de
una tarjeta blanca.

---

## 📞 Dudas

Cualquier cosa que no se entienda de esta guía es un error nuestro.
Escríbannos y la corregimos.

**Lo que falta por entregar** está en [CONTENIDO_PENDIENTE.md](CONTENIDO_PENDIENTE.md).
