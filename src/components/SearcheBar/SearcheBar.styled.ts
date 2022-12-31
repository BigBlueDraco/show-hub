import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

interface IStyledSearcheBarWraper {}
interface IStyledSearcheBarInput {}
interface IStyledSeacheBarIcon {}

export const StyledSearcheBarIcon = styled(BiSearchAlt)<IStyledSeacheBarIcon>`
  width: 18px;
  height: 18px;
  fill: #fff;
  flex-grow: 0;
`;

export const StyledSearcheBarWraper = styled("label")<IStyledSearcheBarWraper>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  box-sizing: border-box;
  // min-width: 300px;
  width: 100%;
  max-width: 360px;
  height: 45px;

  padding: 10px 20px;

  background: #ffccfd;
  border-radius: 25px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const StyledSearcheBarInput = styled("input")<IStyledSearcheBarInput>`
  flex-grow: 0;
  background-color: transparent;
  outline: solid 0px #fff;
  border: solid 0px transparent;
  width: 100%;
  height: 100%;
  &:focus-visible {
    border: solid 0px transparent;
    border-bottom: solid 1px #fff;
  }
  &:placeholder {
    bacground-color: red;
    color: #fff;
  }
`;
