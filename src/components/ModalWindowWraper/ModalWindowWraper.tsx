import React from "react";
import {
  StyledBackdrop,
  StyledModalWindowWraper,
} from "./ModalWindowWraper.styled";

interface IModalWindowWraper {
  children?: React.ReactNode;
}
export const ModalWindowWraper: React.FC<IModalWindowWraper> = ({
  children,
}) => {
  return (
    <StyledBackdrop>
      <StyledModalWindowWraper>{children}</StyledModalWindowWraper>
    </StyledBackdrop>
  );
};
