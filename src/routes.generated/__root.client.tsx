import { lazy } from '@tanstack/react-router';
import { createRouteConfig, Link, Outlet, useRouter } from "@tanstack/react-router";
const routeConfig = createRouteConfig({
  component: Root
});
function Root() {
  const router = useRouter();
  return <div className="p-2">
      <div className="flex gap-2 text-lg mb-4">
        <Link to="/" activeProps={{
        className: "font-bold"
      }} activeOptions={{
        exact: true
      }}>
          Home
        </Link>{" "}
        <Link to="/posts" activeProps={{
        className: "font-bold"
      }}>
          Posts
        </Link>
        <Link to="/islands" activeProps={{
        className: "font-bold"
      }}>
          Islands
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>;
}
export { routeConfig, routeConfig as rootRoute };