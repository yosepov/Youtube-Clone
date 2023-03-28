import React from 'react'
import styled from 'styled-components'


const Contaimer = styled.div`
display: flex;
gap: 10px;
margin: 20px 0px;
`;

const Avatar = styled.img`
width: 25px;
height: 35px;
border-radius: 50%;
`;

const Details = styled.div`
display: flex;
flex-direction: column;
gap: 14px;
color: ${({ theme }) => theme.text};
`;


const UserName = styled.span`
font-size: 12px;
font-weight: 500;
color: ${({ theme }) => theme.text};
`;

const Date = styled.span`
font-size: 16px;
font-weight: 400;
color: ${({ theme }) => theme.textSoft};
margin-left: 5px;
`;

const Text = styled.span`
font-size: 12px;
color: ${({ theme }) => theme.text};
`;

export const Comment = () => {
  return (
    <Contaimer>
        <Avatar src="https://c4.wallpaperflare.com/wallpaper/803/177/135/women-portrait-blonde-profile-wallpaper-preview.jpg" />
      <Details>
        <UserName>Erez Yosepov <Date>1 day ago</Date></UserName>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, veritatis. Minus ipsam quo deleniti at excepturi est iste earum beatae. Obcaecati repellendus provident rerum dolor iure iste aperiam omnis mollitia?</Text>
      </Details>

    </Contaimer>
  )
}
