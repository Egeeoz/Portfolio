import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

// Styling for the navbar and its elements

export const Title = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  margin-top: 1.5rem;
  text-decoration: underline;
`;

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #000;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 2rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #0c99ba;
    transition: 0.2s ease-in-out;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 90%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  margin-right: 1.5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
