import React from 'react'
import styled from "styled-components";

const Myinput = styled.input`
  padding: 9px;
  font-size: 18px;
  border-width: 0px;
  border-color: #231d1d;
  background-color: #ffffff;
  color: #080707;
  border-style: solid;
  border-radius: 18px;
  box-shadow: 0px 0px 22px rgba(116, 111, 111, 0.42);
 
  &focus {
    outline: none;
  }
  padding-left: 32px;
  ::placeholder {
  }
  
  
`;

const Icon = styled.img`
width:25px;
height: 26px;
position: absolute;
margin-left: 4px;
`
const Inputcontainer = styled.div`
  display: flex;
  align-items: center;
`;

function Input(props) {
    return (
    <Inputcontainer>
    <Icon src={props.icon} alt="icon"/>
    <Myinput type={props.type} placeholder={props.placeholder}/>
    </Inputcontainer>
    )
}

export default Input