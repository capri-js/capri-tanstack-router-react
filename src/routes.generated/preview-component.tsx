import { useMatch } from "@tanstack/react-router";
import { useEffect } from "react";
import { routeConfig } from "../routes.generated/preview";
function Preview() {
  const {
    search,
    navigate
  } = useMatch(routeConfig.id);
  useEffect(() => {
    const to = (search.slug as any);
    console.log("Navigating to", to);
    navigate({
      to
    });
  }, []);
  return null;
}
export const component = Preview;