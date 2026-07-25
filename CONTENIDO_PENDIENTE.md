# 📋 Contenido pendiente de la asociación

El sitio ya está **completo y funcionando**. Lo que falta es reemplazar los
contenidos de muestra por los reales. Nada de esta lista impide publicar el
sitio hoy: cada punto se puede ir completando poco a poco.

**Prioridades:**
🔴 Urgente (afecta credibilidad o identidad) · 🟡 Importante · 🟢 Cuando se pueda

---

## 🔴 1. Archivos originales del logo

Los logos que recibimos (`logo_completo.png` y `logo_corazon.png`) son
**capturas de pantalla**, no los archivos originales. Esto trae tres problemas
concretos que detectamos al construir el sitio:

### 1.1 🔴 El nombre está mal escrito en el propio logo

El texto del logo dice:

> **EL CORAZÓN DE JOEL D J ESÚS**

Debería decir **«EL CORAZÓN DE JOEL DE JESÚS»**. La palabra «DE JESÚS» quedó
partida como «D J ESÚS».

**Esto no lo podemos arreglar nosotros:** el manual prohíbe recomponer el logo,
y hacerlo sobre una captura de pantalla lo dejaría peor. **Se necesita el
archivo original** (de quien lo diseñó) para corregir el espaciado.

> ⚠️ Mientras no se corrija, el nombre mal escrito aparece en la portada y en el
> pie de todas las páginas. Es lo primero que ve un donante.

### 1.2 ✅ Artefacto en la esquina (ya resuelto, pero conviene saberlo)

`logo_completo.png` tenía una marca oscura suelta en la esquina superior
izquierda (basura de la captura de pantalla). La quitamos recortando la imagen
a los límites reales del logo. **No se recoloreó ni se deformó nada.**

### 1.3 ✅ Texto cortado en el corazón (ya resuelto)

`logo_corazon.png` traía la palabra «VOLUNTARIADO» cortada a la mitad abajo.
Generamos una versión limpia (`docs/assets/img/corazon.png`) recortando solo el
corazón y quitándole el fondo blanco, para poder usarlo en la barra de
navegación y en el ícono de la pestaña.

### ✅ Qué necesitamos que entreguen

- [ ] 🔴 Logo completo en **vectorial** (`.ai`, `.eps`, `.svg` o `.pdf`)
- [ ] 🔴 Logo solo corazón en **vectorial**
- [ ] 🔴 Versión con el nombre **corregido** («DE JESÚS», no «D J ESÚS»)
- [ ] 🟡 Versión con fondo transparente (`.png` a 2000 px de ancho mínimo)
- [ ] 🟢 El Manual de Identidad completo en PDF, para dejarlo archivado

> **A quién pedírselo:** a la persona o despacho que diseñó el logo. Si ya no
> hay contacto, un diseñador puede revectorizarlo en unas horas.

---

## 🔴 2. Fotografías

### 🔒 Regla absoluta (no negociable)

> **Ninguna foto puede mostrar el rostro identificable de una niña, un niño o un
> adolescente.** Ni con permiso firmado. Ni de espaldas si se le puede
> reconocer. Ni aunque el donante lo pida.

### Sí se puede fotografiar

- Manos (de adultos, o de niños **sin** que se vea la cara)
- Materiales, juguetes, útiles, despensas
- Espacios: el aula, el pasillo, la sala de espera (vacíos)
- El equipo de voluntariado **adulto**, con su permiso por escrito
- Detalles: una mochila, un cuaderno, una silla

### Dónde hacen falta

- [x] ✅ Programa 01, Intervención hospitalaria — publicada (con edición de
      protección: la identidad del paciente se pixeló)
- [ ] 🔴 Programa 02, Talleres en escuelas — las fotos de talleres recibidas
      muestran rostros de menores y NO se pueden publicar; falta una toma
      del aula, de los materiales o del grupo de espaldas
- [ ] 🔴 Programa 03, Familias y cuidadores — mismo caso: la foto grupal
      recibida muestra rostros posiblemente de menores de edad

> 📸 **Sobre las fotos que enviaron (julio 2026):** de 17 fotos recibidas se
> publicaron 11 (2 con edición de protección). Se excluyeron 6 por mostrar
> rostros identificables de menores o contextos sensibles. No es un capricho:
> es la regla que el propio sitio promete en su pie de página.

### Requisitos técnicos

- [ ] Horizontal, mínimo 1200 px de ancho
- [ ] Menos de 500 KB cada una (usar <https://squoosh.app> para reducirlas)
- [ ] Cada foto necesita una **descripción en una frase** (para personas ciegas)
- [ ] 🟡 Carta de consentimiento firmada por cada persona adulta que aparezca

---

## 🔴 3. Documentos de transparencia

Hoy las tres tarjetas dicen **«Próximamente»**. Es honesto, pero para un donante
la página de Transparencia es **la más importante del sitio**: es donde decide
si confía o no.

- [x] ✅ Boletín n.º 1 publicado como **borrador** (julio 2026)
- [ ] 🔴 Validar las cifras del boletín n.º 1 (número de kits, despensas y
      raciones) y quitar el aviso de borrador
- [x] ✅ Dictamen jurídico de derechos de la niñez oncológica, descargable
- [ ] 🔴 Memoria de actividades 2025 (PDF)
- [ ] 🟡 Documento que explique el proceso de diagnóstico situacional

> 📄 **Cómo subirlos:** está explicado paso a paso en el `README.md`,
> sección **«3. Cómo subir un boletín nuevo»**.

**Qué debe llevar un boletín:** qué se hizo, con quién, con cuántos recursos y
qué cambió. **Nunca** nombres, domicilios ni fotos de menores de edad.

---

## 🟡 4. Historias de impacto

Las 3 historias que están hoy en el sitio son **ilustrativas** (inventadas como
ejemplo del formato). El sitio lo dice claramente debajo de cada una:
*«Testimonio ilustrativo — pendiente de validación»*.

- [ ] 🟡 Validar o reemplazar las 3 historias por casos reales
- [ ] 🟢 Sumar hasta 6 en total (el diseño soporta de 3 a 6)
- [ ] 🔴 Recabar el **consentimiento informado firmado** de cada familia
- [ ] 🟡 Al publicarlas, cambiar `verificada: false` por `verificada: true`
      en `contenido.js` (eso quita el aviso de «ilustrativo»)

### Antes de publicar una historia, revisar que NO tenga

- [ ] Nombres reales (ni de pila)
- [ ] Nombre de la escuela, colonia o domicilio
- [ ] Número de expediente o de cama
- [ ] Diagnóstico médico específico que permita identificar a la persona
- [ ] Cualquier dato que un vecino pudiera reconocer

---

## 🟡 5. Infografías — «Derechos en Formato Ciudadano»

Los 4 espacios de la galería están listos y dicen «Próximamente».

- [x] ✅ Infografías 1, 4 y 5 publicadas con filtros por tema
- [ ] 🟡 Diseñar las piezas 2 (información adaptada) y 3 (acompañamiento
      familiar) para completar la serie de 5 ejes
- [ ] 🟡 Revisión legal final de las piezas contra el dictamen
- [ ] 🟢 Definir si llevan licencia de uso (ej. Creative Commons)

---

## 🟡 6. Datos que faltan confirmar

- [ ] 🔴 **Dirección real de la página de Facebook.** Hoy `contenido.js` tiene
      `facebookUrl: "https://www.facebook.com/"`, que lleva al inicio de
      Facebook, no a su página. Hay que pegar la dirección completa.
- [ ] 🟡 **Situación fiscal:** ¿emiten recibos deducibles? La página de
      Transparencia hoy dice «escríbenos para confirmarte». Si ya hay respuesta
      definitiva, conviene ponerla directa.
- [ ] 🟡 **Horario de atención:** confirmar si «Lunes a viernes, 9:00 a 18:00 h»
      es correcto.
- [ ] 🟢 **Año de fundación:** el sitio dice 2015. Confirmar.
- [ ] 🟢 **Cifras de la portada:** hoy son `2015`, `10+`, `4`, `100%`.
      Si tienen números reales de impacto (familias acompañadas, talleres
      dados), serían mucho más fuertes para un donante.

---

## 🟢 7. Decisiones pendientes de la asociación

- [ ] 🟢 **¿Nombre corto o largo?** El sitio usa «El Corazón de Joel de Jesús».
      El manual dice «Voluntariado El Corazón de Joel de Jesús». Definir cuál se
      usa como nombre principal.
- [ ] 🟢 **¿Pagos en línea?** Hoy no hay. La página lo dice de frente y explica
      que así ninguna comisión se queda con parte del donativo. Si algún día
      quieren, se puede agregar un botón (algunas plataformas cobran comisión).
- [ ] 🟢 **Dominio propio.** El sitio queda en `github.io`, que es gratis y
      funciona bien. Un dominio propio (ej. `corazondejoeldejesus.org`) cuesta
      unos $200–400 al año y se conecta a GitHub Pages sin cambiar nada más.

---

## ✅ Lo que YA está resuelto

- [x] Sitio completo de 8 páginas, funcionando
- [x] Diseño según el Manual de Identidad (colores y tipografías oficiales)
- [x] Contraste de color verificado con la norma WCAG AA (anotado en el CSS)
- [x] Se corrigió el botón principal: coral con texto blanco **no cumplía**
      (3.23:1) → ahora es coral con texto azul marino (4.88:1)
- [x] Navegación completa con teclado y para lectores de pantalla
- [x] Funciona en celular, tableta y computadora
- [x] Respeta a quien pidió «menos animación» en su sistema
- [x] Nota de consentimiento informado en el pie de todas las páginas
- [x] Cero rastreadores, cero cookies, cero costo
- [x] Formulario de contacto sin servidor (abre el correo)
- [x] Metadatos, `sitemap.xml`, `robots.txt` y ficha Schema.org para Google
- [x] Aviso automático si `contenido.js` tiene un error de escritura
- [x] Logos limpiados de artefactos de captura de pantalla
- [x] Capturas de las 8 páginas en la carpeta `previews/`

---

## 📌 Si solo pueden hacer 3 cosas

1. 🔴 **Conseguir el logo original con el nombre corregido** — hoy dice
   «JOEL D J ESÚS» en toda la web.
2. 🔴 **Subir un boletín real** — Transparencia es donde se gana o se pierde a
   un donante, y hoy dice «Próximamente» en las tres tarjetas.
3. 🔴 **Pegar la dirección real del Facebook** — hoy el enlace no lleva a su
   página.
