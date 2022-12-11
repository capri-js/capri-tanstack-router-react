import {
  Link,
  MakeLinkOptions,
  RegisteredAllRouteInfo,
} from "@tanstack/react-router";
import { styled, tw } from "classname-variants/react";

export const link = tw`text-teal-600 hover:text-teal-500 hover:underline`;

export const A = styled("a", link);

export function NavLink<TTo extends string = ".">(
  props: MakeLinkOptions<RegisteredAllRouteInfo, "/", TTo>
) {
  return (
    <Link
      className="hover:text-teal-600"
      activeProps={{
        className: "font-bold",
      }}
      {...(props as any)}
    />
  );
}
