import styled from 'styled-components';

export const Footer = styled.footer`
`;  

export const FooterContentContainer = styled.div`
position: relative;
  background: #3A3A3A;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem ${({ theme }) => theme.paddings.sides};
`;

export const FooterContent = styled.div`
  margin: 2rem 0rem;

`;

export const FooterHeading = styled.h2`
  font-size: 3rem;
  font-weight: 500;
`;

export const FooterList = styled.ul`
  list-style: none;

`;

export const FooterItem = styled.li`
  font-size: 2rem;
	cursor: pointer;
	transition: all 100ms ease-out;

	&:hover{
		color: ${({ theme }) => theme.colors.primary};
	}
`;

export const FooterImage = styled.img`
  position: absolute;
  right: 5%;
  bottom: 0%;
  opacity: 0.5;
  width: 30%;
`;