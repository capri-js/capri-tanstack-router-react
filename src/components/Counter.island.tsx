import { styled, tw } from "classname-variants/react";
import { useState } from "react";
import { Button } from "./Button";

type Props = {
  start?: number;
};

export default function Counter({ start = 0 }: Props) {
  const [counter, setCounter] = useState(start);
  return (
    <Container data-testid="counter">
      <Button onClick={() => setCounter((c) => c - 1)}>-</Button>
      <span>{counter}</span>
      <Button onClick={() => setCounter((c) => c + 1)}>+</Button>
    </Container>
  );
}

export const Container = styled("div", {
  base: tw`inline-flex gap-2`,
  variants: {},
});
