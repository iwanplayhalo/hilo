import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
const Hero = ({text}) => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="terminal-loader">
          <div className="terminal-header">
             <div className="terminal-title">What the Helly</div>
                 <div className="terminal-controls">
                 <div className="control close" />
                 <div className="control minimize" />
                 <div className="control maximize" />
             </div>
           </div>
           <pre className="figlet">{String.raw`      ___           ___                         ___           ___           ___           ___     
     /__/\         /  /\                       /  /\         /  /\         /__/\         /  /\    
    _\_ \:\       /  /:/_                     /  /:/        /  /::\       |  |::\       /  /:/_   
   /__/\ \:\     /  /:/ /\    ___     ___    /  /:/        /  /:/\:\      |  |:|:\     /  /:/ /\  
  _\_ \:\ \:\   /  /:/ /:/_  /__/\   /  /\  /  /:/  ___   /  /:/  \:\   __|__|:|\:\   /  /:/ /:/_ 
 /__/\ \:\ \:\ /__/:/ /:/ /\ \  \:\ /  /:/ /__/:/  /  /\ /__/:/ \__\:\ /__/::::| \:\ /__/:/ /:/ /\
 \  \:\ \:\/:/ \  \:\/:/ /:/  \  \:\  /:/  \  \:\ /  /:/ \  \:\ /  /:/ \  \:\~~\__\/ \  \:\/:/ /:/
  \  \:\ \::/   \  \::/ /:/    \  \:\/:/    \  \:\  /:/   \  \:\  /:/   \  \:\        \  \::/ /:/ 
   \  \:\/:/     \  \:\/:/      \  \::/      \  \:\/:/     \  \:\/:/     \  \:\        \  \:\/:/  
    \  \::/       \  \::/        \__\/        \  \::/       \  \::/       \  \:\        \  \::/   
     \__\/         \__\/                       \__\/         \__\/         \__\/         \__\/    `}</pre>
           <div className="text">Welcome to Hi Lo!</div><br/>
           <div className="text prompt">> Hello, what would you like to do?</div><br/>
           <div className="text bar">> [<Link href="/about">About</Link>] [<Link href="/signin">Sign In</Link>] [<Link href="/play">Play</Link>] </div>
          </div>
      </div>
    </StyledWrapper>
  );
};
//https://uiverse.io/jeremyssocial/ugly-bullfrog-62 for basic terminal, animations were done by me
const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: purple;
    background-image: linear-gradient(
      45deg,
      transparent 33.3%,
      #08521259 33.3%,
      rgba(10, 90, 53, 0.35) 66.6%,
      transparent 66.6%
    ),
    linear-gradient(
      -45deg,
      transparent 33.3%,
      #08521259 33.3%,
      rgba(10, 90, 53, 0.35) 66.6%,
      transparent 66.6%
    );
    background-size: 60px 60px;
  animation: moveBackgroundH 1s linear infinite;
  @keyframes moveBackgroundH {
  from {
    background-position: 0px -60px;
  }
  to {
    background-position: -60px 60px;
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
   .text.prompt {
    width: 0;
    animation: typePrompt 1.5s steps(34) 2s forwards;
   }     
   .text.bar {
    width: 0;
    animation: typePrompt 1.5s steps(19) 3.5s forwards
   }

   .figlet { 
    font-size: 0.65em;
    line-height: 1.4;
    margin-top: 5.5em;
    white-space: pre;
   }
   `;
// ngl i had no idea it was called a figlet 
export default Hero;
