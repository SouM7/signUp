import React from 'react'
import styled from 'styled-components';
import Checkbox from "./checkbox";


const Mybutton = styled.input`
  text-decoration: none;
width: 15vw;
  padding: 12px;
  border: none;
  font-size: 14px;
  font-family: inherit;
  color: #fff;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;
  :hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center; 
gap:20px;
`

function Button() {
    return (
       <Container>
        <Checkbox/>
        <Mybutton type="submit" value="CREATE ACCOUNT"/>
        <p>Already have an account? <a>Sign in</a></p>
       </Container>
    )
}

export default Button