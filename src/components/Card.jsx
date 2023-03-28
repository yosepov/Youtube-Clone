import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Container = styled.div`
width:  ${(prop) => prop.type !== "small" && '300px'};
margin-bottom: ${(prop) => prop.type === "small" ? "15px" : '20px'};
cursor: pointer;
display: ${(prop) => prop.type === "small" && 'flex'};
gap: 10px;
`

const Details = styled.div`
display: flex;
margin-top: 3px;
gap: 10px;
flex: 1;
`;


const ChannelImage = styled.img`
width: 28px;
height: 28px;
border-radius: 50%;
background-color: #999;
display: ${(prop) => prop.type === "small" && 'none'};

`

const Image = styled.img`
width: 20vw;
height: ${(prop) => prop.type === "small" ? '100px': '150px'};
background-color: #999;
flex: 1;
`


const Texts = styled.div``;

const Title = styled.h1`
font-size: 16px;
font-family: 'Roboto';
font-weight: 500;
color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
font-size: 14px;
font-family: 'Roboto';
color: ${({ theme }) => theme.textSoft};
margin: 3px 0px`;

const Info = styled.div`font-size: 14px;
color: ${({ theme }) => theme.textSoft};
font-family: 'Roboto';

margin: 5px 0px`;


export const Card = ({type}) => {
  return (
    <Link style={{ textDecoration: 'none' }} to='/video/test'>
      <Container type={type}>
        <Image
        type={type}
          src={'https://i.pinimg.com/originals/dd/a1/2c/dda12c587120e5e4378a01f31e812672.jpg'}
        />
        <Details type={type} >
          <ChannelImage type={type} src={'https://c4.wallpaperflare.com/wallpaper/803/177/135/women-portrait-blonde-profile-wallpaper-preview.jpg'} />
          <Texts>
            <Title>Title Video</Title>
            <ChannelName>Muono vids</ChannelName>
            <Info>666,523 views | 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}
