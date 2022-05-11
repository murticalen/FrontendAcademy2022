import React from 'react';
import { SWRConfig, SWRConfiguration } from 'swr';
import DeviceNameContext from './context/DeviceNameContext';
import styled from 'styled-components';
import Match from './components/Match/Match';
import Smartphone from './components/Smartphone';
import { AppContentType } from './model/AppContentType';
import { Form } from './components/Lesson8/ControlledInput';
import { BloatedText } from './components/Lesson8/SeparationMotivation';
import { TextCustomHook } from './components/Lesson8/CustomHook';
import { TextWithIsMobile } from './components/Lesson8/HighOrderComponent';
import { RenderPropText } from './components/Lesson8/RenderProp';
import { ComponentSelector } from './components/ComponentSelector';
import { Portal } from './components/Lesson8/Portal';

//@ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())
const swrConfig: SWRConfiguration = { fetcher }

const AppContainer = styled.main`
  width: 90vw;
  min-height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

function AppContent({type}: {type: AppContentType}) {
  switch (type) {
    case AppContentType.Lesson6:
      return (
        <>
          <Match id={7693131}/>
          <Smartphone className='smart'/>
        </>
      )
    case AppContentType.ControlledInput:
      return <Form/>
    case AppContentType.CustomHook:
      return <TextCustomHook color="red"/>
    case AppContentType.HOC:
      return <TextWithIsMobile color="magenta"/>
    case AppContentType.Portal:
      return <Portal/>
    case AppContentType.RenderProp:
      return <RenderPropText color='pink'/>
    case AppContentType.SeparationMotivation:
      return <BloatedText color='orange'/>
  }

  return null
}

function App() {

  const [type, setType] = React.useState<AppContentType>(AppContentType.Lesson6)

  return (
    <SWRConfig value={swrConfig}>
      <DeviceNameContext.Provider value={{name: 'Samsung Galaxy S22 Ultra'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <ComponentSelector selectedType={type} setSelectedType={setType}/>
          <AppContainer>
            <AppContent type={type}/>
          </AppContainer>
        </div>
      </DeviceNameContext.Provider>
    </SWRConfig>
  );
}

export default App;
