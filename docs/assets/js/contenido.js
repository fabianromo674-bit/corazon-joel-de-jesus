/* ==================================================================
   📝 CONTENIDO EDITABLE DEL SITIO
   El Corazón de Joel de Jesús — Voluntariado
   ==================================================================

   ESTE ES EL ÚNICO ARCHIVO DE PROGRAMACIÓN QUE LA ASOCIACIÓN
   NECESITA TOCAR. Aquí viven los datos que cambian seguido:

     1) CONTACTO      → correo, teléfono, Facebook  (cambiar aquí
                        lo actualiza en TODAS las páginas de golpe)
     2) CIFRAS        → los números de la página de inicio
     3) BOLETINES     → los documentos de transparencia
     4) HISTORIAS     → los testimonios de impacto
     5) INFOGRAFÍAS   → la galería de "Derechos en Formato Ciudadano"

   Los textos largos (los párrafos de cada página) NO están aquí:
   están dentro de los archivos .html, marcados con un comentario
   que dice  <!-- ✏️ EDITABLE -->.  Se explica en el README.md.

   ------------------------------------------------------------------
   ⚠️  TRES REGLAS DE ORO PARA NO ROMPER NADA
   ------------------------------------------------------------------
   1. Cambien SOLO lo que está entre comillas.  Ejemplo:
          titulo: "Cambien este texto"
                   └──────────────────┘  ✅ esto sí
          titulo:  ← esta palabra NO se toca

   2. Cada línea termina con una coma  ,   No la borren.

   3. Si el texto lleva comillas dobles por dentro, usen comillas
      sencillas:   texto: "Ella dijo 'gracias' al salir",

   Si algo se rompe, el sitio les va a mostrar un aviso amarillo
   arriba explicando qué línea revisar. No se asusten: abran este
   archivo, deshagan el último cambio (Ctrl+Z) y guarden.
   ================================================================== */

const CONTENIDO = {

  /* ================================================================
     1) CONTACTO
     ----------------------------------------------------------------
     Esto aparece en el pie de TODAS las páginas y en Contacto.
     Cambiarlo aquí lo cambia en todo el sitio.
     ================================================================ */
  contacto: {
    correo: "corazondejoeldejesus.2002@gmail.com",

    // Cómo se ve el teléfono escrito en pantalla:
    telefono: "33 1670 9118",
    // El mismo teléfono, pero como lo necesita el celular para marcar
    // (con +52 y sin espacios). Si cambia el número, cambien LOS DOS.
    telefonoLink: "+523316709118",

    facebook: "Corazón de Joel de Jesús",
    facebookUrl: "https://www.facebook.com/",   // ← pegar aquí la dirección real de la página

    ciudad: "Guadalajara, Jalisco, México",
    horario: "Lunes a viernes, 9:00 a 18:00 h",
  },

  /* ================================================================
     2) CIFRAS DE TRAYECTORIA (página de inicio)
     ----------------------------------------------------------------
     "numero"  → puede llevar + o % (ej: "10+", "100%")
     "texto"   → qué significa ese número
     ================================================================ */
  cifras: [
    { numero: "2015", texto: "año en que nació el voluntariado" },
    { numero: "10+",  texto: "años acompañando a la niñez" },
    { numero: "4",    texto: "líneas de intervención activas" },
    { numero: "100%", texto: "donaciones dirigidas por diagnóstico" },
  ],

  /* ================================================================
     3) BOLETINES Y DOCUMENTOS DE TRANSPARENCIA
     ----------------------------------------------------------------
     👉 CÓMO AGREGAR UN BOLETÍN NUEVO (paso a paso en el README):

     Paso 1. Guarden el PDF dentro de la carpeta:
                docs/assets/boletines/
             con un nombre sin espacios ni acentos, por ejemplo:
                boletin-2026-3T.pdf

     Paso 2. Copien un bloque { ... } completo de aquí abajo,
             péguenlo ARRIBA de los demás (el más nuevo va primero)
             y cambien sus datos.

     Paso 3. Cambien  estado: "proximamente"  por  estado: "publicado"
             y escriban el nombre del archivo en  "archivo".

     ----------------------------------------------------------------
     estado: "publicado"     → se puede descargar
     estado: "proximamente"  → se ve la tarjeta pero sin descarga
     archivo: null           → cuando todavía no hay documento
     ================================================================ */
  boletines: [
    {
      etiqueta: "Boletín · 2º trimestre 2026",
      titulo: "Acciones y resultados del trimestre",
      resumen: "Talleres impartidos, intervenciones hospitalarias y donaciones entregadas, con evidencia de cada apoyo.",
      archivo: null,              // ej: "boletin-2026-2T.pdf"
      peso: "",                   // ej: "PDF · 1.2 MB"
      estado: "proximamente",
    },
    {
      etiqueta: "Reporte anual",
      titulo: "Memoria de actividades 2025",
      resumen: "El año completo en cifras e historias: qué hicimos, con quién y con qué recursos contamos.",
      archivo: null,
      peso: "",
      estado: "proximamente",
    },
    {
      etiqueta: "Cómo operamos",
      titulo: "Destino de cada donación",
      resumen: "Nuestro proceso de diagnóstico situacional: cómo decidimos dónde tu apoyo ayuda más.",
      archivo: null,
      peso: "",
      estado: "proximamente",
    },
  ],

  /* ================================================================
     4) HISTORIAS DE IMPACTO
     ----------------------------------------------------------------
     🔒 REGLA ABSOLUTA DE PROTECCIÓN DE LA INFANCIA:
        · NUNCA escriban el nombre real de una niña o un niño.
        · NUNCA incluyan datos que permitan identificarles
          (escuela, dirección, número de expediente, apellidos).
        · Publiquen SOLO historias con consentimiento informado
          firmado por la madre, padre o tutor.

     "verificada: false"  → la historia se marca como ilustrativa
     "verificada: true"   → historia real, ya validada por la
                            asociación y con consentimiento firmado
     ================================================================ */
  historias: [
    {
      cita: "En el hospital, el acompañamiento convirtió semanas de miedo en momentos de juego.",
      programa: "Intervención hospitalaria",
      contexto: "Área de oncología pediátrica",
      verificada: false,
    },
    {
      cita: "El taller de disciplina positiva cambió la forma en que nos hablamos en casa. Hoy hay más calma.",
      programa: "Familias y cuidadores",
      contexto: "Madre de familia · Taller comunitario",
      verificada: false,
    },
    {
      cita: "Volver a la escuela con útiles y apoyo fue volver a sentir que mi futuro importaba.",
      programa: "Talleres y educación",
      contexto: "Adolescente acompañada · Programa comunitario",
      verificada: false,
    },
  ],

  /* ================================================================
     5) INFOGRAFÍAS — "Derechos en Formato Ciudadano"
     ----------------------------------------------------------------
     Igual que los boletines:
       Paso 1. Guarden la imagen o PDF en  docs/assets/infografias/
       Paso 2. Copien un bloque, cámbienlo y pongan el nombre
               del archivo en "archivo".
       Paso 3. Cambien  estado: "proximamente"  →  "publicado"

     "alt" = descripción de la imagen para personas ciegas.
             Es OBLIGATORIA. Describan lo que se ve, en una frase.
     ================================================================ */
  infografias: [
    {
      tema: "Derecho a la salud",
      titulo: "¿Qué puedo exigir en un hospital público?",
      resumen: "Lo que dice la ley sobre la atención a niñas y niños, explicado en palabras de todos los días.",
      archivo: null,
      alt: "Infografía sobre el derecho a la salud de niñas y niños en hospitales públicos.",
      estado: "proximamente",
    },
    {
      tema: "Derecho a la educación",
      titulo: "Nadie puede negarle la escuela a un niño",
      resumen: "Requisitos, mitos y qué hacer si una escuela rechaza una inscripción.",
      archivo: null,
      alt: "Infografía sobre el derecho a la educación y la inscripción escolar.",
      estado: "proximamente",
    },
    {
      tema: "Vida libre de violencia",
      titulo: "Disciplina positiva, no castigo",
      resumen: "Cómo poner límites sin gritos ni golpes, con ejemplos de la vida diaria.",
      archivo: null,
      alt: "Infografía sobre crianza sin violencia y disciplina positiva.",
      estado: "proximamente",
    },
    {
      tema: "Derecho a ser escuchado",
      titulo: "La voz de un niño cuenta legalmente",
      resumen: "Qué significa el interés superior de la niñez cuando se toman decisiones sobre su vida.",
      archivo: null,
      alt: "Infografía sobre el derecho de la niñez a ser escuchada en decisiones que le afectan.",
      estado: "proximamente",
    },
  ],
};
