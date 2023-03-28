import React from 'react'
import styled from 'styled-components'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import { Comments } from '../components/Comments';
import { Card } from '../components/Card'
const Container = styled.div`
display: flex;
gap: 12px;

`;

const Content = styled.div`
flex: 5;
`;

const VideoWrapper = styled.div`

`;

const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 10px;
margin-bottom: 5px;
color: ${({theme}) => theme.text};

`;

const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`;

const Info = styled.span`
font-size: 12px;
color: ${({theme}) => theme.textSoft};
`;

const Buttons = styled.div`
display: flex;
gap: 10px;
color: ${({theme}) => theme.text};
`;

const Button = styled.button`
font-size: 14px;
display: flex;
align-items: center;
gap: 2px;
cursor: pointer;
background-color: transparent;
border: none;
color: ${({theme}) => theme.text}
`;

const Recommendation = styled.div`
flex: 2;
`;

const Hr = styled.hr`
margin: 10px 0px;
border: 0.5px solid ${({theme}) => theme.soft};
`;

const Channel = styled.div`
display: flex;
justify-content: space-between;
`;

const ChannelInfo = styled.div`
display: flex;
gap: 10px;`;

const ChannelDetail = styled.div`
display: flex;
flex-direction: column;
color: ${({theme}) => theme.text};`;

const ChannelName = styled.span`
font-weight: 400;
`;

const ChannelCounter = styled.span`
margin-top: 5px;
margin-bottom: 15px;
color: ${({theme}) => theme.textSoft};
font-size: 12px;
`;

const Description = styled.div`
font-size: 12px;
`;

const Image = styled.img`
width: 35px;
height: 35px;
margin: 0px 10px;
border-radius: 50%;
`

const Subscribe = styled.button`
background-color: #cc1a00;
font-weight: 400;
border: none;
border-radius: 5px;
height: max-content;
color: #fff;
padding: 8px 15px;
cursor: pointer;

`;

export const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width='100%'
            height="320"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,123,534 views | Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOffAltIcon style={{height: '15px'}}/> 56,232
            </Button>
            <Button>
            <ThumbDownOffAltIcon style={{height: '15px'}}/> Dislike
            </Button>
            <Button>
            <ShareIcon style={{height: '15px'}}/> Share
            </Button>
            <Button>
            <DataSaverOnIcon style={{height: '15px'}}/> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <Image src="https://c4.wallpaperflare.com/wallpaper/803/177/135/women-portrait-blonde-profile-wallpaper-preview.jpg" />
          <ChannelDetail>
            <ChannelName>Muono Name</ChannelName>
            <ChannelCounter>321k</ChannelCounter>
            <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque repellendus cumque laboriosam incidunt sapiente sed deserunt molestiae nisi suscipit quo modi quibusdam tempora repellat, autem a amet dolorem minus fugiat!</Description>
          </ChannelDetail>
          <ChannelInfo></ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
      </Recommendation>
    </Container>
  )
}
