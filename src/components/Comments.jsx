import React from 'react'
import styled from 'styled-components'
import { Comment } from './Comment'
const Container = styled.div``;

const NewComment = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

const Avatar = styled.img`
width: 25px;
height: 35px;
border-radius: 50%;
`;

const Input = styled.input`
border: none;
border-bottom: 1px solid ${({theme}) => theme.soft};
background-color: transparent;
outline: none;
padding: 5px;
width: 100%;
color: ${({theme}) => theme.textSoft}
`;

export const Comments = () => {
  return (
    <Container>
      <NewComment >
        <Avatar src="https://c4.wallpaperflare.com/wallpaper/803/177/135/women-portrait-blonde-profile-wallpaper-preview.jpg" />
        <Input placeholder="Add a Comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  )
}
