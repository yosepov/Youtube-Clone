import React from 'react'
import styled from 'styled-components'
import LogoYoutube from '../assets/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ReportIcon from '@mui/icons-material/Report';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Container = styled.div`
flex: 1;
background-color: ${({theme}) => theme.bgLighter};
height: 100vh;
color: ${({theme}) => theme.text};
font-size: 16px;
position: sticky;
top: 0;`

const Wrapper = styled.div`
margin: 10px;
`

const Logo = styled.div`
display: flex;
align-items: center;
gap: 5px;
font-wight: bold;
margin-bottom: 10px;
`

const Img = styled.img`
height: 35px;`

const Item = styled.div`
display: flex;
align-items: center;
gap: 15px;
cursor: pointer;
padding: 7.5px 0px;
&:hover {
  background-color: ${({theme}) => theme.soft};
}
`

const Hr = styled.hr`
margin:15px 0px;
border:0.5px solid ${({theme}) => theme.soft}`

const Login = styled.div``

const LoginButton = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
border-radius: 3px;
font-wight: 500;
font-size: 16px;
margin-top: 10px;
cursor: pointer;
color: #3ea6ff;
display:flex;
align-items: center;
gap: 5px;
`



export const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
      <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'>
        <Logo>
          <Img src={LogoYoutube} />
          YouTube
        </Logo>
      </Link>
      <Link to="/" style={{textDecoration: 'none', color: 'inherit' }} >
        <Item>
          <HomeIcon  />
          Home
        </Item>
      </Link>
        <Item>
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subscriptions
        </Item>
        <Hr/>
        <Item>
          <LibraryAddIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Hr/>
        <Login>
          <Link to="/signin" style={{textDecoration: 'none', color: 'none'}} >
          <LoginButton>
            <AccountCircleIcon style={{height: 35}} />
            Sign in
          </LoginButton>
          </Link>
        </Login>
        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          <LiveTvIcon/>
          Live
        </Item>
        <Hr/>
        <Item>
          <SettingsApplicationsIcon/>
          Settings
        </Item>
        <Item>
          <ReportIcon/>
          Report
        </Item>
        <Item>
          <HelpOutlineIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <LightModeIcon />
          {darkMode ? 'Light ': 'Dark '} Mode
        </Item>
      </Wrapper>
    </Container>
  )
}
