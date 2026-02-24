import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
const About = () => {
  return (
    <StyledWrapper>
        <div className="container">
            <div className="terminal-loader">
                <div className="terminal-header">
                <div className="terminal-title">About</div>
                <div className="terminal-controls">
                    <div className="control close" />
                    <div className="control minimize" />
                    <div className="control maximize" />
                </div>
                </div>
                <pre className="figlet">{String.raw`      ___                         ___           ___                 
     /  /\         _____         /  /\         /__/\          ___   
    /  /::\       /  /::\       /  /::\        \  \:\        /  /\  
   /  /:/\:\     /  /:/\:\     /  /:/\:\        \  \:\      /  /:/  
  /  /:/~/::\   /  /:/~/::\   /  /:/  \:\   ___  \  \:\    /  /:/   
 /__/:/ /:/\:\ /__/:/ /:/\:| /__/:/ \__\:\ /__/\  \__\:\  /  /::\   
 \  \:\/:/__\/ \  \:\/:/~/:/ \  \:\ /  /:/ \  \:\ /  /:/ /__/:/\:\  
  \  \::/       \  \::/ /:/   \  \:\  /:/   \  \:\  /:/  \__\/  \:\ 
   \  \:\        \  \:\/:/     \  \:\/:/     \  \:\/:/        \  \:\
    \  \:\        \  \::/       \  \::/       \  \::/          \__\/
     \__\/         \__\/         \__\/         \__\/                
`}</pre>
                <div className="text prompt1">> Hi Lo is a simple game where <em>YOU</em>, the user</div>
                <div className="text prompt2">> get to essentially gamble without any of the risk!</div>
                <div className="text prompt3">> Using data powered by Kalshi, you will be presented</div>
                <div className="text prompt4">> with one opening percentage (left) for two different</div>
                <div className="text prompt5">> predictions! Guess if the right's opener was ^|⌄</div>
                <div className="text prompt6">> The game ends on a wrong guess! Good Luck! </div>
                <div className="text bar">> [<Link href="/">Home</Link>] [<Link href="/signin">Sign In</Link>] [<Link href="/play">Play</Link>] </div>
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
  background-color: purple;
    background-image: linear-gradient(
      45deg,
      transparent 33.3%,
      rgba(255, 165, 0, 0.35) 33.3%,
      rgba(255, 165, 0, 0.35) 66.6%,
      transparent 66.6%
    ),
    linear-gradient(
      -45deg,
      transparent 33.3%,
      rgba(255, 165, 0, 0.25) 33.3%,
      rgba(255, 165, 0, 0.25) 66.6%,
      transparent 66.6%
    );
    background-size: 60px 60px;
  animation: moveBackgroundA 1s linear infinite;
  @keyframes moveBackgroundA {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 60px 60px;
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

  @keyframes typeLine {
    from {width: 0;}
    to {width: 65ch;}
  }

  @keyframes typeBody {
    from {width:0;}
    to {width: 400ch;}
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
    font-size: 0.9em;
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
   .text.prompt1 {
    width: 0;
    animation: typeLine 1.5s steps(34) forwards;
   }
    .text.prompt2 {
    width: 0;
    animation: typeLine 1.5s steps(34) 1.5s forwards;
   }    
    .text.prompt3 {
    width: 0;
    animation: typeLine 1.5s steps(34) 3s forwards;
   }    
    .text.prompt4 {
    width: 0;
    animation: typeLine 1.5s steps(34) 4.5s forwards;
   }    
    .text.prompt5 {
    width: 0;
    animation: typeLine 1.5s steps(34) 6s forwards;
   }     
    .text.prompt6 {
    width: 0;
    animation: typeLine 1.5s steps(34) 7.5s forwards;
   }       
   .text.bar {
    width: 0;
    animation: typePrompt 1.5s steps(19) 9s forwards
   }
    .text.body{
        animation: typeBody 3s steps(70) forwards;
        margin-top: 1.5em;
    }
    .figlet { 
    font-size: 0.65em;
    line-height: 1.4;
    margin-top: 1.5em;
    white-space: pre;
   }    
    `;


export default About