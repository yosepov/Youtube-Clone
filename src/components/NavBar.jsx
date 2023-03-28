import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
const widthScreen = window.screen.width;
const Container = styled.div`
position: sticky;
top: 0px;
background-color: ${({ theme }) => theme.bgLighter}
height: 56px;`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`;

const Search = styled.div`
  width: 60%;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 10px;
`;

const Input = styled.input`
  width: 40%;
  color: ${({ theme }) => theme.text};
  border: none;
  background-color: transparent;
  border-radius: 10px;
  outline: none;
`;

const Button = styled.div`
  padding: 2px 5px;
  background-color: transparent;
  border-radius: 3px;
  font-wight: 300;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  color: #3ea6ff;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const NavBar = ({ darkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placehold="Search" />
          <SearchIcon style={{ color: (theme) => theme.text }} />
        </Search>
        <Link to="/signin" style={{ textDecoration: "none", color: "none" }}>
          <Button>
            <AccountCircleIcon style={{ height: 35 }} />
            {widthScreen > 400 && "Sign in"}
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};
