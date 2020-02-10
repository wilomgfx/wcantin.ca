import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.svg';
import ITheme from '../theme/Itheme';

interface HeaderProps {
  theme: ITheme;
}

const HeaderWrapper = styled.div`
  background-color: ${(props: HeaderProps) => props.theme.secondary.color};
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 96rem;
  padding: 1rem;
  height: 80px;
  word-wrap: break-word;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 100px;
  height: 50px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

const LinksContainer = styled.nav`
  flex: 2;
  display: flex;
  align-items: center;
`;
const LogoContainer = styled.nav`
  flex: 1;
  display: flex;
  background-color: ${(props: HeaderProps) => props.theme.primary.color};
`;

const Header: React.FunctionComponent<HeaderProps> = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <LogoContainer>
        <StyledLink to="/">
          <StyledLogo src={Logo} />
        </StyledLink>
      </LogoContainer>
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
