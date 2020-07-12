import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import { SocialIcon } from 'react-social-icons';


const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.4rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.black.base};
    }
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
    </Nav>
    <SocialMedia>
      <SocialIcon url="https://www.instagram.com/sockeod/" bgColor="#333438" />
      <SocialIcon url="https://github.com/Soockee" bgColor="#333438"/>
    </SocialMedia>
  </Headroom>
);

export default NavBar;
// instagramURL: "https://www.instagram.com/sockeod/",
// githubURL: "https://github.com/Soockee",
// stackoverflowURL: "https://stackoverflow.com/users/7383590/socke",