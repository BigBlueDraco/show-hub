import { ReactNode } from "react";

export interface IButton {
  active?: string;
  type: any;
  children?: ReactNode;
  [attrs: string]: any;
}

export const Button: React.FC<IButton> = ({
  active,
  children = "default btn",
  ...attrs
}) => {
  return <button {...attrs}>{children}</button>;
};
