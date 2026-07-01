import type { ProjectDemoId } from '../data/projects'
import { TaskBoardDemo } from './demos/TaskBoardDemo'
import { AnalyticsDashboardDemo } from './demos/AnalyticsDashboardDemo'
import { ProductCatalogDemo } from './demos/ProductCatalogDemo'

interface LiveDemoProps {
  demoId: ProjectDemoId
}

export function LiveDemo({ demoId }: LiveDemoProps) {
  switch (demoId) {
    case 'task-board':
      return <TaskBoardDemo />
    case 'analytics':
      return <AnalyticsDashboardDemo />
    case 'catalog':
      return <ProductCatalogDemo />
    default:
      return null
  }
}
