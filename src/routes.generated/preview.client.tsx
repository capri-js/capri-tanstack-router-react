import { lazy } from '@tanstack/react-router';
import { routeConfig as parentRouteConfig } from "./__root.client";
const routeConfig = parentRouteConfig.createRoute({
  path: "preview",
  component: lazy(() => import('./preview-component').then(d => ({
    default: d.component
  }))),
  validateSearch: (searchParams: Record<string, unknown>) => ({
    slug: (searchParams.slug as string) ?? "/"
  })
});
export { routeConfig, routeConfig as previewRoute };