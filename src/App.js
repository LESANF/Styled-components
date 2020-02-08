import React from "react";
import styled from "styled-components";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BigFrame>
        <Apple>CLEAN</Apple>
        <Apple danger>DANGER</Apple>
      </BigFrame>
    );
  }
}

const BigFrame = styled.div`
  background-color: pink;
  height: 100vh;
`;

const Apple = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    background-color: peru;
  }
  background-color: ${props => (props.danger ? "red" : "green")};
`;

export default App;
