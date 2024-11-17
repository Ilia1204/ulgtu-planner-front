import { adminRoutes } from './admin.routes'
import { scheduleStackRoutes } from './stacks/schedule-stack/schedule-stack.routes'

export const routes = [...scheduleStackRoutes, ...adminRoutes]
