import React from "react";
import left from "../assets/icons/left.png";
import right from "../assets/icons/right.png";
import styled from "styled-components";
import Carousel, { consts } from "react-elastic-carousel";

function SliderArrow({ type, onClick, isEdge }) {
  const pointer = type === consts.PREV ? left : right;
  return (
    <Button onClick={onClick} disabled={isEdge}>
      <img src={pointer} alt="" />
    </Button>
  );
}

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export default SliderArrow;
