import React from 'react';
import styled from 'styled-components';
import ITheme from '../theme/Itheme';

interface HeroProps {
  theme: ITheme;
}

const Section = styled.section`
  height: 60vh;
  background:
    ${(props: HeroProps) => 
      `linear-gradient(to right, ${props.theme.hero.gradient.from}, ${props.theme.hero.gradient.to})`};
`;

const Hero: React.FunctionComponent<HeroProps> = ({theme, children}) => {
  return (
    <Section theme={theme}>
      {children}
    </Section>
  )
};

export default Hero;
