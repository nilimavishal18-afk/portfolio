export const profile = {
  name: 'Nilima Vishal',
  role: 'Senior UX Designer',
  location: 'Seattle, WA',
  email: 'nilima.vishal24@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nilima-vishal',
  resume: 'https://drive.google.com/file/d/13n2C331qAAEGeaDVmJWMku2gRBBdJ65r/view?usp=drive_link',
  intro:
    '8+ years designing enterprise products across supply chain, healthcare and AI platforms. I lead UX from research to shipped product — turning complex, high-stakes workflows into experiences people can trust.',
}

export interface CaseStudy {
  slug: string
  title: string
  summary: string
  company: string
  year: string
  role: string
  team: string
  domain: string
  accent: string
  highlight?: string
  nda?: boolean
  context: string
  problem: string
  responsibilities: string[]
  approach: { title: string; text: string }[]
  decisions?: { title: string; text: string }[]
  outcomes: string[]
  reflection?: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'smart-wms',
    title: 'Smart WMS',
    summary: 'Simplifying high-volume warehouse workflows for operators and supervisors.',
    company: 'Blue Yonder',
    year: '2023',
    role: 'Sr. UX Designer — UX strategy & design lead',
    team: 'Product, Engineering, User Research, business stakeholders',
    domain: 'Supply chain · Enterprise SaaS',
    accent: '#ff5a4e',
    highlight: 'Best Innovation Award — Blue Yonder Crystal Ball 2023',
    nda: true,
    context:
      "Blue Yonder's Warehouse Management System runs day-to-day operations for large distribution centers. Operators and supervisors work through dense, multi-step tasks under time pressure.",
    problem:
      'Core workflows had grown complex over time, making common tasks slow to complete and hard to learn for new staff.',
    responsibilities: [
      'Owned UX strategy and end-to-end design for the initiative',
      'Ran workflow analysis and usability evaluations with warehouse users',
      'Aligned product, engineering and business stakeholders on a shared vision',
      'Delivered journeys, interaction models, prototypes and high-fidelity designs',
    ],
    approach: [
      { title: 'Map the work', text: 'Analysed real warehouse workflows to find where steps, screens and decisions could be removed.' },
      { title: 'Frame the vision', text: 'Built user journeys and interaction models to align the team on what "smart" should mean for operators.' },
      { title: 'Prototype & test', text: 'Iterated through prototypes and usability sessions, refining with each round of feedback.' },
      { title: 'Scale through the system', text: 'Contributed reusable patterns and mobile-first guidelines back to the design system.' },
    ],
    outcomes: [
      'Won Best Innovation Award at Blue Yonder Crystal Ball 2023',
      'Patterns adopted into the Blue Yonder design system for reuse across products',
    ],
  },
  {
    slug: 'ai-agents',
    title: 'Agent Marketplace & Orchestrator',
    summary: 'Designing how supply chain teams discover, configure and orchestrate AI agents.',
    company: 'Blue Yonder',
    year: '2024 — 2026',
    role: 'Sr. UX Designer — design owner',
    team: 'Product, Engineering, AI/ML, User Research',
    domain: 'AI · Platform · Workflow automation',
    accent: '#7c5cff',
    nda: true,
    context:
      'Blue Yonder introduced AI agents that can take on supply chain tasks. Customers needed a way to find the right agents, set them up with confidence, and coordinate multi-step processes across them.',
    problem:
      'AI capabilities are powerful but opaque. Users had to understand what an agent does, trust it with their data, and stay in control of automated workflows.',
    responsibilities: [
      'Owned UX for Agent Marketplace and Orchestrator from concept to delivery',
      'Defined interaction models for discovery, configuration and orchestration',
      'Set data visualization standards for monitoring automated workflows',
      'Used AI-assisted prototyping (Figma Make, v0, Claude) to explore directions quickly',
    ],
    approach: [
      { title: 'Understand trust', text: 'Worked with research to learn what users need to see before they hand work to an agent.' },
      { title: 'Design for discovery', text: 'Structured the marketplace around user goals rather than technical capabilities.' },
      { title: 'Keep humans in control', text: 'Designed orchestration views that make agent activity visible and easy to intervene in.' },
      { title: 'Prototype at speed', text: 'Built working prototypes with AI tools to test real interactions early with stakeholders and users.' },
    ],
    outcomes: [
      'Established the UX foundation for Blue Yonder’s agent platform',
      'Data visualization standards adopted across products',
    ],
  },
  {
    slug: 'telerad',
    title: 'TeleRad',
    summary: 'Connecting technologists with radiologists to deliver faster, more accessible diagnoses.',
    company: 'GE Healthcare',
    year: '2020',
    role: 'UX Designer',
    team: 'Product owners, data analysis team, engineering, clinical stakeholders',
    domain: 'Healthcare · Teleradiology',
    accent: '#0fa3b1',
    highlight: 'Impact Award 2020',
    context:
      'Teleradiology moves patient images — X-rays, CTs, MRIs — between locations so they can be read by radiologists elsewhere. Demand was growing fast, especially for access to specialists across geographies.',
    problem:
      'Technologists (seekers) and radiologists (providers) lacked a single platform to share studies, deliver reports and request second opinions.',
    responsibilities: [
      'Designed a systematic, easy-to-use end-to-end experience for doctors, radiologists and technicians',
      'Balanced goals across product owners, the data team and end users',
      'Led research, journeys, wireframes, visual language and prototype testing',
    ],
    approach: [
      { title: 'Research', text: 'Studied the domain and analysed competitors including Telerad Tech, RadMD, Infinitt, 5C Network and Biotronik.' },
      { title: 'Empathize & define', text: 'Built personas and journeys for seekers and providers, and framed the core problem as a point of view.' },
      { title: 'Ideate', text: 'Prioritised opportunities and explored concepts through wireframes.' },
      { title: 'Prototype & test', text: 'Created the visual language and iterated after concept testing.' },
    ],
    decisions: [
      { title: 'One platform, two audiences', text: 'Stakeholders wanted a single platform for seekers and providers, so the IA is shared with role-specific views.' },
      { title: 'Aligning business and users', text: 'Product owners needed revenue and affordable radiology; users needed to fully use the service. Designs served both.' },
    ],
    outcomes: ['Recognised with an Impact Award at GE Healthcare (2020)'],
  },
  {
    slug: 'patient-census',
    title: 'Patient Census',
    summary: 'An admission indicator that tells care providers the moment a new patient arrives.',
    company: 'GE Healthcare',
    year: '2021',
    role: 'UX Designer',
    team: 'Designers, engineers, clinical stakeholders',
    domain: 'Healthcare · Clinical workflow',
    accent: '#3fbf7f',
    nda: true,
    context:
      'Care providers need to know when a new patient is admitted to their facility, unit or bed — without hunting for that information.',
    problem:
      'There was no clear, always-current indication of new admissions, costing providers time and situational awareness.',
    responsibilities: [
      'Designed a systematic, minimal, easy-to-use feature around clinician needs',
      'Translated clinical requirements into flows, wireframes and prototypes',
    ],
    approach: [
      { title: 'Requirements', text: 'Indicate new admissions, keep data always up to date, let attended patients be cleared, and show patient location.' },
      { title: 'UX goals', text: 'Situational awareness — inform users about patient status. Better discoverability — surface what users don’t yet know.' },
      { title: 'Design & iterate', text: 'Explored notification patterns and list views, refining with clinical feedback.' },
    ],
    outcomes: ['A time-saving tool that improves clinical workflow efficiency'],
  },
]

export const principles = [
  { title: 'Understand the people', text: 'I run research or partner with researchers to ground every decision in real user behaviour.' },
  { title: 'Know the business', text: 'I align design goals with product strategy, constraints and what success looks like.' },
  { title: 'Simplify the complex', text: 'I break dense, multi-step workflows into clear, confident paths.' },
  { title: 'Design to scale', text: 'I build reusable patterns and standards so good decisions spread across products.' },
]

export const experience = [
  { company: 'Blue Yonder', role: 'Sr. UX Designer', period: '2022 — 2026', location: 'Seattle' },
  { company: 'TATA Elxsi', role: 'UX Designer', period: '2019 — 2022', location: 'Bangalore' },
  { company: 'GE Healthcare', role: 'UX Designer', period: '2018 — 2020', location: 'Bangalore' },
  { company: 'Red Baton', role: 'Sr. UI / Graphic Designer', period: '2018 — 2020', location: 'Bangalore' },
]

export const awards = [
  { year: '2023', title: 'Best Innovation Award', detail: 'Blue Yonder Crystal Ball — Smart WMS' },
  { year: '2020', title: 'Impact Award', detail: 'GE Healthcare — TeleRad' },
  { year: '2019', title: 'Gold, Big Bang Awards', detail: 'Brand identity for LevelNXT' },
]

export const toolkit = ['Figma', 'FigJam', 'Figma Make', 'v0', 'Claude', 'Design systems', 'Data visualization']
