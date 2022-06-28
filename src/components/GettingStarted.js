import React from "react";
import styled from "styled-components"; 
import './GettingStarted.css'
import logo from './assets/logo.png'



const GettingStarted = ({Login}) => {

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
    <div >
 
    <img src = {logo} style = {{zIndex: 100, paddingTop: "50px", paddingLeft: "25px"}}/>
     <div style = {{height: "800px"}}><PrimaryButton onClick = {
        Login
        }><p>Login</p></PrimaryButton> </div>
    </div>
  
  );
};

export default GettingStarted;
