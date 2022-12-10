import { createReactRouter } from "@tanstack/react-router";
import { routeConfig } from "./routes.generated/routeConfig";
import "./main.css";

export const createRouter = () =>
  createReactRouter({
    routeConfig,
    basepath: import.meta.env.BASE_URL.slice(1),
  });

declare module "@tanstack/react-router" {
  interface RegisterRouter {
    router: ReturnType<typeof createRouter>;
  }
}
