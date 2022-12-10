import { useEffect, useState } from "react";
import { Box } from "./Box";

export const options = {
  media: "(max-width:500px)",
};

export default function MediaQuery() {
  const [content, setContent] = useState(
    "Resize your browser below 500px to hydrate this island."
  );
  useEffect(() => {
    setContent("The island has been hydrated.");
  }, []);
  return <Box>{content}</Box>;
}
