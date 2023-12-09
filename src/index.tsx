import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { HuddleClient, HuddleProvider } from '@huddle01/react';
import { useCallback } from 'react';
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

const createMeetingRoom = () => {
     axios.post(
    'https://api.huddle01.com/api/v1/create-room',
    {
      title: 'Huddle01-Test',
      hostWallets: ['0x29f54719E88332e70550cf8737293436E9d7b10b'],
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${process.env.REACT_APP_API_KEY}`,
      }
    }
  );
  }

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
