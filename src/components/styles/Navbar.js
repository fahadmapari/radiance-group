import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 2rem ${({ theme }) => theme.paddings.sides};
  background: white;
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
  width: 18rem;
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

export const Navlink = styled.a`
  font-size: 2rem;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavCompaines = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  position: absolute;
  background: #292929;
  padding: 2rem 1rem;
  border-radius: 15px;
  margin-top: 10px;
  transform: scaleY(0);
  transform-origin: top;
  transition: all 150ms ease-in;
`;

export const CompanyNavlinkConatiner = styled(NavlinkConatiner)`
  &:hover ${NavCompaines} {
    transform: scaleY(1);
  }
`;

export const NavCompany = styled.a`
  margin: 1rem auto;
  color: white;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
