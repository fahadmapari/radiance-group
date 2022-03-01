import styled from "styled-components";

export const PageBannerContainer = styled.div`
  background: url(${(props) => props.background});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
  min-height: 35vh;
	position: relative;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

  &::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: black;
      opacity: 0.7;
      top: 0;
      left: 0;
  }
`;

export const BannerHeading = styled.h2`
	position: relative;
	z-index: 2;
	font-size: 5rem;
	font-weight: 600;
`;

export const BannerSubHeading = styled.p`
  position: relative;
	z-index: 2;
	font-size: 3rem;
	font-weight: 300;
`;