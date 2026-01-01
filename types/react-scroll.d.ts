declare module "react-scroll" {
  import { ComponentType, ReactNode } from "react";

  export interface ScrollLinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean | string;
    duration?: number;
    offset?: number;
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
  }

  export const Link: ComponentType<ScrollLinkProps>;
}
