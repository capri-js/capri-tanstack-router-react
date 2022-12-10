import { routeConfig as rootRoute } from './__root'
import { routeConfig as indexRoute } from './index'
import { routeConfig as islandsRoute } from './islands'
import { routeConfig as postsRoute } from './posts'
import { routeConfig as previewRoute } from './preview'
import { routeConfig as postsIndexRoute } from './posts/index'
import { routeConfig as postspostIdRoute } from './posts/$postId'

export const routeConfig = rootRoute.addChildren([
  indexRoute,
  islandsRoute,
  postsRoute.addChildren([
    postsIndexRoute,
    postspostIdRoute
  ]),
  previewRoute
])
export type __GeneratedRouteConfig = typeof routeConfig