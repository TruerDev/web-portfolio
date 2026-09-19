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
      { name: 'TypeScript / JavaScript (Node.js)' },
      { name: 'Python' },
      { name: 'SQL' },
    ],
  },
  {
    key: 'data_backend',
    items: [
      { name: 'PostgreSQL' },
      { name: 'Redis' },
      { name: 'BullMQ' },
      { name: 'Fastify' },
      { name: 'REST APIs' },
      { name: 'WebSockets' },
      { name: 'Zod' },
      { name: 'Drizzle ORM' },
      { name: 'Pino' },
    ],
  },
  {
    key: 'ai_llm',
    items: [
      { name: 'Claude & OpenAI APIs' },
      { name: 'MCP' },
      { name: 'Multi-Agent Orchestration' },
      { name: 'Eval Pipelines' },
      { name: 'LLM-as-Judge' },
    ],
  },
  {
    key: 'automation',
    items: [
      { name: 'Puppeteer' },
      { name: 'Chrome Extensions (MV3)' },
      { name: 'AdsPower / Dolphin / Octo' },
    ],
  },
  {
    key: 'frontend',
    items: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TailwindCSS' },
      { name: 'Recharts' },
      { name: 'Three.js' },
    ],
  },
  {
    key: 'tooling',
    items: [
      { name: 'Git' },
      { name: 'GitHub Actions' },
      { name: 'Railway' },
      { name: 'Vercel' },
      { name: 'Unit & Integration Tests' },
    ],
  },
]
