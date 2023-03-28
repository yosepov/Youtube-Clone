import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { Menu } from "./components/menu"
import { NavBar } from "./components/NavBar"
import { darkTheme, lightTheme } from "./utils/Theme";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Video } from "./pages/Video";
import { Signin } from './pages/Signin';

const Container = styled.div`
display:flex;
margin: -10px -10px;
background-color:  ${({ theme }) => theme.bg};
height: 100%;`

const Main = styled.div`
flex: 7;
background-color: ${({ theme }) => theme.bg};
color: #fff;`
const Wrapper = styled.div`
padding: 22px 96px;`

export const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
          <Main>
            <NavBar darkMode={darkMode} />
            <Wrapper>
              <Routes>
                <Route path="/" exact={true}>
                  <Route index element={<Home />} />
                  <Route path="/signin" element={<Signin />} />
                  <Route path="/video" >
                    <Route path="/video/:videoId" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

