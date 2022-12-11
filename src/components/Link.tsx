import { styled, tw } from "classname-variants/react";

export const link = tw`text-teal-600 hover:text-teal-500 hover:underline`;

export const A = styled("a", link);
