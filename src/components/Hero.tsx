import React from 'react';
import styled from 'styled-components';
import ITheme from '../theme/Itheme';

interface HeroProps {
  theme: ITheme;
}

const Section = styled.section`
  height: 75vh;
  /* width: 100%; */
  background-color: ${(props: HeroProps) => props.theme.secondary.color};
`;

const Description = styled.div`
  flex: 1;
  color: white;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 5rem;
`;

const Hero: React.FunctionComponent<HeroProps> = ({ theme, children }) => {
  return (
    <Section theme={theme}>
      {children}
      <Description>
        <p>I'm Will</p>
        <p>A Fullstack Software Developer</p>
        <p>From Montreal, Canada</p>
      </Description>
    </Section>
  );
};

export default Hero;
