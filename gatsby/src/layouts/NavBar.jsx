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

const Nav = styled.nav`
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
  @media only screen (max-width: ${props => props.theme.breakpoints.m}) {
    div.a {
      display:none;
    }
  }

  @media only screen (max-width: ${props => props.theme.breakpoints.s}) {
    div a {
      display:none;
    }
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
        <SocialMedia></SocialMedia>
      </Nav>
    </Headroom>
  );
};

export default NavBar;
// instagramURL: "https://www.instagram.com/sockeod/",
// githubURL: "https://github.com/Soockee",
// stackoverflowURL: "https://stackoverflow.com/users/7383590/socke",