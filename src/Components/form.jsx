import React from 'react';
import Input from './input';

import Button from './button';
import styled from 'styled-components'
import nameLogo from "./img/user-interface.png";
import emailLogo from "./img/email.png";
import passwordLogo from "./img/padlock.png";




const Myform = styled.form`
display:flex;
flex-direction: column;
gap: 50px;
align-items: center;
margin-top: 70px;
width: 46vw;
border-radius: 36px;
background-color:white;
`

function Form() {
    return (
        
      <Myform>
      <h1>Sign Up</h1>
        <Input icon={nameLogo} placeholder=" Name" />
        <Input icon={emailLogo} placeholder=" Email" />
        <Input icon={passwordLogo} placeholder=" Password" type="password"/>
        
        <Button />
      </Myform>
    );
}

export default Form