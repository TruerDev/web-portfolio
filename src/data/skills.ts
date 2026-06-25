export interface Skill {
  name: string
}

export interface SkillCategory {
  key: string
  items: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    key: 'test_automation',
    items: [
      { name: 'Python' },
      { name: 'Pytest' },
      { name: 'Allure / Report Portal' },
      { name: 'API Testing' },
      { name: 'Unit & Integration Tests' },
      { name: 'Streaming Data Validation' },
    ],
  },
  {
    key: 'ai_testing',
    items: [
      { name: 'Eval Datasets' },
      { name: 'LLM-as-Judge' },
      { name: 'Answer-Quality Regression' },
      { name: 'Hallucination Validation' },
      { name: 'OpenAI & Anthropic APIs' },
      { name: 'Multi-Agent Pipelines' },
    ],
  },
  {
    key: 'languages',
    items: [
      { name: 'Python' },
      { name: 'TypeScript / JavaScript' },
      { name: 'SQL' },
    ],
  },
  {
    key: 'data_backend',
    items: [
      { name: 'PostgreSQL' },
      { name: 'Redis' },
      { name: 'REST APIs' },
      { name: 'Webhooks' },
      { name: 'Data Pipelines' },
      { name: 'Audit Logging' },
    ],
  },
  {
    key: 'tooling',
    items: [
      { name: 'Git' },
      { name: 'GitHub Actions' },
      { name: 'Charles Proxy' },
      { name: 'Puppeteer' },
      { name: 'Zod' },
      { name: 'Pino' },
    ],
  },
]
