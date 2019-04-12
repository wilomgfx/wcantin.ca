import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  siteTitle: string;
}

const HeaderWrapper = styled.div`
  background: transparent;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 96rem;
  padding: 1rem;
  word-wrap: break-word;
  display: flex;
  flex:1;
  justify-content: center;
  align-items: center;
`;

const SiteTitle = styled.h1`
  margin: 0;
  line-height: 0.5;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const StyledTitleLink = styled(StyledLink)`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LinksContainer = styled.nav`
  flex:1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Header: React.FunctionComponent<HeaderProps> = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <SiteTitle>
        <StyledLink
          to="/"
        >
          <p>William</p>
          <p>Cantin</p>
        </StyledLink>
      </SiteTitle>
      <LinksContainer>
        <StyledLink to="/blog">Blog</StyledLink>
        {/* <StyledLink to="/projects">Projects</StyledLink> */}
        {/* <StyledLink to="/about">About</StyledLink> */}
        {/* <StyledLink to="/contact">Contact me</StyledLink> */}
      </LinksContainer>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
