import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: calc(100vh-56px);
color: ${({theme}) => theme.text}`;

const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: ${({theme}) => theme.bgLighter};
border: 1px solid ${({theme}) => theme.soft};
padding: 20px 50px;
gap: 10px;
`;

const Title = styled.h1`
font-size: 24px;
`;

const SubTitle = styled.h2`
font-size: 20px;
font-weight: 300;
`;

const Input = styled.input`
border: none;
border-bottom: 1px solid ${({theme}) => theme.textSoft};
border-radius: 3px;
paddong: 10px;
background-color: transparent;
width: 100%;
`;

const Button = styled.button`
border-radius: 3px;
border: none;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
background_color: ${({theme}) => theme.soft};
`;

const More = styled.div`
margin-top: 10px;
font-size: 12px;
color: ${({ theme }) => theme.textSoft};
 `;

const Links = styled.span`
margin-left: 50px;
color: ${({ theme }) => theme.textSoft};
`;

const Link = styled.span`
margin-left: 30px;
color: ${({ theme }) => theme.textSoft};
`;

export const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to MuonoTube</SubTitle>
        <Input placeholder="username" />
        <Input type={'password'} placeholder="password" />
        <Button>Sign in</Button>
        <Title>Or</Title>
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input type={'password'} placeholder="password" />
        <Button>Sign up</Button>
        <More>
          English(USA)
          <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
          </Links>
        </More>
      </Wrapper>
    </Container>
  )
}
