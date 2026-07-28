/* ==================================================================
   ⚙️ FUNCIONAMIENTO DEL SITIO
   El Corazón de Joel de Jesús — Voluntariado
   ==================================================================
   La asociación NO necesita tocar este archivo.
   Los textos y datos se editan en  contenido.js  y en los .html

   Lo que hace este archivo:
     · Toma los datos de contenido.js y los dibuja en las páginas
     · Avisa con un mensaje claro si contenido.js tiene un error
     · Menú del celular, línea de kintsugi, conteo de cifras
     · Las 4 dimensiones de la restitución (pieza interactiva)
     · El formulario de contacto (abre el correo, no usa servidor)
   ================================================================== */

(function () {
  "use strict";

  /* ----------------------------------------------------------------
     Red de seguridad: si contenido.js tiene un error de escritura
     (una coma o una comilla de menos), NO dejamos la página en
     blanco. Mostramos un aviso entendible arriba del sitio.
     ---------------------------------------------------------------- */
  function avisarError(detalle) {
    var aviso = document.createElement("div");
    aviso.className = "aviso-js";
    aviso.setAttribute("role", "alert");
    aviso.innerHTML =
      "⚠️ <strong>Hay un error en el archivo contenido.js</strong> — " +
      "revisen que cada línea termine con coma y que las comillas estén completas. " +
      "Detalle técnico: <code></code>";
    aviso.querySelector("code").textContent = detalle;
    document.body.insertBefore(aviso, document.body.firstChild);
    console.error("[Corazón de Joel] contenido.js:", detalle);
  }

  var datos = null;
  try {
    if (typeof CONTENIDO === "undefined") throw new Error("No se cargó contenido.js");
    datos = CONTENIDO;
  } catch (e) {
    document.addEventListener("DOMContentLoaded", function () { avisarError(e.message); });
    return;
  }

  /* Atajos cortos */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function crear(tag, clase) { var el = document.createElement(tag); if (clase) el.className = clase; return el; }
  function menosMovimiento() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /* ----------------------------------------------------------------
     Negritas seguras: en contenido.js se puede escribir
        "texto con **algo importante** adentro"
     y aquí se convierte en negritas de verdad. Primero se
     neutraliza cualquier símbolo de HTML para que un texto mal
     pegado nunca pueda romper (ni inyectar nada en) la página.
     ---------------------------------------------------------------- */
  function conNegritas(texto) {
    var seguro = String(texto)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return seguro.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }

  /* ----------------------------------------------------------------
     Iconos de los programas. La asociación elige uno por nombre
     en contenido.js ("corazon", "escuela", "familia", "donacion");
     los dibujos viven aquí para que nadie tenga que editar SVG.
     ---------------------------------------------------------------- */
  var ICONOS = {
    corazon: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s-7-4.6-7-10a4.5 4.5 0 0 1 7-3.7A4.5 4.5 0 0 1 19 11c0 5.4-7 10-7 10Z" stroke="#0c2246" stroke-width="1.8"/><path d="M8 11h2l1.2-2.5L13 13l1-2h2" stroke="#f16047" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    escuela: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 9l9-5 9 5-9 5-9-5Z" stroke="#0c2246" stroke-width="1.8" stroke-linejoin="round"/><path d="M7 12v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4" stroke="#0c2246" stroke-width="1.8"/><path d="M21 9v6" stroke="#f16047" stroke-width="1.8" stroke-linecap="round"/></svg>',
    familia: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="9" cy="8" r="3" stroke="#0c2246" stroke-width="1.8"/><circle cx="17" cy="10" r="2.4" stroke="#0c2246" stroke-width="1.8"/><path d="M3.5 19c.6-3 3-4.5 5.5-4.5s4.9 1.5 5.5 4.5M14.5 15.2c2.3.2 4.3 1.4 4.9 3.8" stroke="#f16047" stroke-width="1.8" stroke-linecap="round"/></svg>',
    donacion: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v10M12 13c0 3-2 4-4.5 4M12 13c0 3 2 4 4.5 4" stroke="#0c2246" stroke-width="1.8" stroke-linecap="round"/><path d="M5 21h14M8 6l4-3 4 3" stroke="#f16047" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  };

  /* ================================================================
     1) CONTACTO — se inyecta en el pie de todas las páginas
     ================================================================ */
  function pintarContacto() {
    var c = datos.contacto || {};

    // Enlaces de correo en cualquier parte del sitio
    $$("[data-correo]").forEach(function (el) {
      el.href = "mailto:" + c.correo;
      if (el.hasAttribute("data-correo-texto")) el.textContent = c.correo;
    });

    // Enlaces de teléfono
    $$("[data-telefono]").forEach(function (el) {
      el.href = "tel:" + c.telefonoLink;
      if (el.hasAttribute("data-telefono-texto")) el.textContent = c.telefono;
    });

    // Facebook
    $$("[data-facebook]").forEach(function (el) {
      el.href = c.facebookUrl;
      if (el.hasAttribute("data-facebook-texto")) el.textContent = c.facebook;
    });

    // Texto suelto (ciudad, horario)
    $$("[data-campo]").forEach(function (el) {
      var campo = el.getAttribute("data-campo");
      if (c[campo]) el.textContent = c[campo];
    });
  }

  /* ================================================================
     2) CIFRAS — con conteo animado
     ================================================================ */
  function pintarCifras() {
    var cont = $("[data-cifras]");
    if (!cont || !datos.cifras) return;

    datos.cifras.forEach(function (c) {
      var div = crear("div", "cifra");
      var b = crear("b");
      b.textContent = c.numero;
      b.setAttribute("data-valor", c.numero);
      var span = crear("span");
      span.textContent = c.texto;
      div.appendChild(b);
      div.appendChild(span);
      cont.appendChild(div);
    });

    if (menosMovimiento() || !("IntersectionObserver" in window)) return;

    // Conteo: solo si el número es realmente un número.
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        obs.unobserve(e.target);
        contar(e.target);
      });
    }, { threshold: .6 });
    $$("[data-valor]", cont).forEach(function (el) { obs.observe(el); });
  }

  function contar(el) {
    var texto = el.getAttribute("data-valor");
    var m = texto.match(/^(\d+)(.*)$/);   // "10+" → 10 y "+"
    if (!m) return;                        // si no empieza con número, se deja tal cual
    var meta = parseInt(m[1], 10);
    var sufijo = m[2] || "";
    // Un año (2015) no es una cantidad: contar desde cero hasta él se ve
    // raro y confunde. Solo se animan las cantidades.
    if (meta >= 1900 && meta <= 2200 && !sufijo) return;
    var inicio = null;
    var dur = 1100;
    function paso(t) {
      if (!inicio) inicio = t;
      var p = Math.min((t - inicio) / dur, 1);
      var suave = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(meta * suave) + sufijo;
      if (p < 1) requestAnimationFrame(paso);
      else el.textContent = texto;
    }
    requestAnimationFrame(paso);
  }

  /* ================================================================
     2-bis) LEMA de la portada
     ================================================================ */
  function pintarLema() {
    $$("[data-lema]").forEach(function (el) {
      if (datos.lema) el.textContent = datos.lema;
    });
  }

  /* ================================================================
     2-ter) PROGRAMAS — tarjetas resumidas de la página de Inicio
     ================================================================ */
  function pintarProgramas() {
    var cont = $("[data-programas]");
    if (!cont || !datos.programas) return;

    datos.programas.forEach(function (p) {
      var art = crear("article", "tarjeta");

      var ic = crear("div", "icono");
      ic.setAttribute("aria-hidden", "true");
      ic.innerHTML = ICONOS[p.icono] || ICONOS.corazon;
      art.appendChild(ic);

      var h = crear("h3");
      h.textContent = p.titulo;
      art.appendChild(h);

      var res = crear("p");
      res.innerHTML = conNegritas(p.resumen);
      art.appendChild(res);

      var lugar = crear("span", "lugar");
      lugar.textContent = p.lugarCorto;
      art.appendChild(lugar);

      cont.appendChild(art);
    });
  }

  /* ================================================================
     2-quater) PROGRAMAS — secciones completas de "Qué hacemos"
     ----------------------------------------------------------------
     Genera una sección grande por cada programa que tenga "detalle"
     en contenido.js, alternando el lado de la foto, y pone la línea
     de kintsugi entre una y otra. El programa de donaciones tiene
     su propia sección especial escrita en el HTML.
     ================================================================ */
  var NOTAS_FOTO = {
    hospital: "Manos, materiales o espacios del programa.",
    talleres: "Un aula, materiales del taller o una dinámica de espaldas.",
    familias: "Un taller con personas adultas, o materiales de trabajo.",
  };
  var FONDOS_SECCION = ["#ffffff", "#fbf8f6"];   // blanco / crema alternados

  function pintarProgramasDetalle() {
    var cont = $("[data-programas-detalle]");
    if (!cont || !datos.programas) return;

    var conDetalle = datos.programas.filter(function (p) { return p.detalle; });

    conDetalle.forEach(function (p, i) {
      var d = p.detalle;
      var n = i + 1;

      var sec = crear("section", "seccion" + (i % 2 === 1 ? " crema" : ""));
      sec.id = p.id;
      sec.setAttribute("aria-labelledby", "titulo-p" + n);

      var env = crear("div", "envoltura");
      var rej = crear("div", "rejilla rejilla-2");
      rej.style.alignItems = "center";

      /* --- Columna de texto --- */
      var col = crear("div");

      var ante = crear("p", "antetitulo");
      ante.textContent = "Programa 0" + n;
      col.appendChild(ante);

      var h2 = crear("h2");
      h2.id = "titulo-p" + n;
      h2.style.cssText = "font-size:clamp(28px,3.4vw,38px);margin:12px 0 16px";
      // Si el programa tiene un título largo para su sección, se usa;
      // si no, se repite el de la tarjeta.
      h2.textContent = d.tituloLargo || p.titulo;
      col.appendChild(h2);

      (d.parrafos || []).forEach(function (t) {
        var par = crear("p");
        par.style.marginBottom = "16px";
        par.innerHTML = conNegritas(t);
        col.appendChild(par);
      });

      if (d.introLista) {
        var intro = crear("p");
        intro.style.marginBottom = "20px";
        intro.textContent = d.introLista;
        col.appendChild(intro);
      }

      if (d.lista && d.lista.length) {
        var ul = crear("ul");
        ul.style.cssText = "margin:0 0 22px 20px;color:var(--gris)";
        d.lista.forEach(function (t) {
          var li = crear("li");
          li.innerHTML = conNegritas(t);
          ul.appendChild(li);
        });
        col.appendChild(ul);
      }

      var lugar = crear("span", "lugar");
      lugar.textContent = d.lugar;
      col.appendChild(lugar);

      /* --- Columna de foto (o espacio reservado) --- */
      var colFoto;
      if (d.foto) {
        colFoto = crear("div");
        var img = crear("img");
        img.src = "assets/img/" + d.foto;
        img.alt = d.fotoAlt || "";
        img.loading = "lazy";
        img.decoding = "async";
        img.style.cssText = "width:100%;height:auto;border-radius:16px";
        colFoto.appendChild(img);
      } else {
        colFoto = crear("div", "foto-pendiente");
        var pf = crear("p");
        pf.innerHTML = "<b>Espacio para fotografía</b>" +
          conNegritas(NOTAS_FOTO[p.id] || "Manos, materiales o espacios del programa.") +
          "<br>Nunca rostros de menores de edad.";
        colFoto.appendChild(pf);
      }

      /* Alternar el lado de la foto: impar texto-foto, par foto-texto */
      if (i % 2 === 0) { rej.appendChild(col); rej.appendChild(colFoto); }
      else { rej.appendChild(colFoto); rej.appendChild(col); }

      env.appendChild(rej);
      sec.appendChild(env);
      cont.appendChild(sec);

      /* Línea de kintsugi hacia la siguiente sección */
      if (i < conDetalle.length - 1) {
        var seam = crear("div", "kintsugi");
        seam.setAttribute("data-kintsugi", "");
        seam.setAttribute("data-fondo", FONDOS_SECCION[(i + 1) % 2]);
        cont.appendChild(seam);
      }
    });
  }

  /* ================================================================
     2-quinquies) EQUIPO (Quiénes somos) y PREGUNTAS (Transparencia)
     ================================================================ */
  function pintarEquipo() {
    var cont = $("[data-equipo]");
    if (!cont || !datos.equipo) return;

    datos.equipo.forEach(function (m) {
      var art = crear("article", "tarjeta");
      var h = crear("h3");
      h.textContent = m.rol;
      art.appendChild(h);
      var p = crear("p");
      p.innerHTML = conNegritas(m.descripcion);
      art.appendChild(p);
      cont.appendChild(art);
    });
  }

  function pintarPreguntas() {
    var cont = $("[data-preguntas]");
    if (!cont || !datos.preguntas) return;

    datos.preguntas.forEach(function (q) {
      var art = crear("article", "tarjeta");
      art.style.background = "var(--blanco)";
      var h = crear("h3");
      h.textContent = q.pregunta;
      art.appendChild(h);
      var p = crear("p");
      p.innerHTML = conNegritas(q.respuesta);
      art.appendChild(p);
      cont.appendChild(art);
    });
  }

  /* ================================================================
     3) BOLETINES
     ================================================================ */
  function pintarBoletines() {
    var cont = $("[data-boletines]");
    if (!cont || !datos.boletines) return;

    datos.boletines.forEach(function (b) {
      var publicado = b.estado === "publicado" && b.archivo;
      var art = crear("article", "boletin" + (publicado ? "" : " pendiente"));

      var et = crear("span", "etiqueta");
      et.textContent = b.etiqueta;
      art.appendChild(et);

      var h = crear("h3");
      h.textContent = b.titulo;
      art.appendChild(h);

      var p = crear("p");
      p.textContent = b.resumen;
      art.appendChild(p);

      if (publicado) {
        var a = crear("a", "enlace");
        a.href = "assets/boletines/" + b.archivo;
        // Un boletín en HTML se ABRE en el navegador; cualquier otro
        // formato (PDF, Word) se descarga. El texto dice qué documento
        // es: un lector de pantalla que salta de enlace en enlace no
        // debe oír tres veces "Descargar".
        var esPagina = /\.html?$/i.test(b.archivo);
        if (!esPagina) a.setAttribute("download", "");
        a.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
          (esPagina
            ? '<path d="M7 17L17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
            : '<path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>') +
          '</svg><span></span>';
        $("span", a).textContent = (esPagina ? "Leer " : "Descargar ") + b.titulo;
        art.appendChild(a);
        if (b.peso) {
          var peso = crear("p", "peso");
          peso.textContent = b.peso;
          art.appendChild(peso);
        }
      } else {
        var pend = crear("p", "enlace");
        pend.textContent = "Próximamente";
        art.appendChild(pend);
      }
      cont.appendChild(art);
    });
  }

  /* ================================================================
     4) HISTORIAS DE IMPACTO
     ================================================================ */
  function pintarHistorias() {
    var cont = $("[data-historias]");
    if (!cont || !datos.historias) return;

    datos.historias.forEach(function (h) {
      var fig = crear("figure", "historia");

      // Foto de CONTEXTO del programa, nunca de quien da el testimonio
      if (h.foto) {
        var im = crear("img", "foto-historia");
        im.src = "assets/img/" + h.foto;
        im.alt = h.fotoAlt || "";
        im.loading = "lazy";
        im.decoding = "async";
        fig.appendChild(im);
      }

      var q = crear("blockquote");
      q.textContent = h.cita;
      fig.appendChild(q);

      var cap = crear("figcaption");
      var prog = crear("span", "programa");
      prog.textContent = h.programa;
      cap.appendChild(prog);
      cap.appendChild(document.createTextNode(h.contexto));

      // Si la historia todavía no ha sido validada por la asociación,
      // se dice claramente. Nunca presentamos como real algo que no lo es.
      if (!h.verificada) {
        var nota = crear("span");
        nota.style.cssText = "display:block;margin-top:8px;font-style:italic;opacity:.85";
        nota.textContent = "Testimonio ilustrativo — pendiente de validación.";
        cap.appendChild(nota);
      }
      fig.appendChild(cap);
      cont.appendChild(fig);
    });
  }

  /* ================================================================
     5) INFOGRAFÍAS — con filtros por tema
     ----------------------------------------------------------------
     Los botones de filtro se generan solos a partir de los "tema"
     que existan en contenido.js. Al filtrar, se anuncia cuántas
     piezas se muestran (aria-live) para lectores de pantalla.
     ================================================================ */
  function pintarFiltrosInfografias() {
    var zona = $("[data-filtros-infografias]");
    var cont = $("[data-infografias]");
    if (!zona || !cont || !datos.infografias) return;

    // Temas únicos, en el orden en que aparecen
    var temas = [];
    datos.infografias.forEach(function (g) {
      if (g.tema && temas.indexOf(g.tema) === -1) temas.push(g.tema);
    });
    if (temas.length < 2) return;   // con un solo tema no hay qué filtrar

    var etiquetas = ["Todas"].concat(temas);
    var aviso = crear("p", "solo-lectores");
    aviso.setAttribute("aria-live", "polite");

    etiquetas.forEach(function (t, i) {
      var b = crear("button", "filtro");
      b.type = "button";
      b.textContent = t;
      b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      b.addEventListener("click", function () {
        $$(".filtro", zona).forEach(function (o) { o.setAttribute("aria-pressed", "false"); });
        b.setAttribute("aria-pressed", "true");
        var visibles = 0;
        $$(".infografia", cont).forEach(function (card) {
          var mostrar = t === "Todas" || card.getAttribute("data-tema") === t;
          card.hidden = !mostrar;
          if (mostrar) visibles++;
        });
        aviso.textContent = "Mostrando " + visibles +
          (visibles === 1 ? " pieza" : " piezas") +
          (t === "Todas" ? "." : " del tema " + t + ".");
      });
      zona.appendChild(b);
    });
    zona.appendChild(aviso);
  }

  function pintarInfografias() {
    var cont = $("[data-infografias]");
    if (!cont || !datos.infografias) return;

    datos.infografias.forEach(function (g) {
      var publicada = g.estado === "publicado" && g.archivo;
      var art = crear("article", "infografia" + (publicada ? "" : " pendiente"));
      art.setAttribute("data-tema", g.tema || "");

      var lienzo = crear("div", "lienzo");
      if (publicada) {
        var img = crear("img");
        img.src = "assets/infografias/" + g.archivo;
        img.alt = g.alt || g.titulo;
        img.loading = "lazy";
        img.decoding = "async";
        lienzo.appendChild(img);
      } else {
        var ma = crear("p", "marca-agua");
        ma.textContent = "Infografía en diseño";
        lienzo.appendChild(ma);
      }
      art.appendChild(lienzo);

      var info = crear("div", "info");
      var tema = crear("span", "tema");
      tema.textContent = g.tema;
      info.appendChild(tema);

      var h = crear("h3");
      h.textContent = g.titulo;
      info.appendChild(h);

      var p = crear("p");
      p.textContent = g.resumen;
      info.appendChild(p);

      if (publicada) {
        var a = crear("a", "descarga");
        a.href = "assets/infografias/" + g.archivo;
        a.setAttribute("download", "");
        a.innerHTML = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
          '<path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span></span>';
        $("span", a).textContent = "Descargar: " + g.titulo;
        info.appendChild(a);
      } else {
        var pend = crear("p", "descarga");
        pend.textContent = "Próximamente";
        info.appendChild(pend);
      }
      art.appendChild(info);
      cont.appendChild(art);
    });
  }

  /* ================================================================
     5-bis) GALERÍA DE FOTOS — "El trabajo en imágenes" (Inicio)
     ----------------------------------------------------------------
     Mosaico de fotos con su leyenda. Las fotos y sus textos se
     editan en contenido.js → galeriaFotos.
     ================================================================ */
  function pintarGaleriaFotos() {
    var cont = $("[data-galeria-fotos]");
    if (!cont || !datos.galeriaFotos) return;

    datos.galeriaFotos.forEach(function (f) {
      var fig = crear("figure", "foto-mosaico");

      var img = crear("img");
      img.src = "assets/img/" + f.archivo;
      img.alt = f.alt || f.titulo;
      img.loading = "lazy";
      img.decoding = "async";
      fig.appendChild(img);

      var cap = crear("figcaption");
      cap.textContent = f.titulo;
      fig.appendChild(cap);

      cont.appendChild(fig);
    });
  }

  /* ================================================================
     5-ter) TIRA FOTOGRÁFICA DEL PIE DE PÁGINA
     ----------------------------------------------------------------
     Cierre visual en todas las páginas. Toma las primeras 6 fotos de
     la galería y las muestra en monocromo azul marino; al pasar el
     puntero recuperan su color. Es decorativa, así que se marca como
     aria-hidden: quien usa lector de pantalla ya escuchó esas mismas
     fotos en la galería del inicio y no necesita oírlas de nuevo.
     ================================================================ */
  function pintarTiraPie() {
    var cont = $("[data-pie-tira]");
    if (!cont || !datos.galeriaFotos || !datos.galeriaFotos.length) return;

    cont.setAttribute("aria-hidden", "true");
    datos.galeriaFotos.slice(0, 6).forEach(function (f) {
      var fig = crear("figure");
      var img = crear("img");
      img.src = "assets/img/" + f.archivo;
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      fig.appendChild(img);
      cont.appendChild(fig);
    });
  }

  /* ================================================================
     6) MENÚ DEL CELULAR
     ================================================================ */
  function menuMovil() {
    var boton = $(".hamburguesa");
    var menu = $("#menu-principal");
    if (!boton || !menu) return;

    function cerrar() {
      menu.classList.remove("abierto");
      boton.setAttribute("aria-expanded", "false");
    }

    boton.addEventListener("click", function () {
      var abierto = menu.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", abierto ? "true" : "false");
    });

    // Cerrar con la tecla Escape y devolver el foco al botón
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("abierto")) {
        cerrar();
        boton.focus();
      }
    });

    // Cerrar al tocar fuera del menú
    document.addEventListener("click", function (e) {
      if (!menu.classList.contains("abierto")) return;
      if (menu.contains(e.target) || boton.contains(e.target)) return;
      cerrar();
    });

    // Al volver a pantalla grande, limpiar el estado del menú
    window.addEventListener("resize", function () {
      if (window.innerWidth > 980) cerrar();
    });
  }

  /* ================================================================
     7) LÍNEA DE KINTSUGI — el elemento firma
     ----------------------------------------------------------------
     La grieta dorada que separa las secciones. Es decorativa
     (aria-hidden), así que animarla no afecta a nadie que use
     lector de pantalla.
     ================================================================ */
  var GRIETAS = [
    "M0 26 L152 21 L268 29 L402 13 L523 24 L688 9 L846 27 L1010 15 L1198 28 L1440 19",
    "M0 18 L130 27 L295 12 L438 26 L602 16 L744 28 L918 11 L1088 25 L1266 14 L1440 24",
    "M0 24 L176 14 L322 27 L470 11 L640 26 L790 15 L962 28 L1140 13 L1300 25 L1440 16",
  ];

  function pintarKintsugi() {
    var seams = $$("[data-kintsugi]");
    if (!seams.length) return;

    seams.forEach(function (seam, i) {
      var variante = GRIETAS[i % GRIETAS.length];
      // El color de abajo lo define la sección siguiente (data-fondo)
      var fondo = seam.getAttribute("data-fondo") || "#ffffff";

      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 1440 40");
      svg.setAttribute("preserveAspectRatio", "none");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");

      // Relleno del lado de abajo, para que la grieta separe dos colores
      var relleno = document.createElementNS("http://www.w3.org/2000/svg", "path");
      relleno.setAttribute("d", variante + " L1440 40 L0 40 Z");
      relleno.setAttribute("fill", fondo);
      svg.appendChild(relleno);

      // La grieta dorada
      var linea = document.createElementNS("http://www.w3.org/2000/svg", "path");
      linea.setAttribute("d", variante);
      linea.setAttribute("class", "grieta anima");
      svg.appendChild(linea);

      seam.appendChild(svg);

      // Escamas de oro (pequeños destellos sobre la grieta)
      [.24, .58, .82].forEach(function (t) {
        var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c.setAttribute("cx", String(Math.round(1440 * t)));
        c.setAttribute("cy", String(18 + (t * 7 % 5)));
        c.setAttribute("r", "2.6");
        c.setAttribute("class", "escama");
        svg.appendChild(c);
      });

      // Medimos el largo real del trazo para animar el "relleno de oro"
      try {
        var largo = linea.getTotalLength();
        linea.style.setProperty("--largo", largo);
      } catch (e) {
        linea.classList.remove("anima");   // navegador viejo: línea fija
      }
    });

    if (!("IntersectionObserver" in window)) {
      seams.forEach(function (s) { s.classList.add("visible"); });
      return;
    }
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      });
    }, { threshold: .35 });
    seams.forEach(function (s) { obs.observe(s); });
  }

  /* ================================================================
     8) LAS 4 DIMENSIONES DE LA RESTITUCIÓN
     ----------------------------------------------------------------
     El cuenco roto que se repara con oro. Cada fragmento y cada
     título son botones reales:
       · Mouse: clic en el fragmento o en el título
       · Teclado: Tab para llegar, flechas para moverse, Enter/Espacio
       · Lector de pantalla: se anuncia qué panel se abrió

     Sin JavaScript se ven los 4 textos completos: no se pierde
     información, solo el efecto.
     ================================================================ */
  function dimensionesRestitucion() {
    var zona = $("[data-restitucion]");
    if (!zona) return;

    var items = $$(".dimension", zona);
    var piezas = $$("[data-fragmento]", zona);
    if (!items.length) return;

    function activar(indice, moverFoco) {
      items.forEach(function (item, i) {
        var activo = i === indice;
        var boton = $("button", item);
        var cuerpo = $(".cuerpo", item);
        item.setAttribute("data-activo", activo ? "true" : "false");
        boton.setAttribute("aria-expanded", activo ? "true" : "false");
        cuerpo.hidden = !activo;
      });
      piezas.forEach(function (p, i) {
        p.setAttribute("data-activo", i === indice ? "true" : "false");
      });
      if (moverFoco) $("button", items[indice]).focus();
    }

    items.forEach(function (item, i) {
      var boton = $("button", item);
      boton.addEventListener("click", function () { activar(i, false); });

      // Navegación con flechas entre las 4 dimensiones
      boton.addEventListener("keydown", function (e) {
        var salto = null;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") salto = (i + 1) % items.length;
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") salto = (i - 1 + items.length) % items.length;
        if (e.key === "Home") salto = 0;
        if (e.key === "End") salto = items.length - 1;
        if (salto === null) return;
        e.preventDefault();
        activar(salto, true);
      });
    });

    // Los fragmentos del cuenco hacen lo mismo que los títulos
    piezas.forEach(function (p, i) {
      p.addEventListener("click", function () { activar(i, true); });
      p.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activar(i, true); }
      });
    });

    activar(0, false);   // arranca con la primera dimensión abierta
  }

  /* ================================================================
     9) FORMULARIO DE CONTACTO
     ----------------------------------------------------------------
     No hay servidor ni base de datos (el sitio es gratuito).
     El formulario arma un correo y lo abre en el programa de correo
     de la persona. Ella misma le da "Enviar".
     ================================================================ */
  function formularioContacto() {
    var form = $("[data-formulario]");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var nombre = $("#nombre", form).value.trim();
      var correo = $("#correo", form).value.trim();
      var motivo = $("#motivo", form).value;
      var mensaje = $("#mensaje", form).value.trim();

      var asunto = "[Sitio web] " + motivo + " — " + nombre;
      var cuerpo =
        "Nombre: " + nombre + "\n" +
        "Correo de contacto: " + correo + "\n" +
        "Motivo: " + motivo + "\n\n" +
        "Mensaje:\n" + mensaje + "\n\n" +
        "— Enviado desde el formulario del sitio web.";

      window.location.href = "mailto:" + datos.contacto.correo +
        "?subject=" + encodeURIComponent(asunto) +
        "&body=" + encodeURIComponent(cuerpo);

      var ok = $("[data-aviso-envio]", form.parentNode) || $("[data-aviso-envio]");
      if (ok) {
        ok.hidden = false;
        ok.focus();
      }
    });
  }

  /* ================================================================
     10) AÑO ACTUAL EN EL PIE (para no tener que actualizarlo a mano)
     ================================================================ */
  function anioActual() {
    $$("[data-anio]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  /* ================================================================
     ARRANQUE
     ================================================================ */
  document.addEventListener("DOMContentLoaded", function () {
    try {
      pintarContacto();
      pintarLema();
      pintarCifras();
      pintarProgramas();
      pintarProgramasDetalle();   // antes de pintarKintsugi: genera costuras
      pintarEquipo();
      pintarPreguntas();
      pintarBoletines();
      pintarHistorias();
      pintarInfografias();
      pintarFiltrosInfografias();
      pintarGaleriaFotos();
      pintarTiraPie();
      menuMovil();
      pintarKintsugi();
      dimensionesRestitucion();
      formularioContacto();
      anioActual();
    } catch (e) {
      avisarError(e.message);
    }
  });
})();
