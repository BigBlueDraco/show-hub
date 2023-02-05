import { ReactNode } from "react";
import { StyledButton } from "./Button.styled";

export interface IButton {
  active?: boolean;
  type?: any;
  children?: ReactNode;
  [attrs: string]: any;
}

export const Button: React.FC<IButton> = ({
  active,
  children = "default btn",
  ...attrs
}) => {
  return <StyledButton {...attrs}>{children}</StyledButton>;
};
