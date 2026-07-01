export type ProjectDemoId = 'task-board' | 'analytics' | 'catalog'

export interface Project {
  title: string
  description: string
  tags: string[]
  demo?: ProjectDemoId
  highlights: string[]
}

export const projects: Project[] = [
  {
    title: 'TaskFlow — Kanban Board',
    description:
      'A real-time task board with column workflow, priority tags, and smooth state transitions — built to mirror enterprise planning UIs.',
    tags: ['React', 'State Management', 'Framer Motion', 'UI Patterns'],
    demo: 'task-board',
    highlights: ['Add, move & complete tasks', 'Priority & status filters', 'Animated column updates'],
  },
  {
    title: 'Pulse — Analytics Dashboard',
    description:
      'Live metrics dashboard with animated counters, trend indicators, and an activity stream — showcasing data-rich frontend interfaces.',
    tags: ['React', 'Data Viz', 'Real-time UI', 'Responsive Layout'],
    demo: 'analytics',
    highlights: ['Auto-updating metrics', 'Animated chart bars', 'Live activity feed'],
  },
  {
    title: 'ShopVue — Product Catalog',
    description:
      'E-commerce style catalog with list/tile views, search, category filters, and sorting — inspired by landing page work at scale.',
    tags: ['React', 'Search & Filter', 'List/Grid Toggle', 'Accessibility'],
    demo: 'catalog',
    highlights: ['List & tile view modes', 'Live search & filters', 'Responsive product cards'],
  },
  {
    title: 'Sentiment Analysis — Twitter Data',
    description:
      'Hadoop-based academic project analyzing public sentiment from Twitter data using distributed processing pipelines.',
    tags: ['Hadoop', 'Big Data', 'Sentiment Analysis'],
    highlights: ['Distributed data processing', 'Sentiment classification', 'Trend surfacing'],
  },
]
