import React from "react";
import styled from "styled-components"; 


const Home = ({name, Logout}) => {
    
  const PrimaryButton = styled.button`
    position: absolute;
    bottom: 400px;
    left: 35px;
    display: flex;
    max-width: 328px;
    height: 56px;
    width: 328px;
    border-radius: 4px;
    border: none;
    background-image: linear-gradient(
      to bottom,
      rgba(55, 51, 255, 1) 0%,
      rgba(104, 51, 255, 1) 100%
    );
    &:hover {
      box-shadow: 0px 0px 12px 0px rgba(97, 51, 255, 1);
    };
    &:disabled {
      opacity: 0.7;
      background-color: rgba(104,51,255,1);
    }
    margin: auto;
    `;
    


  return (
    <div>
      <div style = {{height: "100px"}}/>
      <p>Hello {name.split(" ")[0]},</p>
      <p>This project template uses and demonstrates the following Eluvio projects:</p>
      <a href = "https://github.com/eluv-io/elv-media-wallet" target="_blank"><p style =  {{color: "rgba(81,184,240,1)"}}>-elv-media-wallet</p></a>
      <a href = "https://github.com/eluv-io/elv-components-js" target="_blank"><p style = {{color: "rgba(81,184,240,1)"}}>-elv-components-js</p></a>
      <div style = {{height: "100px"}}/>
      <PrimaryButton onClick = {
        Logout
      }><p>Logout</p></PrimaryButton>
    </div>
  );
};

export default Home;
