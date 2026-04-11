export interface Skill {
  name: string
}

export interface SkillCategory {
  key: string
  items: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    key: 'languages',
    items: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'SQL' },
      { name: 'HTML/CSS' },
      { name: 'Dart' },
    ],
  },
  {
    key: 'frontend',
    items: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'shadcn/ui' },
      { name: 'Recharts' },
      { name: 'next-intl' },
      { name: 'Framer Motion' },
      { name: 'Flutter' },
      { name: 'Chrome Extensions (MV3)' },
    ],
  },
  {
    key: 'backend',
    items: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Fastify' },
      { name: 'PostgreSQL' },
      { name: 'BullMQ' },
      { name: 'Redis' },
      { name: 'Puppeteer' },
      { name: 'Drizzle ORM' },
      { name: 'Zod' },
      { name: 'WebSocket' },
      { name: 'REST APIs' },
    ],
  },
  {
    key: 'tools',
    items: [
      { name: 'Docker' },
      { name: 'Git' },
      { name: 'Railway' },
      { name: 'Netlify' },
      { name: 'Vercel' },
      { name: 'AdsPower' },
      { name: 'PyInstaller' },
      { name: 'Godot' },
      { name: 'Linux' },
    ],
  },
  {
    key: 'ai',
    items: [
      { name: 'Claude API' },
      { name: 'GPT-4o' },
      { name: 'ML Pipelines' },
      { name: 'Prompt Engineering' },
    ],
  },
]
