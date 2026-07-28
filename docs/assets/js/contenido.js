/* ==================================================================
   📝 CONTENIDO EDITABLE DEL SITIO
   El Corazón de Joel de Jesús — Voluntariado
   ==================================================================

   ESTE ES EL ÚNICO ARCHIVO DE PROGRAMACIÓN QUE LA ASOCIACIÓN
   NECESITA TOCAR. Aquí viven los datos que cambian seguido:

     1) CONTACTO      → correo, teléfono, Facebook  (cambiar aquí
                        lo actualiza en TODAS las páginas de golpe)
     2) LEMA          → la frase entre comillas de la portada
     3) CIFRAS        → los números de la página de inicio
     4) PROGRAMAS     → los 4 programas (tarjetas del inicio y
                        secciones de la página "Qué hacemos")
     5) BOLETINES     → los documentos de transparencia
     6) HISTORIAS     → los testimonios de impacto
     7) INFOGRAFÍAS   → la galería de "Derechos en Formato Ciudadano"
     8) EQUIPO        → los roles del voluntariado (Quiénes somos)
     9) PREGUNTAS     → las preguntas de donantes (Transparencia)
    10) GALERÍA       → las fotos de "El trabajo en imágenes" (Inicio)

   💡 TRUCO: dentro de cualquier texto pueden poner una palabra en
      negritas escribiéndola entre dos asteriscos dobles, así:
          "Capacitamos en **disciplina positiva** y crianza..."
                           └──────────────────┘ saldrá en negritas

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
     2) LEMA — la frase entre comillas de la portada de Inicio
     ================================================================ */
  lema: "«Nuestra niñez en situación vulnerable nos necesita»",

  /* ================================================================
     3) CIFRAS DE TRAYECTORIA (página de inicio)
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
     4) LOS 4 PROGRAMAS
     ----------------------------------------------------------------
     Cada programa aparece en DOS lugares a la vez:
       · como tarjeta resumida en la página de Inicio
       · como sección completa en la página "Qué hacemos"
     Editar aquí actualiza los dos lugares de golpe.

     "icono" elige el dibujito de la tarjeta. Las opciones son:
        "corazon"   → corazón con latido (hospital)
        "escuela"   → birrete (talleres y educación)
        "familia"   → personas (familias y cuidadores)
        "donacion"  → árbol que crece (donaciones)

     "detalle" es la sección grande de "Qué hacemos":
        tituloLargo→ (opcional) título de esa sección, si es distinto
                     al de la tarjeta del inicio
        parrafos   → los párrafos de introducción (cada uno entre comillas)
        introLista → la frase que presenta la lista
        lista      → los puntos de qué se hace en el programa
        lugar      → dónde ocurre (sale con el pin 📍 al final)
        foto       → nombre del archivo de foto en docs/assets/img/
                     o null si todavía no hay. 🔒 RECUERDEN: nunca
                     una foto con el rostro de una niña o un niño.
        fotoAlt    → descripción de la foto para personas ciegas
                     (obligatoria cuando pongan una foto)

     ⚠️ El programa de "Donaciones dirigidas" tiene detalle: null
        porque su sección en "Qué hacemos" es especial (explica el
        diagnóstico situacional) y se edita directo en ese HTML.
     ================================================================ */
  programas: [
    {
      id: "hospital",
      icono: "corazon",
      titulo: "Intervención hospitalaria",
      resumen: "Acompañamiento psicosocial y apoyo integral a niñas y niños hospitalizados.",
      lugarCorto: "Hospital Civil Nuevo «Dr. Juan I. Menchaca»",
      detalle: {
        parrafos: [
          "Acompañamos a niñas y niños hospitalizados y a sus familias en el **Hospital Civil Nuevo «Dr. Juan I. Menchaca»**. Un hospital salva la vida; nosotros trabajamos para que ese tiempo no le robe la infancia a quien lo atraviesa.",
        ],
        introLista: "Lo que hacemos ahí:",
        lista: [
          "Acompañamiento psicosocial a la niña o el niño y a su cuidador principal.",
          "Juego, lectura y actividades que devuelven momentos de infancia dentro del hospital.",
          "Apoyo en especie según lo que el área médica y la familia reportan como necesario.",
          "Presencia sostenida: volvemos, no visitamos una vez.",
        ],
        lugar: "Hospital Civil Nuevo «Dr. Juan I. Menchaca» · Guadalajara",
        foto: "fotos/hospital-voluntario.jpg",
        fotoAlt: "Voluntario con la playera del Corazón de Joel de Jesús acompaña junto a una cuna en la sala pediátrica. La imagen protege la identidad del paciente.",
      },
    },
    {
      id: "talleres",
      icono: "escuela",
      titulo: "Talleres y educación",
      resumen: "Derechos humanos, prevención de violencias y sensibilización en escuelas y comunidades.",
      lugarCorto: "Escuelas y comunidades",
      detalle: {
        tituloLargo: "Talleres en escuelas y comunidades",
        parrafos: [
          "Llevamos a las aulas y a los espacios comunitarios algo que casi nunca se enseña: que la niñez tiene derechos exigibles, y que la violencia no es normal aunque sea cotidiana.",
        ],
        introLista: "Contenidos que impartimos:",
        lista: [
          "Derechos humanos de la niñez, explicados en lenguaje que un niño entiende.",
          "Prevención de violencias: reconocerlas, nombrarlas y a quién acudir.",
          "Sensibilización con enfoque diferencial: no toda la infancia parte del mismo lugar.",
          "Herramientas para que el personal docente detecte y canalice casos.",
        ],
        lugar: "Escuelas y comunidades del área metropolitana",
        foto: "fotos/taller-aula.jpg",
        fotoAlt: "Tallerista de pie frente a un grupo de niñas y niños sentados en un aula, durante una sesión con proyección. Los rostros de los menores están difuminados.",
      },
    },
    {
      id: "familias",
      icono: "familia",
      titulo: "Familias y cuidadores",
      resumen: "Capacitación en disciplina positiva y crianza sin violencia: el primer círculo de protección.",
      lugarCorto: "Talleres a madres, padres y tutores",
      detalle: {
        tituloLargo: "Capacitación a familias y cuidadores",
        parrafos: [
          "El primer círculo de protección de una niña o un niño no es una institución: es su casa. Por eso capacitamos a madres, padres, abuelas y cuidadores en **disciplina positiva** y crianza sin violencia.",
        ],
        introLista: "De qué se trata:",
        lista: [
          "Poner límites firmes sin gritos, humillaciones ni golpes.",
          "Entender la conducta infantil por su etapa de desarrollo, no como desafío.",
          "Reparar el vínculo cuando ya hubo daño: no se trata de culpar, sino de cambiar.",
          "Cuidar a quien cuida: el agotamiento del cuidador también es un factor de riesgo.",
        ],
        lugar: "Talleres a madres, padres, tutores y cuidadores",
        foto: "fotos/convivencia-ninas.jpg",
        fotoAlt: "Grupo de niñas con playeras rosas sentadas en unas escaleras, compartiendo tazones de comida en una convivencia comunitaria. Los rostros están difuminados para proteger su identidad.",
      },
    },
    {
      id: "donaciones",
      icono: "donacion",
      titulo: "Donaciones dirigidas",
      resumen: "Cada apoyo se destina según un diagnóstico situacional, no según la urgencia aparente.",
      lugarCorto: "Con redes de otras asociaciones civiles",
      detalle: null,   // ← su sección especial se edita en que-hacemos.html
    },
  ],

  /* ================================================================
     5) BOLETINES Y DOCUMENTOS DE TRANSPARENCIA
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
      etiqueta: "Boletín n.º 1 · Julio 2026",
      titulo: "Boletín de transparencia n.º 1 (borrador)",
      resumen: "Entregas en el Hospital Civil, apoyo a comedores comunitarios y donación de insumos de higiene, con evidencia fotográfica. En revisión por la mesa directiva.",
      archivo: "boletin-01-julio-2026.html",
      peso: "Se lee en línea · Se puede imprimir",
      estado: "publicado",
    },
    {
      etiqueta: "Documento jurídico",
      titulo: "Dictamen: derechos de la niñez con cáncer",
      resumen: "Fundamento legal de nuestra intervención hospitalaria: los 5 ejes de derechos exigibles de las niñas y niños con diagnóstico oncológico.",
      archivo: "dictamen-derechos-ninez-oncologia.docx",
      peso: "Word · 334 KB",
      estado: "publicado",
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
     6) HISTORIAS DE IMPACTO
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
      // Foto de contexto (opcional). NUNCA la foto de quien da el
      // testimonio: es una imagen del programa, no de la persona.
      foto: "fotos/hospital-habitacion.jpg",
      fotoAlt: "Voluntario deja juguetes y alimentos en una habitación de hospital pediátrico.",
    },
    {
      cita: "El taller de disciplina positiva cambió la forma en que nos hablamos en casa. Hoy hay más calma.",
      programa: "Familias y cuidadores",
      contexto: "Madre de familia · Taller comunitario",
      verificada: false,
      foto: "fotos/comedor-comunitario.jpg",
      fotoAlt: "Voluntaria sirve alimentos durante una actividad comunitaria con personas adultas.",
    },
    {
      cita: "Volver a la escuela con útiles y apoyo fue volver a sentir que mi futuro importaba.",
      programa: "Talleres y educación",
      contexto: "Adolescente acompañada · Programa comunitario",
      verificada: false,
      foto: "fotos/taller-aula.jpg",
      fotoAlt: "Sesión de taller en un aula con niñas y niños; sus rostros están difuminados.",
    },
  ],

  /* ================================================================
     7) INFOGRAFÍAS — "Derechos en Formato Ciudadano"
     ----------------------------------------------------------------
     Igual que los boletines:
       Paso 1. Guarden la imagen o PDF en  docs/assets/infografias/
       Paso 2. Copien un bloque, cámbienlo y pongan el nombre
               del archivo en "archivo".
       Paso 3. Cambien  estado: "proximamente"  →  "publicado"

     "alt" = descripción de la imagen para personas ciegas.
             Es OBLIGATORIA. Describan lo que se ve, en una frase.
     ================================================================ */
  /* Esta primera serie traduce los 5 ejes del dictamen jurídico
     sobre los derechos de la niñez con cáncer en el hospital.
     El "tema" alimenta los botones de filtro de la galería. */
  infografias: [
    {
      tema: "Salud oportuna",
      titulo: "1 · Salud mental y tratamiento oportuno",
      resumen: "Diagnóstico temprano, acceso sin discriminación, medicamentos completos y espacios seguros: lo que la ley garantiza a la niñez con cáncer.",
      archivo: "infografia-1-salud-integral.jpg",
      alt: "Infografía: derecho de niñas y niños con cáncer a diagnóstico y tratamiento oportuno, acceso sin discriminación, medicamentos y espacios seguros de atención.",
      estado: "publicado",
    },
    {
      tema: "Información",
      titulo: "2 · Derecho a entender lo que me pasa",
      resumen: "Las niñas y niños tienen derecho a que su diagnóstico y tratamiento se les explique en palabras que puedan comprender.",
      archivo: null,
      alt: "Infografía sobre el derecho a la información adaptada para pacientes infantiles.",
      estado: "proximamente",
    },
    {
      tema: "Acompañamiento",
      titulo: "3 · Mi familia se queda conmigo",
      resumen: "El acompañamiento familiar durante la hospitalización no es una cortesía: es un derecho que no puede restringirse sin justificación.",
      archivo: null,
      alt: "Infografía sobre el derecho al acompañamiento familiar permanente en el hospital.",
      estado: "proximamente",
    },
    {
      tema: "Juego y educación",
      titulo: "4 · Mi infancia no se detiene",
      resumen: "Estar en un hospital no significa dejar de ser niña o niño: el aprendizaje, el juego y el apoyo emocional continúan.",
      archivo: "infografia-4-mi-infancia-no-se-detiene.jpg",
      alt: "Infografía: en el hospital el aprendizaje continúa, el juego es esencial y se mantiene el contacto con la escuela, amigos y familia.",
      estado: "publicado",
    },
    {
      tema: "Trato digno",
      titulo: "5 · Trato digno y alivio del dolor",
      resumen: "Atención compasiva, apoyo psicológico para el paciente y su familia, y acceso a cuidados paliativos en todo momento.",
      archivo: "infografia-5-trato-digno.jpg",
      alt: "Infografía: derecho a atención humana que evite el sufrimiento innecesario, con manejo del dolor y cuidados paliativos.",
      estado: "publicado",
    },
  ],

  /* ================================================================
     8) EQUIPO — los roles del voluntariado (página "Quiénes somos")
     ----------------------------------------------------------------
     🔒 Por protección de datos NO se publican nombres, fotos ni
        cargos personales: solo las funciones del voluntariado.
     ================================================================ */
  equipo: [
    {
      rol: "Coordinación general",
      descripcion: "Define el rumbo, sostiene los vínculos con hospitales e instituciones y responde por el uso de cada donación.",
    },
    {
      rol: "Voluntariado de acompañamiento",
      descripcion: "Quienes están en el hospital y en las comunidades: los que ponen el cuerpo, el tiempo y la escucha donde más se necesita.",
    },
    {
      rol: "Talleristas y formación",
      descripcion: "Personas capacitadas en derechos de la niñez y disciplina positiva que llevan los contenidos a escuelas, familias y cuidadores.",
    },
  ],

  /* ================================================================
     9) PREGUNTAS DE DONANTES (página "Transparencia")
     ----------------------------------------------------------------
     Para agregar una pregunta nueva: copien un bloque { ... },
     completo, péguenlo antes del cierre  ],  y cambien los textos.
     ================================================================ */
  preguntas: [
    {
      pregunta: "¿Puedo dirigir mi donación a un programa específico?",
      respuesta: "Sí. Puedes indicar si quieres que se destine a intervención hospitalaria, talleres, capacitación a familias o al fondo general. Si no lo indicas, entra al fondo que el diagnóstico priorice ese trimestre.",
    },
    {
      pregunta: "¿Emiten recibo deducible de impuestos?",
      respuesta: "Escríbenos antes de donar para confirmarte la situación fiscal vigente de la asociación y qué comprobante podemos emitirte. Preferimos decírtelo con claridad desde el principio.",
    },
    {
      pregunta: "¿Puedo donar en especie?",
      respuesta: "Sí, y es muy útil —siempre que corresponda a una necesidad diagnosticada. Antes de traer algo, escríbenos: te decimos qué se necesita en este momento para que tu apoyo no termine almacenado.",
    },
    {
      pregunta: "¿Cómo sé que mi donación llegó?",
      respuesta: "Por el boletín del trimestre, donde se reportan las acciones y los recursos usados. Si tu donación fue dirigida a un caso concreto, te informamos directamente su resultado.",
    },
  ],

  /* ================================================================
     10) GALERÍA DE FOTOS — "El trabajo en imágenes" (Inicio)
     ----------------------------------------------------------------
     🔒 REGLA ABSOLUTA antes de agregar una foto aquí:
        NUNCA una imagen donde se reconozca el rostro de una niña,
        niño o adolescente. Sí se puede: de espaldas, manos,
        materiales, espacios, personas adultas con su permiso.

     Para agregar una foto:
       Paso 1. Guardarla en  docs/assets/img/fotos/
               (nombre sin espacios ni acentos)
       Paso 2. Copiar un bloque { ... } y cambiar sus datos.
     "titulo" = la leyenda que se ve sobre la foto.
     "alt"    = descripción para personas ciegas (obligatoria).
     ================================================================ */
  galeriaFotos: [
    {
      archivo: "fotos/donaciones-oncologia.jpg",
      titulo: "Entrega de donaciones en oncología pediátrica",
      alt: "Voluntario con cubrebocas entrega bolsas de donaciones junto a un carrito; dos pacientes pediátricos observan de espaldas.",
    },
    {
      archivo: "fotos/entrega-hospital.jpg",
      titulo: "Alimentos para familias en el hospital",
      alt: "Voluntarios entregan charolas de comida a cuidadores en un pasillo del área de terapia intermedia.",
    },
    {
      archivo: "fotos/entrega-despensa.jpg",
      titulo: "Despensas donde hacen falta",
      alt: "Voluntaria entrega una bolsa de despensa; un niño la recibe de espaldas a la cámara.",
    },
    {
      archivo: "fotos/kits-dentales.jpg",
      titulo: "Kits de higiene dental donados",
      alt: "Decenas de pastas y cepillos dentales nuevos listos para entregarse.",
    },
    {
      archivo: "fotos/reparto-pastel.jpg",
      titulo: "Convivencias que también alimentan",
      alt: "Mesa llena de rebanadas de pastel servidas en platos para repartir en una actividad comunitaria.",
    },
    {
      archivo: "fotos/comedor-comunitario.jpg",
      titulo: "Apoyo en comedores comunitarios",
      alt: "Voluntaria con cubrebocas sirve rebanadas de pastel a personas adultas mayores en un comedor.",
    },
    {
      archivo: "fotos/hospital-habitacion.jpg",
      titulo: "Juguetes y comida en la habitación",
      alt: "Voluntario entrega juguetes y alimentos en una habitación de hospital. La identidad del paciente y su familiar está protegida.",
    },
    {
      archivo: "fotos/taller-aula.jpg",
      titulo: "Talleres de derechos en el aula",
      alt: "Tallerista frente a un grupo de niñas y niños durante una sesión. Los rostros están difuminados.",
    },
    {
      archivo: "fotos/manos-tazones.jpg",
      titulo: "Lo que llega a sus manos",
      alt: "Manos de niñas sosteniendo tazones con rebanadas de pastel durante una convivencia.",
    },
    {
      archivo: "fotos/ninos-juego.jpg",
      titulo: "También se trata de jugar",
      alt: "Dos niños en un patio, uno con un balón de básquetbol y otro con un plato de pastel. Sus rostros no son identificables.",
    },
    {
      archivo: "fotos/entrega-comedor.jpg",
      titulo: "Entregas sin intermediarios",
      alt: "Voluntario entrega un pastel y galletas a la encargada de un comedor comunitario.",
    },
  ],
};
