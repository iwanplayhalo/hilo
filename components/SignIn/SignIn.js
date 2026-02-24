import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
const SignIn = () => {
  return (
    <StyledWrapper>
        <div className="container">
            <div className="terminal-loader">
                <div className="terminal-header">
                <div className="terminal-title">Sign-In</div>
                <div className="terminal-controls">
                    <div className="control close" />
                    <div className="control minimize" />
                    <div className="control maximize" />
                </div>
                </div>
                <div className="input-row-email">> email: <input className="input-email" type = "text"/></div>
                <div className="input-row-password">> password: <input className="input-password" type = "password"/></div>
                <div className="text signs">> [Sign In] [Register] </div>
                <div className="text google">> [Google Sign-In]</div>
                <div className="text bar">> [<Link href="/">Home</Link>] [<Link href="/about">About</Link>] [<Link href="/play">Play</Link>] </div> <br/>
                <img src="https://cdn.osxdaily.com/wp-content/uploads/2018/03/party-parrot-terminal.mov.gif" width="388px" height="348px"/>
            </div>
      </div>
    </StyledWrapper>
  )
}


//https://uiverse.io/themrsami/old-snail-13 background. animation was added by me
const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
    background-image: linear-gradient(
      45deg,
      transparent 33.3%,
      rgba(19, 185, 116, 0.35) 33.3%,
      rgba(196, 215, 216, 0.35) 66.6%,
      transparent 66.6%
    ),
    linear-gradient(
      -45deg,
      transparent 33.3%,
      rgba(19, 185, 116, 0.35) 33.3%,
      rgba(12, 153, 158, 0.35) 66.6%,
      transparent 66.6%
    );
    background-size: 60px 60px;
  animation: moveBackgroundA 1s linear infinite;

  @keyframes moveBackgroundA {
  from {
    background-position: 0px 60px;
  }
  to {
    background-position: 60px 0px;
  }
}
  @keyframes typeOnce {
    from {width:0;}
    to {width: 19ch;}
  }

  @keyframes typePrompt {
    from {width: 0;}
    to {width: 35ch;}
  }

  @keyframes typeCreds {
    from {width: 0;}
    to {width: 40ch;}
  }

  a {
    color: #0f0;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
      color: #5b1bd1;
    }
  }

  .terminal-loader {
    width: 550px;
    min-height: 500px;
    border: 0.1em solid #333;
    background-color: #000000;
    color: #0f0;
    font-family: "Courier New", Courier, monospace;
    font-size: 1em;
    padding: 1.5em 1em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }

  .terminal-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1.5em;
    background-color: #333;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 0 0.4em;
    box-sizing: border-box;
  }

  .terminal-controls {
    float: right;
  }

  .input-email {
    background: transparent;
    border: none;
    border-bottom: 1px solid #0f0;
    color: #0f0;
    font-family: "Courier New", Courier, monospace;
    outline: none;
    width: 180px;
  }

  .input-password {
    background: transparent;
    border: none;
    border-bottom: 1px solid #0f0;
    color: #0f0;
    font-family: "Courier New", Courier, monospace;
    outline: none;
    width: 180px;
  }

  .input-row-email {
    width: 0;
    display: block;
    margin-top: 1.5em;
    white-space: nowrap;
    overflow: hidden;
    animation: typeCreds 1.0s steps(22) 0s forwards
  }

  .input-row-password {
    width: 0;
    display: block;
    margin-top: 1.5em;
    white-space: nowrap;
    overflow: hidden;
    animation: typeCreds 1.0s steps(25) 2s forwards
  }

  .control {
    display: inline-block;
    width: 0.6em;
    height: 0.6em;
    margin-left: 0.4em;
    border-radius: 50%;
    background-color: #777;
  }

  .control.close {
    background-color: #e33;
  }

  .control.minimize {
    background-color: #ee0;
  }

  .control.maximize {
    background-color: #0b0;
  }

  .terminal-title {
    float: left;
    line-height: 1.5em;
    color: #eee;
  }

  .text {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    animation:
      typeOnce 1.2s steps(16) forwards;
    margin-top: 1.5em;

  }

  .text.google {
    display:block;
    width: 0;
    animation: typePrompt 1s steps(28) 5s forwards;
  }
   .text.prompt {
    display:block;
    width: 0;
    animation: typePrompt 1.5s steps(34) 2s forwards;
   }     
   .text.bar {
    display:block;
    width: 0;
    animation: typePrompt 1.5s steps(19) 6s forwards
   }
    .text.signs {
    display:block;
    width: 0;
    animation: typePrompt 1.5s steps(19) 3.5s forwards;
    }`;


export default SignIn