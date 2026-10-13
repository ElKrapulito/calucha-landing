import type { Dict } from './es'

export const en: Dict = {
  meta: {
    title: 'Calucha · Creative Data Hub — Marketing, data & software from Bolivia',
    description:
      'Calucha is a Bolivian creative hub: marketing, content, data analytics and software development to help your brand grow.',
  },
  skipLink: 'Skip to content',

  header: {
    homeLabel: 'Calucha, Creative Data Hub — home',
    cta: "Let's talk",
    menuOpen: 'Menu',
    menuClose: 'Close',
    navLabel: 'Main',
    nav: {
      servicios: 'Services',
      software: 'Software',
      proceso: 'Process',
      trabajos: 'Work',
      nosotros: 'About',
      contacto: 'Contact',
    },
  },

  language: {
    groupLabel: 'Language',
  },

  hero: {
    eyebrow: 'Marketing · Data · Software — Made in Bolivia',
    titleA: 'Ideas with flavor,',
    titleB: 'data with direction,',
    titleC: 'code with roots.',
    lead:
      'We are a Bolivian creative hub where storytelling, analytics and software development work as one team. From the Andes to the Amazon, we help your brand connect, learn and grow.',
    ctaPrimary: 'Book a call',
    ctaSecondary: 'See services',
    places: 'La Paz · Cochabamba · Santa Cruz · Trinidad · remote',
    ticketTitle: 'Now booking!',
    ticketText: 'Pick where your next project starts:',
    passes: {
      creativo: 'Creative',
      datos: 'Data',
      software: 'Software',
    },
    statsLabel: 'Calucha in numbers',
    stats: [
      { value: '80+', label: 'brands supported' },
      { value: '12M', label: 'people reached' },
      { value: '30+', label: 'digital products' },
    ],
  },

  services: {
    eyebrow: 'What we do',
    title: 'Three disciplines, one hub',
    intro:
      'Creativity to connect, data to decide and technology to scale. Grab a single ticket or take the whole journey.',
    numberPrefix: 'No.',
    numberLabel: 'Service',
    pillarLabel: 'Area',
    pillars: {
      creative: 'Creative',
      data: 'Data',
      tech: 'Tech',
    },
    items: {
      estrategia: {
        title: 'Brand strategy',
        description: "We find your brand's voice and turn it into a plan with goals you can actually measure.",
        deliverables: ['Audience research', 'Positioning and tone', 'Communication plan'],
      },
      contenido: {
        title: 'Content & social',
        description: 'Reels, carousels, photography and copy with local identity that people want to share.',
        deliverables: ['Editorial calendar', 'Photo and video production', 'Community management'],
      },
      pauta: {
        title: 'Paid media',
        description: 'Meta, Google and TikTok campaigns we optimize week by week so every dollar works harder.',
        deliverables: ['Targeting and A/B tests', 'Ongoing optimization', 'ROI reporting'],
      },
      datos: {
        title: 'Data & analytics',
        description: 'Dashboards, social listening and models that turn numbers into clear decisions.',
        deliverables: ['Custom dashboards', 'Social listening', 'Monthly insights'],
      },
      desarrollo: {
        title: 'Web & app development',
        description: 'Fast, accessible websites, online stores and web or mobile apps built to grow with you.',
        deliverables: ['UX/UI design', 'Web, e-commerce and apps', 'Maintenance and support'],
      },
      automatizacion: {
        title: 'Automation & integrations',
        description:
          'We connect your tools — CRM, WhatsApp, payments, inventory — so repetitive work takes care of itself.',
        deliverables: ['APIs and integrations', 'Chatbots and workflows', 'Data platforms'],
      },
    },
  },

  software: {
    eyebrow: 'Custom software',
    title: 'Code with roots, built to grow',
    intro:
      'Our developers work side by side with creatives and analysts, so every digital product launches with great UX, data from day one and a brand you can feel.',
    capabilities: [
      { title: 'Websites & e-commerce', text: 'Fast sites and online stores that turn visits into sales.' },
      { title: 'Web & mobile apps', text: 'Tailor-made digital products, from prototype to launch.' },
      { title: 'Data platforms', text: 'Dashboards, ETL pipelines and automated reports wired to your business.' },
      { title: 'Automation', text: 'Integrations, chatbots and workflows that give you hours back every week.' },
    ],
    stackLabel: 'Technologies we work with',
    stack: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Flutter', 'Cloud'],
    windowLabel: 'Preview of a software project',
    windowUrl: 'calucha.dev/your-project',
    code: [
      'const project = createHub({',
      "  creativity: 'with flavor',",
      "  data: 'with direction',",
      "  code: 'with roots',",
      '})',
      '',
      'await project.launch() // from the Andes to the Amazon',
    ],
    checklist: ['Accessible UX/UI design', 'Agile sprint delivery', 'Built-in analytics', 'Post-launch support'],
    cta: 'Tell us your idea',
  },

  process: {
    eyebrow: 'How we work',
    title: 'From data to story, frame by frame',
    intro: 'A clear four-scene process — for campaigns or software — so you always know what we are doing and why.',
    steps: [
      {
        title: 'Listen',
        text: 'We get to know your business, your people and your competitors before creating a single piece or writing a line of code.',
      },
      { title: 'Measure', text: 'We set KPIs and gather data so we know exactly where you stand.' },
      {
        title: 'Create',
        text: 'We produce content and build software with its own identity, in short, visible cycles.',
      },
      { title: 'Grow', text: 'We analyze results, learn and adjust to harvest more every month.' },
    ],
  },

  work: {
    eyebrow: 'Recent work',
    title: 'Stories we are already telling',
    intro: 'A peek at projects where creativity, data and technology joined forces.',
    projects: {
      cafe: {
        client: 'Highland coffee · Yungas',
        title: 'Brand launch on social media',
        result: '+230% followers in 3 months',
      },
      textiles: {
        client: 'Andean textiles · El Alto',
        title: 'Online store and seasonal campaign',
        result: '3.1x return on ad spend',
      },
      ecoturismo: {
        client: 'Ecotourism · Rurrenabaque',
        title: 'Web booking platform',
        result: '+40% direct bookings',
      },
      castana: {
        client: 'Brazil-nut cooperative · Riberalta',
        title: 'Traceability app and data dashboard',
        result: 'Every batch tracked, from forest to port',
      },
    },
  },

  manifesto: {
    eyebrow: 'About us',
    titleA: 'Made',
    titleB: 'in Bolivia,',
    titleC: 'with data',
    titleD: 'and heart',
    text:
      'We are creatives, storytellers, analysts and developers who believe our roots — the colors of the aguayo, the rhythm of the morenada, the strength of the Amazon rainforest — are a competitive advantage. We pair them with data and solid code so every idea has a reason behind it.',
    values: ['Creativity with identity', 'Data-driven decisions', 'Clean, scalable code', 'Always transparent'],
    footerText: 'Does your brand have a story to tell?',
    footerCta: "Let's work together",
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Shall we build something together?',
    intro: 'Tell us about your brand or project and we will reply within 48 business hours.',
    requiredNote: 'Fields marked with * are required.',
    optional: '(optional)',
    fields: {
      name: 'Name',
      email: 'Email',
      service: 'What do you need?',
      message: 'Your message',
      messageHint: 'What do you want to achieve? By when?',
    },
    serviceOptions: [
      { value: '', label: 'Choose an option' },
      { value: 'estrategia', label: 'Brand strategy' },
      { value: 'contenido', label: 'Content & social' },
      { value: 'pauta', label: 'Paid media' },
      { value: 'datos', label: 'Data & analytics' },
      { value: 'desarrollo', label: 'Web or app development' },
      { value: 'automatizacion', label: 'Automation & integrations' },
      { value: 'todo', label: 'A bit of everything' },
    ],
    errors: {
      nameRequired: 'Please enter your name so we know what to call you.',
      emailRequired: 'We need an email address to reply to you.',
      emailInvalid: 'Check your email: it should look like name@domain.com.',
      messageShort: 'Tell us a little more (at least 10 characters).',
    },
    submit: 'Send message',
    sending: 'Sending…',
    sent: 'Thank you! We got your message and will write back very soon.',
    asideLabel: 'Other ways to reach us',
    directTitle: 'Write to us directly',
    labels: { email: 'Email', whatsapp: 'WhatsApp', studio: 'Studio' },
    studio: 'La Paz, Bolivia',
    socialTitle: 'Follow us',
  },

  footer: {
    navLabel: 'Footer',
    credit: 'Calucha · Creative Data Hub',
  },
}
