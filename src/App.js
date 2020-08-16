import React from 'react';
import { ThemeProvider } from 'styled-components';
import tw, {styled} from 'twin.macro';
import {Background,Sun, Building, Roof, WindowOne,WindowTwo, Door,Banner, GlobalStyles, lightTheme, darkTheme} from './style.js';

function App() {
  const [theme, setTheme] = React.useState('light');
  const [mailbox, clickMailBox] = React.useState(false)

  const placeOrder = () => {
    console.log("Place Order");
    fetch('http://localhost:5000/order', {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => alert(data.date));
  }

  const mailClicked = () => {
      clickMailBox(true)
  }

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }

 const Mailbox = styled.div`
  ${tw`absolute right-0 mr-10 bg-gray-500`}
      bottom:${mailbox ? "0px;" : "100px;" }
      width:100px;
      height:100px;
      transition: all 0.5s linear;
  `;

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <Background>
        <Sun onClick={toggleTheme}/>
        <Building>
          <Roof/>
          <Banner>
            Cookie Bakery
          </Banner>
          <WindowOne/>
          <WindowTwo/>
          <Door onClick={theme === 'light' ? placeOrder : null}/>
          <Mailbox onClick={mailClicked}/>
        </Building>
        </Background>
    </ThemeProvider>
  );
}

export default App;
