import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
import { login } from '@/backend/Auth'
const SignIn = () => {
  const { user, setUser } = useStateContext()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const router = useRouter()

  async function handleLogin(){
    try {
      const userCredential = await login(email, password);
      setUser(userCredential.user);
      router.push('/dashboard');
    } catch (error) {
      console.error("Error signing in user:", error.code, error.message);
      alert("Login failed: " + error.message);
    }
  }
  return (
    <LandingContainer>
          <LeftBar />
          <CenterBar />
          <SignInText style={{fontFamily: 'Arial',left: '-5%', top:'-5%',fontSize: '180px', opacity: 0.3, }}>PREDICTIONS HIGHER LOWER GUESS MARKETS</SignInText>
          <SignInText style={{fontSize: '200px', top: '9%', left:'-20%', opacity: 0.6 }}>PREDICTIONS HIGHER LOWER GUESS MARKETS</SignInText>
          <SignInText style={{ top: '24%', left: '-80%', fontSize: '160px', opacity: 0.4 }}>PREDICTIONS HIGHER LOWER GUESS MARKETS</SignInText>
          <SignInText style={{ top: '35.35%', left: '-45%', fontFamily: 'Arial', fontSize: '220px', opacity: 0.67 }}>PREDICTIONS HIGHER LOWER GUESS MARKETS</SignInText>
          <SignInText style={{fontFamily: 'fantasy', font: 'Blippo', top: '84%', left: '42%', fontSize: '190px', opacity: 0.3 }}>PREDICTIONS</SignInText>
          <SignInText style={{ top: '51%',left: '-2%', fontSize: '590px', opacity: 0.8 }}>LOW</SignInText>
          <BackgroundText style={{ top: '72%', left: '75%', fontSize: '150px', rotate:'180deg', opacity: 0.7 }}>
            <Link href="/" style={{ color: 'black'}}>
              home
            </Link>
          </BackgroundText>
          
          <SignInBar style={{rotate: '-5deg'}}/>
          <input type="text" placeholder="email" style={{position: 'absolute', top: '30%', left: '25%', width: '30%', height: '10%', fontSize: '20px', padding: '10px', border: '4px solid black', boxShadow: '6px 6px 0px #CCFF00'}} />
          <input type="password" placeholder="password" style={{position: 'absolute', top: '45%', left: '30%', width: '30%', height: '10%', fontSize: '20px', padding: '10px', border: '4px solid black', boxShadow: '6px 6px 0px #CCFF00'}} />
          <PlayButton style={{ right: '15%', top: '60%' }} >
            <Link href="/" style={{ color: 'black', textDecoration: 'none' }}>SIGN IN</Link>
          </PlayButton>

          <PlayButton style={{ right: '0%', top: '82%'} }>
            <Link href="/play" style={{ color: 'black', textDecoration: 'none' }}>PLAY<br/>NOW</Link>
          </PlayButton>
          
          <Arrow style={{ position: 'absolute', top: '40%', right: '3%', transform: 'rotate(45deg)' }} />
          <Arrow style={{ position: 'absolute', top: '60%', right: '3%', transform: 'rotate(45deg)' }} />
          <Arrow style={{ position: 'absolute', top: '52%', right: '3%', transform: 'rotate(45deg)' }} />
          <Arrow style={{ position: 'absolute', top: '70%', right: '3%', transform: 'rotate(45deg)' }} />
    
          <Arrow style={{ position: 'absolute', top: '45%', right: '7%', transform: 'rotate(45deg)' }} />
          <Arrow style={{ position: 'absolute', top: '56%', right: '7%', transform: 'rotate(45deg)' }} />
          <Arrow style={{ position: 'absolute', top: '67%', right: '7%', transform: 'rotate(45deg)' }} />
          <Arrow style={{ position: 'absolute', top: '77%', right: '7%', transform: 'rotate(45deg)' }} />
        </LandingContainer>
  )
}

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

const SignInText = styled.div`
  position: absolute;
  font-weight: 900;
  letter-spacing: -8px;
  line-height: 0.8;
  z-index: 0;
  white-space: nowrap;
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

const SignInBar = styled.div`
  position: absolute;
  top: 10%;
  left: -10%;
  width: 150%;
  height: 60%;
  background: #445502;
  border: 6px solid #f2f3ef;
  opacity: 0.8;
`


const SignInTab = styled.div`
  position: absolute;
  width: 35%;
  height: 40%;
  background: white;
  border: 6px solid black;
  box-shadow: 12px 12px 0px #CCFF00;
  top: 10%;
  left: 10%;
  opacity: 0.92;
`
//https://www.w3schools.com/howto/howto_css_arrows.asp#:~:text=1)%20Add%20HTML:-,Example,/i%3E </3 Chud didn't know how to make an arrow
const Arrow = styled.div`
  border: solid black;
  border-width: 0 12px 12px 0;
  display: inline-block;
  padding: 12px;
`;

export default SignIn