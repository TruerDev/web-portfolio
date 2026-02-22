export interface Skill {
  name: string
  icon?: string
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
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
      { name: 'Flutter' },
      { name: 'Chrome Extensions' },
    ],
  },
  {
    key: 'backend',
    items: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Fastify' },
      { name: 'PostgreSQL' },
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
      { name: 'AdsPower' },
      { name: 'Linux' },
    ],
  },
  {
    key: 'ai',
    items: [
      { name: 'Claude API' },
      { name: 'Mistral AI' },
      { name: 'GPT-4o' },
      { name: 'ML Pipelines' },
      { name: 'Prompt Engineering' },
    ],
  },
]
