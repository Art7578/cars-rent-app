import styled from "styled-components";
import { NavLink as StyledLink } from "react-router-dom";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: baseline;
  gap: 30px;
  background: linear-gradient(
    90deg,
    rgba(14, 9, 115, 1) 0%,
    rgba(10, 10, 55, 1) 50%,
    rgba(16, 16, 17, 1) 100%
  );
  padding: 30px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    gap: 10px;
  }
`;

export const Navigation = styled.nav`
  margin-right: auto;
  margin-left: auto;
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 90px;
  list-style: none;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    gap: 30px;
  }
`;

export const NavLink = styled(StyledLink)`
  font-family: Manrope;
  font-weight: 700;
  font-size: 22px;
  text-decoration: none;
  color: #ffffff;

  &.active {
    color: #cdf00a;
  }

  &:hover,
  &:focus {
    color: #cdf00a;
    transition: 0.5s;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  gap: 20px;
  list-style: none;
`;

export const NavButton = styled(StyledLink)`
  font-family: Manrope;
  font-weight: 600;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  background: #0e1cd9;
  border: 1px solid transparent;
  color: #ffffff;

  &:hover {
    color: #cdf00a;
    transition: 0.5s;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;