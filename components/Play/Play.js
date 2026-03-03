import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useEffect } from 'react';

const Play = ({text}) => {
    useEffect(() => {
    const fetchMarkets = async () => {
        try {
            const response = await fetch('/api/markets');
            const data = await response.json();

            //console.log('Markets:', data);

        } catch (err) {
        console.log('Error:', err)
        }
    }
    fetchMarkets()
    }, [])
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
      <Card style={{rotate: '9deg', top: '23%', left: '45%'}}>MARKET</Card>
      <Card style={{rotate: '-9deg', top: '23%', left: '15%'}}>MARKET</Card>
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
`;

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
  left: 40%;
  width: 55%;
  height: 200%;
  opacity: 0.5;
  rotate: 15deg;
  background: #758f0f;
`
const Card = styled.div`
  position: absolute;
  width: 500px;
  height: 600px;
  background: white;
  border: 8px solid black;
  box-shadow: -20px 20px 0px black;
  padding: 40px;
  z-index: 2;
  
  &:hover {
    transform: translate(5px, -5px);
    box-shadow: -25px 25px 0px black;
  }`
;
export default Play;