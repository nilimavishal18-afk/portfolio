export const profile = {
  name: 'Nilima Vishal',
  role: 'Senior UX Designer',
  location: 'Seattle, WA',
  email: 'nilima.vishal24@gmail.com',
  linkedin: 'https://www.linkedin.com/',
  summary:
    'I design enterprise products across supply chain, healthcare and B2B platforms — turning complex workflows into calm, usable experiences through research, interaction design, prototyping and scalable design systems.',
}

export const stats = [
  { value: '8+', label: 'Years designing products' },
  { value: '4', label: 'Industries shipped in' },
  { value: '3', label: 'Design awards' },
]

export interface Project {
  title: string
  company: string
  year: string
  tags: string[]
  blurb: string
  accent: string
}

export const projects: Project[] = [
  {
    title: 'Smart WMS',
    company: 'Blue Yonder',
    year: '2023',
    tags: ['Supply chain', 'UX strategy', 'Award winner'],
    blurb:
      'Reimagined the Warehouse Management System to simplify dense operator workflows. Won Best Innovation at Blue Yonder Crystal Ball 2023.',
    accent: '#ff5a4e',
  },
  {
    title: 'Agent Marketplace',
    company: 'Blue Yonder',
    year: '2024–26',
    tags: ['AI', 'Platform', 'Interaction design'],
    blurb:
      'End-to-end UX for discovering, configuring and deploying AI agents across the supply chain suite.',
    accent: '#7c5cff',
  },
  {
    title: 'Orchestrator',
    company: 'Blue Yonder',
    year: '2024–26',
    tags: ['Workflow', 'Data viz', 'Design system'],
    blurb:
      'A control surface for orchestrating multi-step supply chain processes, backed by new data visualization standards.',
    accent: '#0fa3b1',
  },
  {
    title: 'Teleradiology Platform',
    company: 'GE Healthcare',
    year: '2019–20',
    tags: ['Healthcare', 'Collaboration', 'Impact award'],
    blurb:
      'Helped radiologists share reports and request second opinions remotely — recognized with an Impact Award.',
    accent: '#f2a541',
  },
  {
    title: 'ICU Admission Indicator',
    company: 'GE Healthcare',
    year: '2019',
    tags: ['Clinical', 'Dashboards'],
    blurb:
      'An at-a-glance patient admission indicator designed with clinicians for high-pressure ICU workflows.',
    accent: '#3fbf7f',
  },
  {
    title: 'LevelNXT Identity',
    company: 'Red Baton',
    year: '2018',
    tags: ['Branding', 'Visual design', 'Big Bang winner'],
    blurb:
      'Brand identity and digital presence for LevelNXT — winner at the Big Bang Awards.',
    accent: '#e8488a',
  },
]

export interface Job {
  period: string
  company: string
  role: string
  points: string[]
}

export const experience: Job[] = [
  {
    period: 'Aug 2022 — May 2026',
    company: 'Blue Yonder, Seattle',
    role: 'Sr. UX Designer',
    points: [
      'Owned UX strategy and execution for WMS, Agent Marketplace and Orchestrator.',
      'Partnered with PM, Engineering and Research to ship solutions aligned with business goals.',
      'Evolved the design system with reusable patterns, mobile-first guidelines and data viz standards.',
    ],
  },
  {
    period: 'Jun 2019 — Jun 2022',
    company: 'TATA Elxsi, Bangalore',
    role: 'UX Designer',
    points: [
      'Designed a WiFi management tool and an ACI set-top box interface.',
      'Guided engineering through implementation to ensure high-quality delivery.',
    ],
  },
  {
    period: 'Sep 2018 — Nov 2020',
    company: 'GE Healthcare (Onsite), Bangalore',
    role: 'UX Designer',
    points: [
      'Designed an ICU patient admission indicator and a teleradiology platform.',
      'Worked with clinical stakeholders to simplify complex healthcare workflows.',
    ],
  },
  {
    period: 'Sep 2018 — Nov 2020',
    company: 'Red Baton, Bangalore',
    role: 'Sr. UI / Graphic Designer',
    points: [
      'Delivered multi-platform websites, branding and digital experiences from concept to launch.',
    ],
  },
]

export const skills = {
  craft: [
    'Product Design',
    'UX Strategy',
    'Information Architecture',
    'User Flows',
    'Wireframing',
    'Prototyping',
    'Design Systems',
    'Data Visualization',
  ],
  tools: ['Figma', 'FigJam', 'Figma Make', 'v0 (Vercel)', 'Claude', 'Sketch', 'Adobe CC'],
}

export const awards = [
  { title: 'Best Innovation Award', detail: 'Blue Yonder Crystal Ball 2023 — Smart WMS' },
  { title: 'Big Bang Awards Winner', detail: 'Brand identity for LevelNXT' },
  { title: 'Impact Award', detail: 'Teleradiology, GE Healthcare' },
]

export const education = {
  school: 'National Institute of Fashion Technology, Mumbai',
  degree: 'B.Des in Communication Design',
  years: '2013 — 2017',
}
