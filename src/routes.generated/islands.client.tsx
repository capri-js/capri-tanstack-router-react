import { lazy } from '@tanstack/react-router';
import { routeConfig as parentRouteConfig } from "./__root.client";
import CounterIsland from "../components/Counter.island.jsx";
import ExpandableIsland from "../components/Expandable.island.jsx";
import MediaQueryIsland from "../components/MediaQuery.island.jsx";
import { ServerContent } from "../components/ServerContent";
const routeConfig = parentRouteConfig.createRoute({
  path: "islands",
  component: lazy(() => import('./islands-component').then(d => ({
    default: d.component
  })))
});
export function Islands() {
  return <main>
      <section>This page is static, but contains some dynamic parts.</section>
      <section>
        Here is a simple counter: <CounterIsland />
      </section>
      <section>
        And here is another one, independent from the one above:{" "}
        <CounterIsland start={100} />
      </section>
      <ExpandableIsland title="Click to expand">
        This island receives children as prop. They are only rendered upon build
        time.
        <ServerContent>
          The code for <code>ServerContent</code> won't show up in the client
          bundle.
        </ServerContent>
      </ExpandableIsland>
      <MediaQueryIsland />
    </main>;
}
export { routeConfig, routeConfig as islandsRoute };