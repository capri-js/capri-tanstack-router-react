import { styled, tw } from "classname-variants/react";
import { ReactNode, useState } from "react";
import { Box } from "./Box.jsx";
import { Button } from "./Button.jsx";

import StaticContent from "./StaticContent.lagoon.jsx";

type Props = {
  title: string;
  children?: ReactNode;
};
export default function Expandable({ title, children }: Props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box>
      <StaticContent>
        This is static content inside an island. We call this a lagoon.
      </StaticContent>
      <Toggle expanded={expanded} onClick={() => setExpanded(!expanded)}>
        {title}
      </Toggle>
      <Content expanded={expanded}>
        <StaticContent>
          This a second lagoon. Below you see the children that were passed to
          the Expandable island:
        </StaticContent>
        {children}
      </Content>
    </Box>
  );
}

const Toggle = styled(Button, {
  base: tw`after:content-['>'] after:inline-block after:ml-2 after:transition-all`,
  variants: {
    expanded: {
      true: tw`after:rotate-90`,
    },
  },
});

const Content = styled("div", {
  base: tw`overflow-hidden my-2`,
  variants: {
    expanded: {
      false: tw`h-0`,
    },
  },
});
