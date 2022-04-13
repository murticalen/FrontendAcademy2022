import React from 'react';
import { SWRConfig, SWRConfiguration } from 'swr';
import DeviceNameContext from './context/DeviceNameContext';
import styled from 'styled-components';
import Match from './components/Match/Match';
import Smartphone from './components/Smartphone';

//@ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())
const swrConfig: SWRConfiguration = { fetcher }

const AppContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

function App() {
  return (
    <SWRConfig value={swrConfig}>
      <DeviceNameContext.Provider value={{name: 'Samsung Galaxy S22 Ultra'}}>
        <AppContainer>
          <Match id={7693131}/>
          <Smartphone className='smart'/>
        </AppContainer>
      </DeviceNameContext.Provider>
    </SWRConfig>
  );
}

export default App;
