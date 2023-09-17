import styled from "styled-components";
import { NavLink as StyledLink } from "react-router-dom";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
  display: flex;
  gap: 30px;
  background: linear-gradient(90deg, rgba(14,9,115,1) 0%, rgba(10,10,55,1) 50%, rgba(16,16,17,1) 100%);
  padding: 30px;
`;

export const Navigation = styled.nav`
  margin-right: auto;
  margin-left: auto;
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 70px;
  list-style: none;
`;

export const NavLink = styled(StyledLink)`
  font-family: Manrope;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  color: #ffffff;

  &.active {
    color: #cdf00a;
  }

  &:hover,
  &:focus {
    color: #cdf00a;
    transition: 0,5s;
  }
`;
