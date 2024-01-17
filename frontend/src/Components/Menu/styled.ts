import styled from "styled-components";
import { colors, fonts } from "@/globalStyle.ts";

export const MenuStyled = styled.div`
  padding: 14px 10px;
  width: 260px;
  min-height: 100dvh;
  background-color: black;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: white;
`;

export const NewChatStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 6px 10px;
  border-radius: 6px;
  width: 100%;
  height: 40px;
  background-color: black;
  transition: background-color 0.1s ease-in;
  cursor: pointer;

  &:hover {
    background-color: ${colors.grayHover};
  }

  p {
    color: ${colors.whiteMain};
    font-family: ${fonts.Kanit};
    font-size: 14px;
    font-weight: 400;
    margin-left: 6px;
  }
`;

export const ButtonWriteSVG = styled.button`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 100%;
  margin-left: auto;
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const TextApparitionHover = styled.div<{ $isHover: boolean }>`
  display: ${({ $isHover }) => ($isHover ? "flex" : "none")};
  position: absolute;
  left: calc(100% + 20px);
  width: max-content;
  padding: 6px 9px;
  background-color: black;
  border-radius: 6px;

  span {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-75%, -50%) rotate(-90deg);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 8px solid black;
  }

  p {
    margin-left: 0;
  }
`;
