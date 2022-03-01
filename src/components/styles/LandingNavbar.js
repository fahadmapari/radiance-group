import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  position: ${(props) => (props.top ? "absolute" : "static")};
  top: 0;
  left: 0;
  padding: 2rem ${({ theme }) => theme.paddings.sides};
  background: #1a1a1a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 8rem;
`;

export const BrandName = styled.p`
  font-size: 2rem;
  font-weight: 800;
  margin-left: 1.2rem;
`;

export const Navlinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const NavlinkConatiner = styled.li`
  margin-left: 1.5rem;
`;

export const Navlink = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: white;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
