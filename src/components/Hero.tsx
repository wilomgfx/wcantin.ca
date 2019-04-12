import React from 'react';
import styled from 'styled-components';
import ITheme from '../theme/Itheme';
import Me from '../images/me.jpg';
// import MyFace from '../images/my-face.png';

interface HeroProps {
  theme: ITheme;
}

const Section = styled.section`
  height: 45vh;
  background:
    ${(props: HeroProps) => 
      `linear-gradient(to right, ${props.theme.hero.gradient.from}, ${props.theme.hero.gradient.to})`};
  margin-bottom: 100px;
`;

const PortraitContainer = styled.div`
  display: flex;
  position: absolute;
`;

const Portrait = styled.img`
  object-fit: cover;
  max-width: 300px;
  height: auto;
  margin-left: 5rem;
  position: relative;
  top: 70px;
  left: 50px;
  border-radius: 50px;
  border-color: black;
  border-width: 5px;
  border-style: solid;
  @media (max-width: 550px) {
    left: 0;
    top: 20px;
  }
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
      <PortraitContainer>
        <Portrait src={Me}></Portrait>
        <Description>
          <p>Fully commited Fullstack developer from Montreal, Canada</p>
          <p>Graduating from my undergrad in Software engineering in summer 2020!</p>
        </Description>
      </PortraitContainer>
    </Section>
  )
};

export default Hero;
