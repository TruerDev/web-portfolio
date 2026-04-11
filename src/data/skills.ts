export interface Skill {
  name: string
}

export interface SkillCategory {
  key: string
  items: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    key: 'core',
    items: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'SQL' },
    ],
  },
  {
    key: 'backend',
    items: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Fastify' },
      { name: 'PostgreSQL' },
      { name: 'Redis' },
      { name: 'BullMQ' },
      { name: 'WebSocket' },
      { name: 'REST APIs' },
    ],
  },
  {
    key: 'frontend',
    items: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Recharts' },
      { name: 'shadcn/ui' },
      { name: 'Chrome Extensions (MV3)' },
    ],
  },
  {
    key: 'tools',
    items: [
      { name: 'Docker' },
      { name: 'Git' },
      { name: 'Linux' },
      { name: 'Railway' },
      { name: 'Vercel' },
      { name: 'GitHub Actions' },
      { name: 'PyInstaller' },
    ],
  },
  {
    key: 'ai',
    items: [
      { name: 'Claude API' },
      { name: 'GPT-4o' },
      { name: 'Puppeteer' },
      { name: 'Prompt Engineering' },
      { name: 'BullMQ Orchestration' },
    ],
  },
]
