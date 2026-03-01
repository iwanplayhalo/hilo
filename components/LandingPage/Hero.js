import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Hero = ({text}) => {
  return (
    <LandingContainer>
      <LeftBar />
      <CenterBar />
      <BackgroundText style={{fontFamily: 'Arial',fontSize: '180px', opacity: 0.3 }}>PREDICTIONS</BackgroundText>
      <BackgroundText style={{fontSize: '200px', top: '15%', left:'50%', opacity: 0.6 }}>HIGHER</BackgroundText>
      <BackgroundText style={{ top: '35%', left: '-8%', fontSize: '160px', opacity: 0.2 }}>LOWER</BackgroundText>
      <BackgroundText style={{ top: '35%', right: '30%', fontFamily: 'Arial', fontSize: '220px', opacity: 0.67 }}>GUESS</BackgroundText>
      <BackgroundText style={{fontFamily: 'fantasy', font: 'Blippo', top: '88%', left: '42%', fontSize: '190px', opacity: 0.3 }}>MARKETS</BackgroundText>
      <BackgroundText style={{ top: '60%', left: '20%', fontSize: '150px', opacity: 0.5 }}>KALSHI</BackgroundText>
      <BackgroundText style={{ top: '63%', left: '60%', fontSize: '150px', rotate:'180deg', opacity: 0.7 }}>
        <Link href="/about" style={{ color: 'black'}}>
          sign-in
        </Link>
      </BackgroundText>

      <Title>
        <span className="word-higher" style={{ transform: 'translateX(150px) rotate(-7deg)' }}>HIGHER</span>
        <span style={{ transform: 'translateX(450px) translateY(5px) rotate(5deg)' }}>OR</span>
        <span className="word-lower" style={{ transform: 'translateX(440px)rotate(-4deg)' }}>LOWER</span>
      </Title>
      
      <PlayButton style={{ right: '0%', top: '82%'} }>
        <Link href="/signin" style={{ color: 'black', textDecoration: 'none' }}>PLAY<br/>NOW</Link>
      </PlayButton>
      
      <Arrow style={{ position: 'absolute', top: '40%', right: '3%', transform: 'rotate(45deg)' }} />
      <Arrow style={{ position: 'absolute', top: '60%', right: '3%', transform: 'rotate(45deg)' }} />
      <Arrow style={{ position: 'absolute', top: '52%', right: '3%', transform: 'rotate(45deg)' }} />
      <Arrow style={{ position: 'absolute', top: '70%', right: '3%', transform: 'rotate(45deg)' }} />

      <Arrow style={{ position: 'absolute', top: '45%', right: '7%', transform: 'rotate(45deg)' }} />
      <Arrow style={{ position: 'absolute', top: '56%', right: '7%', transform: 'rotate(45deg)' }} />
      <Arrow style={{ position: 'absolute', top: '67%', right: '7%', transform: 'rotate(45deg)' }} />
      <Arrow style={{ position: 'absolute', top: '77%', right: '7%', transform: 'rotate(45deg)' }} />

      <RulesCard>
        <h2>HOW TO PLAY</h2>
        <ol>
          <li style={{ transform: 'translateX(5px) rotate(-1deg)' }}>SEE LEFT %</li>
          <li style={{ transform: 'translateX(-8px) rotate(2deg)', fontWeight: 900, fontSize: '20px' }}>GUESS ↑ OR ↓</li>
          <li style={{ transform: 'translateX(10px) rotate(-0.5deg)' }}>CORRECT? GO ON</li>
          <li style={{ transform: 'translateX(-3px) rotate(1deg)' }}>WRONG? RESTART</li>
        </ol>
      </RulesCard>
    </LandingContainer>
  );
};

const LandingContainer = styled.main`
  position: relative;
  min-height: 100vh;
  background: white;
  border: 10px solid black;
  padding: 40px;
  overflow: hidden;
`;

const BackgroundText = styled.div`
  position: absolute;
  font-weight: 900;
  letter-spacing: -8px;
  line-height: 0.8;
  z-index: 0;
  white-space: nowrap;
  &:hover {
    transform: rotate(4deg) translate(7px, 7px);
  }
`;

const Title = styled.h1`
  position: absolute;
  top: 15%;
  left: 8%;
  font-size: 90px;
  font-weight: 900;
  line-height: 0.8;
  z-index: 3;
  
  span {
    display: block;
    text-transform: uppercase;
  }
  
  .word-higher {
    background: white;
    border: 2px solid black;
  }
  
  .word-or {
    background: #CCFF00;
    padding: 10px 20px;
    display: inline-block;
    border: 5px solid black;
  }
  
  .word-lower {
    background: black;
    color: white;
    padding: 10px 20px;
    display: inline-block;
  }
    &:hover {
    transform: rotate(4deg) translate(7px, 7px);
  }
`;

const PlayButton = styled.button`
  position: absolute;
  top: 28%;
  right: 15%;
  background: #CCFF00;
  border: 6px solid black;
  padding: 35px 55px;
  font-size: 30px;
  font-weight: 900;
  text-transform: uppercase;
  box-shadow: -15px 15px 0px black;
  cursor: pointer;
  z-index: 4;
  transform: rotate(-7deg);
  
  &:hover {
    transform: rotate(4deg) translate(7px, 7px);
    box-shadow: 10px -10px 0px black;
  }
`;

const RulesCard = styled.div`
  font-family: "comic sans ms";
  position: absolute;
  bottom: 18%;
  left: 8%;
  background: white;
  border: 6px solid black;
  box-shadow: 12px 12px 0px #CCFF00;
  padding: 35px 40px;
  max-width: 380px;
  z-index: 3;
  transform: rotate(-4deg);
  h2 {
    font-size: 26px;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 20px;
    border-bottom: 5px solid black;
    padding-bottom: 12px;
  }
  
  ol {
    list-style: none;
    padding: 0;
    
    li {
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
  }
`
const LeftBar = styled.div`
  position: absolute;
  top: -10%;
  left: -5%;
  width: 55%;
  height: 150%;
  opacity: 0.5;
  rotate: -5deg;
  background: #CCFF00;
`

const CenterBar = styled.div`
  position: absolute;
  top: -25%;
  left: 20%;
  width: 55%;
  height: 200%;
  opacity: 0.5;
  rotate: 15deg;
  background: #758f0f;
`

//https://www.w3schools.com/howto/howto_css_arrows.asp#:~:text=1)%20Add%20HTML:-,Example,/i%3E </3 Chud didn't know how to make an arrow
const Arrow = styled.div`
  border: solid black;
  border-width: 0 12px 12px 0;
  display: inline-block;
  padding: 12px;
`;
export default Hero;