import styled from "styled-components";

export const Container = styled("div")`
  margin-left: auto;
  margin-right: auto;

  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  ${({ theme: { media } }) =>
    media.mob +
    `{
      max-width: 480px;
    }` +
    media.tablet +
    `{
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
    }` +
    media.desk +
    `{
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    min-width: 1280px;
    max-width: 1440px;
    }`}
`;
