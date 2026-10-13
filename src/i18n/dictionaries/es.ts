/*
 * Spanish copy — the source of truth for the dictionary shape.
 * Every other locale must satisfy `Dict`, so TypeScript flags missing keys.
 */
export const es = {
  meta: {
    title: 'Calucha · Creative Data Hub — Marketing, datos y software desde Bolivia',
    description:
      'Calucha es un hub creativo boliviano: marketing, contenido, analítica de datos y desarrollo de software para hacer crecer tu marca.',
  },
  skipLink: 'Saltar al contenido',

  header: {
    homeLabel: 'Calucha, Creative Data Hub — inicio',
    cta: 'Hablemos',
    menuOpen: 'Menú',
    menuClose: 'Cerrar',
    navLabel: 'Principal',
    nav: {
      servicios: 'Servicios',
      software: 'Software',
      proceso: 'Proceso',
      trabajos: 'Trabajos',
      nosotros: 'Nosotros',
      contacto: 'Contacto',
    },
  },

  language: {
    groupLabel: 'Idioma',
  },

  hero: {
    eyebrow: 'Marketing · Datos · Software — Hecho en Bolivia',
    titleA: 'Ideas con sabor,',
    titleB: 'datos con rumbo,',
    titleC: 'código con raíz.',
    lead:
      'Somos un hub creativo boliviano donde storytelling, analítica y desarrollo de software trabajan juntos. Del altiplano a la Amazonía, hacemos que tu marca conecte, aprenda y crezca.',
    ctaPrimary: 'Agenda una charla',
    ctaSecondary: 'Ver servicios',
    places: 'La Paz · Cochabamba · Santa Cruz · Trinidad · online',
    ticketTitle: '¡Agenda abierta!',
    ticketText: 'Elige por dónde empezar tu próximo proyecto:',
    passes: {
      creativo: 'Creatividad',
      datos: 'Datos',
      software: 'Software',
    },
    statsLabel: 'Calucha en números',
    // TODO: replace with real agency figures
    stats: [
      { value: '+80', label: 'marcas acompañadas' },
      { value: '12M', label: 'personas alcanzadas' },
      { value: '+30', label: 'productos digitales' },
    ],
  },

  services: {
    eyebrow: 'Lo que hacemos',
    title: 'Tres disciplinas, un solo hub',
    intro:
      'Creatividad para conectar, datos para decidir y tecnología para escalar. Puedes tomar un boleto o el viaje completo.',
    numberPrefix: 'N.º',
    numberLabel: 'Servicio',
    pillarLabel: 'Área',
    pillars: {
      creative: 'Creativo',
      data: 'Datos',
      tech: 'Tecnología',
    },
    items: {
      estrategia: {
        title: 'Estrategia de marca',
        description: 'Encontramos la voz de tu marca y la convertimos en un plan con objetivos que se pueden medir.',
        deliverables: ['Investigación de audiencia', 'Posicionamiento y tono', 'Plan de comunicación'],
      },
      contenido: {
        title: 'Contenido y redes',
        description: 'Reels, carruseles, fotografía y copy con identidad local que la gente quiere compartir.',
        deliverables: ['Calendario editorial', 'Producción foto y video', 'Community management'],
      },
      pauta: {
        title: 'Pauta digital',
        description:
          'Campañas en Meta, Google y TikTok que optimizamos semana a semana para cuidar cada boliviano invertido.',
        deliverables: ['Segmentación y pruebas A/B', 'Optimización continua', 'Reportes de retorno'],
      },
      datos: {
        title: 'Datos y analítica',
        description: 'Dashboards, social listening y modelos que traducen los números en decisiones claras.',
        deliverables: ['Tableros a medida', 'Escucha social', 'Insights mensuales'],
      },
      desarrollo: {
        title: 'Desarrollo web y apps',
        description:
          'Sitios, tiendas online y aplicaciones web o móviles rápidas, accesibles y listas para crecer contigo.',
        deliverables: ['Diseño UX/UI', 'Web, e-commerce y apps', 'Mantenimiento y soporte'],
      },
      automatizacion: {
        title: 'Automatización e integraciones',
        description:
          'Conectamos tus herramientas —CRM, WhatsApp, pagos, inventario— para que el trabajo repetitivo se haga solo.',
        deliverables: ['APIs e integraciones', 'Chatbots y flujos', 'Plataformas de datos'],
      },
    },
  },

  software: {
    eyebrow: 'Software a medida',
    title: 'Código con raíz, hecho para crecer',
    intro:
      'Nuestro equipo de desarrollo trabaja codo a codo con creativos y analistas: así cada producto digital nace con buena experiencia de usuario, datos desde el día uno y una marca que se nota.',
    capabilities: [
      {
        title: 'Webs y e-commerce',
        text: 'Sitios rápidos y tiendas online que convierten visitas en ventas.',
      },
      {
        title: 'Apps web y móviles',
        text: 'Productos digitales a medida, del prototipo al lanzamiento.',
      },
      {
        title: 'Plataformas de datos',
        text: 'Dashboards, ETL y reportes automáticos conectados a tu negocio.',
      },
      {
        title: 'Automatización',
        text: 'Integraciones, chatbots y flujos que te devuelven horas cada semana.',
      },
    ],
    stackLabel: 'Tecnologías con las que trabajamos',
    // TODO: adjust to the team's real stack
    stack: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Flutter', 'Cloud'],
    windowLabel: 'Vista previa de un proyecto de software',
    windowUrl: 'calucha.dev/tu-proyecto',
    code: [
      "const proyecto = crearHub({",
      "  creatividad: 'con sabor',",
      "  datos: 'con rumbo',",
      "  codigo: 'con raíz',",
      '})',
      '',
      'await proyecto.lanzar() // del altiplano a la Amazonía',
    ],
    checklist: ['Diseño UX/UI accesible', 'Desarrollo ágil por sprints', 'Analítica integrada', 'Soporte post-lanzamiento'],
    cta: 'Cuéntanos tu idea',
  },

  process: {
    eyebrow: 'Cómo trabajamos',
    title: 'Del dato a la historia, cuadro por cuadro',
    intro: 'Un proceso claro en cuatro escenas —para campañas o para software— y siempre sabrás qué hacemos y por qué.',
    steps: [
      {
        title: 'Escuchamos',
        text: 'Conocemos tu negocio, tu gente y tu competencia antes de crear una sola pieza o escribir una línea de código.',
      },
      { title: 'Medimos', text: 'Definimos indicadores y levantamos datos para saber dónde estás parado.' },
      {
        title: 'Creamos',
        text: 'Producimos contenido y desarrollamos software con identidad propia, en ciclos cortos y visibles.',
      },
      { title: 'Crecemos', text: 'Analizamos resultados, aprendemos y ajustamos para cosechar más cada mes.' },
    ],
  },

  work: {
    eyebrow: 'Trabajos recientes',
    title: 'Historias que ya estamos contando',
    intro: 'Un vistazo a proyectos donde la creatividad, los datos y la tecnología se dieron la mano.',
    // TODO: replace with real case studies
    projects: {
      cafe: {
        client: 'Café de altura · Yungas',
        title: 'Lanzamiento de marca en redes',
        result: '+230 % de seguidores en 3 meses',
      },
      textiles: {
        client: 'Textiles andinos · El Alto',
        title: 'Tienda online y campaña de temporada',
        result: '3,1x retorno sobre la inversión publicitaria',
      },
      ecoturismo: {
        client: 'Ecoturismo · Rurrenabaque',
        title: 'Plataforma web de reservas',
        result: '+40 % de reservas directas',
      },
      castana: {
        client: 'Cooperativa castañera · Riberalta',
        title: 'App de trazabilidad y tablero de datos',
        result: 'Cada lote rastreado, del bosque al puerto',
      },
    },
  },

  manifesto: {
    eyebrow: 'Nosotros',
    titleA: 'Hecho',
    titleB: 'en Bolivia,',
    titleC: 'con datos',
    titleD: 'y corazón',
    text:
      'Somos creativos, comunicadores, analistas y desarrolladores que creen que lo nuestro —los colores del aguayo, el ritmo de la morenada, la fuerza de la selva amazónica— también es una ventaja competitiva. Lo combinamos con datos y buen código para que cada idea tenga un porqué.',
    values: [
      'Creatividad con identidad',
      'Decisiones basadas en datos',
      'Código limpio y escalable',
      'Cuentas claras, siempre',
    ],
    footerText: '¿Tu marca tiene una historia que contar?',
    footerCta: 'Trabajemos juntos',
  },

  contact: {
    eyebrow: 'Contacto',
    title: '¿Armamos algo juntos?',
    intro: 'Cuéntanos de tu marca o tu proyecto y te respondemos en menos de 48 horas hábiles.',
    requiredNote: 'Los campos con * son obligatorios.',
    optional: '(opcional)',
    fields: {
      name: 'Nombre',
      email: 'Correo electrónico',
      service: '¿Qué necesitas?',
      message: 'Tu mensaje',
      messageHint: '¿Qué quieres lograr? ¿Para cuándo?',
    },
    serviceOptions: [
      { value: '', label: 'Elige una opción' },
      { value: 'estrategia', label: 'Estrategia de marca' },
      { value: 'contenido', label: 'Contenido y redes' },
      { value: 'pauta', label: 'Pauta digital' },
      { value: 'datos', label: 'Datos y analítica' },
      { value: 'desarrollo', label: 'Desarrollo web o app' },
      { value: 'automatizacion', label: 'Automatización e integraciones' },
      { value: 'todo', label: 'Un poco de todo' },
    ],
    errors: {
      nameRequired: 'Escribe tu nombre para saber cómo llamarte.',
      emailRequired: 'Necesitamos un correo para responderte.',
      emailInvalid: 'Revisa el correo: debe tener el formato nombre@dominio.com.',
      messageShort: 'Cuéntanos un poco más (al menos 10 caracteres).',
    },
    submit: 'Enviar mensaje',
    sending: 'Enviando…',
    sent: '¡Gracias! Recibimos tu mensaje y te escribiremos muy pronto.',
    asideLabel: 'Otras formas de contacto',
    directTitle: 'Escríbenos directo',
    labels: { email: 'Correo', whatsapp: 'WhatsApp', studio: 'Estudio' },
    studio: 'La Paz, Bolivia',
    socialTitle: 'Síguenos',
  },

  footer: {
    navLabel: 'Pie de página',
    credit: 'Calucha · Creative Data Hub',
  },
}

export type Dict = typeof es
