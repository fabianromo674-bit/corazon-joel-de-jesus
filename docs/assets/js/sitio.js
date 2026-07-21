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
    if (meta > 3000) return;               // años (2015) no se animan
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
        a.setAttribute("download", "");
        // El texto dice qué documento es: un lector de pantalla que
        // salta de enlace en enlace no oye tres veces "Descargar".
        a.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
          '<path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          '<span></span>';
        $("span", a).textContent = "Descargar " + b.titulo;
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
     5) INFOGRAFÍAS
     ================================================================ */
  function pintarInfografias() {
    var cont = $("[data-infografias]");
    if (!cont || !datos.infografias) return;

    datos.infografias.forEach(function (g) {
      var publicada = g.estado === "publicado" && g.archivo;
      var art = crear("article", "infografia" + (publicada ? "" : " pendiente"));

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
      pintarCifras();
      pintarBoletines();
      pintarHistorias();
      pintarInfografias();
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
