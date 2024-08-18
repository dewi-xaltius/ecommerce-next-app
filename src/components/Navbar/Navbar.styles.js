import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #fb8500;
  padding: 10px;
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
  }

  a:hover {
    text-decoration: underline;
  }
`;
