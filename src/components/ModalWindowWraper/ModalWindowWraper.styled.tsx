import styled from "styled-components";

export const StyledBackdrop = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  background: #00000066;
  width: 100%;
  height: 100%;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  ${({ theme: { media } }) =>
    media.mob +
    `{
    align-items: center;
  }`}
`;

export const StyledModalWindowWraper = styled("div")`
  min-width: 320px;
  max-width: 480px;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 32px 32px;
  z-index: 100;

  ${({ theme: { media } }) =>
    media.tablet +
    `{
      border-radius: 20px;
      max-width: 548px;
      height: auto;
    }` +
    media.desk +
    `{
      padding: 48px 48px;
      max-width: 768px;
    }`}
`;
