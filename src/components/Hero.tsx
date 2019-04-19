import React from 'react';
import styled from 'styled-components';
import ITheme from '../theme/Itheme';
import HeroImg from '../images/hero-img.png';

interface HeroProps {
  theme: ITheme;
}

const Section = styled.section`
  height: 75vh;
  /* width: 100%; */
`;

const HeroImage = styled.div`
  height: 75vh;
  background-image: url(${HeroImg});
  background-repeat: no-repeat;  
  background-position: 0% 0%;
  background-size: 100% 100%;
  /* background-attachment: fixed; */
  /* background-position: center;  */
  box-shadow:inset 0 0 0 2000px rgba(10.2%, 13.3%, 14.5%, 50%);
`;

const Description = styled.div`
  flex:1;
  color: white;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 5rem;
`;

const Hero: React.FunctionComponent<HeroProps> = ({theme, children}) => {
  return (
    <Section theme={theme}>
      {children}
        <HeroImage>
          <Description>
            <p>I'm Will</p>
            <p>A Fullstack Software Developer</p>
            <p>From Montreal, Canada</p>
          </Description>
        </HeroImage>
    </Section>
  )
};

export default Hero;
