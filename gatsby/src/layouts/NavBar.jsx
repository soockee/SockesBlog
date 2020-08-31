import React,  { useState } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import SocialMedia from '../components/SocialMedia';


const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const SocialWrapper = styled.div`
  @media  (max-width: ${props => props.theme.breakpoints.ss}) {
    display:none;
  }
  @media  (max-width: ${props => props.theme.breakpoints.xs}) {
    display:none;
  }
  @media  (max-width: ${props => props.theme.breakpoints.xxs}) {
    display:none;
  }
`;
const Nav = styled.nav`
  @media  (max-width: ${props => props.theme.breakpoints.xxs}) {
    font-size: 1.0rem;
    justify-content: start;
    margin-left: 0rem;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.4rem;
  align-items: center;
  div a {
    margin-left: 1rem;
    transition: all ${props => props.theme.transitions.default.duration};
    
  }
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.black.base};
    }
  }
`;

const NavBar = () => {
  return (
    <Headroom calcHeightOnResize disableInlineStyles>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <SocialWrapper>
          <SocialMedia></SocialMedia>
        </SocialWrapper>
      </Nav>
    </Headroom>
  );
};

export default NavBar;
// instagramURL: "https://www.instagram.com/sockeod/",
// githubURL: "https://github.com/Soockee",
// stackoverflowURL: "https://stackoverflow.com/users/7383590/socke",