import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { HuddleClient, HuddleProvider } from '@huddle01/react';
import axios from 'axios';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// console.log(theme.config.initialColorMode)

const huddleClient = new HuddleClient({
  projectId : `${process.env.REACT_APP_PROJECT_ID}`,
  options: {
    activeSpeakers: {
      size: 1
    }
  }
});


root.render(
  <React.StrictMode>
    <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <HuddleProvider key="huddle01-provider" client={huddleClient}>
      <App />
    </HuddleProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
