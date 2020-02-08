import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
body{
  padding:0;
  margin:0;
}
`;

const PotatoCard = styled.div`
  background-color: red;
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

const BigFrame = styled.div`
  background-color: pink;
  height: 100vh;
  ${PotatoCard} {
    background-color: navy;
  }
`;

class App extends React.Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BigFrame>
            <PotatoForm />
          </BigFrame>
        </ThemeProvider>
      </>
    );
  }
}

const PotatoForm = () => (
  <PotatoCard>
    <Button>Hi</Button>
  </PotatoCard>
);

export default App;
