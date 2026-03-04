import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useStateContext } from '@/context/StateContext.js';
import { useRouter } from 'next/router';

const Play = ({text}) => {
    const router = useRouter();
    const { highScore, setHighScore, gamesPlayed, setGamesPlayed } = useStateContext();

    const [markets, setMarkets] = useState([]);
    const [leftMarket, setLeftMarket] = useState(null); // always visible
    const [rightMarket, setRightMarket] = useState(null); // this will be the effected by revealed state
    const [revealed, setRevealed] = useState(false);
    const [streak, setStreak] = useState(0); 

    useEffect(() => {
    const fetchMarkets = async () => {
        try {
            const response = await fetch('/api/markets');
            const data = await response.json();
            setMarkets(data);
            if (data.length >= 2) { // off chance we don't get any active marks
                const rand1 = Math.floor(Math.random() * data.length);
                let rand2 = Math.floor(Math.random() * data.length);
                while (rand1 === rand2) {
                    rand2 = Math.floor(Math.random() * data.length);
                }
                setLeftMarket(data[rand1]);
                setRightMarket(data[rand2]);
            }
            //console.log('Markets:', data);

        } catch (err) {
        console.log('Error:', err)
        }
    }
    fetchMarkets()
    }, [])
    const handleGuess = (guess) => {
        const leftPrice = parseFloat(JSON.parse(leftMarket.outcomePrices)[0]);
        const rightPrice = parseFloat(JSON.parse(rightMarket.outcomePrices)[0]);
        
        const isCorrect = (guess === 'HIGHER' && rightPrice > leftPrice) || 
                          (guess === 'LOWER' && rightPrice < leftPrice);
        
        //setRevealed(true);
        
        if (isCorrect) {
            setStreak(streak + 1);
            setLeftMarket(rightMarket);
            const newRight = markets[Math.floor(Math.random() * markets.length)];
            setRightMarket(newRight);
        } else {
            if (streak > highScore) setHighScore(streak);
            setGamesPlayed(gamesPlayed + 1);
            setStreak(0);
            setRevealed(true);
            setTimeout(() => {
                router.push('/');
            }, 2000);
        }
    };

  return (
    
    <LandingContainer>
      <p>Streak: {streak}</p>
      <LeftBar />
      <CenterBar />
      <BackgroundText style={{fontFamily: 'Arial',fontSize: '180px', opacity: 0.3 }}>PREDICTIONS</BackgroundText>
      <BackgroundText style={{fontSize: '200px', top: '15%', left:'50%', opacity: 0.6 }}>HIGHER</BackgroundText>
      <BackgroundText style={{ top: '35%', left: '-8%', fontSize: '160px', opacity: 0.2 }}>LOWER</BackgroundText>
      <BackgroundText style={{ top: '35%', right: '30%', fontFamily: 'Arial', fontSize: '220px', opacity: 0.67 }}>GUESS</BackgroundText>
      <BackgroundText style={{fontFamily: 'fantasy', font: 'Blippo', top: '88%', left: '42%', fontSize: '190px', opacity: 0.3 }}>MARKETS</BackgroundText>
      <BackgroundText style={{ top: '60%', left: '20%', fontSize: '150px', opacity: 0.5 }}>KALSHI</BackgroundText>
      <Card style={{rotate: '-9deg', top: '23%', left: '15%'}}>
        {leftMarket && (
                    <>
                        <h3>{leftMarket.question}</h3>
                        <Yes style={{width: '450px', height: '100px', rotate: '-15deg', top: '25%', left: '5%'}}><p>YES: {(parseFloat(JSON.parse(leftMarket.outcomePrices)[0]) * 100).toFixed(1)}%</p></Yes>
                        <No style={{width: '450px', height: '100px', rotate: '5deg', top: '55%', left: '5%'}}><p>NO: {(100 - parseFloat(JSON.parse(leftMarket.outcomePrices)[0]) * 100).toFixed(1)}%</p></No>
                    </>
                )}
      </Card>
      <Card style={{rotate: '9deg', top: '23%', left: '45%'}}>
        {rightMarket && (
                    <>
                        <h3>{rightMarket.question}</h3>
                        {revealed && <p style={{fontSize: '100px', textEmphasis: 'bold', fontFamily: 'Arial', top: '10%'}}><br/>{(parseFloat(JSON.parse(rightMarket.outcomePrices)[0]) * 100).toFixed(1)}%</p>}
                    </>
                )}
        <button id="higher-button" style={{top: '55%'}} disabled={revealed} onClick={() => handleGuess("HIGHER")}>HIGHER</button>
        <button id="lower-button" style={{top: '70%', left: '50%'}} disabled={revealed} onClick={() => handleGuess("LOWER")}>LOWER</button>
      </Card>
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

  #higher-button {
    position: absolute;
    width: 150px;
    height: 50px;
    background: #0dc02b;
    border: 4px solid black;
    font-weight: 900;
    font-size: 20px;
    font-family: 'Arial';
    font: 'Blippo';
    opacity: 0.85;
    &:disabled {
      background: grey;
      border-color: grey;
      cursor: not-allowed;}
    }
  #lower-button {
    position: absolute;
    width: 150px;
    height: 50px;
    background: #ff3b3b;
    border: 4px solid black;
    font-weight: 900;
    font-size: 20px;
    font-family: 'Arial';
    font: 'Blippo';
    opacity: 0.85;
    &:disabled {
      background: grey;
      border-color: grey;
      cursor: not-allowed;}
    }
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

  const Yes = styled.div`
    position: absolute;
    width: 150px;
    height: 50px;
    background: #0dc02b;
    border: 4px solid black;
    font-weight: 900;
    font-size: 60px;
    font-family: 'Arial';
    font: 'Blippo';
    opacity: 0.85;
    `
  const No = styled.div`
    position: absolute;
    width: 150px;
    height: 50px;
    background: #ff3b3b;
    border: 4px solid black;
    font-weight: 900;
    font-size: 60px;
    font-family: 'Arial';
    font: 'Blippo';
    opacity: 0.85;
    `

    
;
export default Play;