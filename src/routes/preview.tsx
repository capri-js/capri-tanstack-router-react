import { useMatch } from "@tanstack/react-router";
import { useEffect } from "react";
import { routeConfig } from "../routes.generated/preview";

routeConfig.generate({
  component: Preview,
  validateSearch: (searchParams: Record<string, unknown>) => ({
    slug: (searchParams.slug as string) ?? "/",
  }),
});

function Preview() {
  const { search, navigate } = useMatch(routeConfig.id);
  useEffect(() => {
    const to = search.slug as any;
    console.log("Navigating to", to);
    navigate({ to });
  }, []);
  return null;
}
