import type { __GeneratedRouteConfig } from './routeConfig'

import { routeConfig as rootRoute } from './__root.client'
import { routeConfig as indexRoute } from './index.client'
import { routeConfig as islandsRoute } from './islands.client'
import { routeConfig as postsRoute } from './posts.client'
import { routeConfig as previewRoute } from './preview.client'
import { routeConfig as postsIndexRoute } from './posts/index.client'
import { routeConfig as postspostIdRoute } from './posts/$postId.client'

export const routeConfigClient = rootRoute.addChildren([
  indexRoute,
  islandsRoute,
  postsRoute.addChildren([
    postsIndexRoute,
    postspostIdRoute
  ]),
  previewRoute
]) as __GeneratedRouteConfig