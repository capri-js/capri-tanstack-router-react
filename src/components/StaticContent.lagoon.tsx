import { ReactNode } from "react";
import { Box } from "./Box";

type Props = {
  children?: ReactNode;
};

export default function StaticContent({ children }: Props) {
  console.log(
    "Rendering StaticContent. This should only happen during build or in SPA mode."
  );
  return <Box>{children}</Box>;
}
