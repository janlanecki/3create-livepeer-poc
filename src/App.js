import logo from './logo.svg';
import './App.css';
import { DemoPlayer } from './DemoPlayer';

import {
  LivepeerConfig,
  ThemeConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import * as React from 'react';
 
const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
  }),
});
 
const theme = {
  colors: {
    accent: 'rgb(0, 145, 255)',
    containerBorderColor: 'rgba(0, 145, 255, 0.9)',
  },
  fonts: {
    display: 'Inter',
  },
};
 
function App() {
  return (
    <LivepeerConfig client={livepeerClient} theme={theme}>
      <DemoPlayer />
    </LivepeerConfig>
  );
}

export default App;
