import "./App.css";
import React from "react";
import { Clock } from "./Clock";
import Fetcher from "./Fetch";
import Input from "./Input";

const CLOCK_COMPONENT = "Clock";
const FETCH_COMPONENT = "Fetcher";
const INPUT_COMPONENT = "Input";

function ComponentSelectContainer(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {props.children}
    </div>
  );
}

function ComponentSelectButton(props) {
  const { onClick, children } = props;

  return (
    <button onClick={onClick} style={{ cursor: "pointer", fontSize: "16px" }}>
      {children}
    </button>
  );
}

function App() {
  const [component, setComponent] = React.useState(CLOCK_COMPONENT);

  return (
    <React.StrictMode>
        <main>
          <ComponentSelectContainer>
            <ComponentSelectButton
              onClick={() => setComponent(CLOCK_COMPONENT)}
            >
              {CLOCK_COMPONENT}
            </ComponentSelectButton>
            <ComponentSelectButton
              onClick={() => setComponent(FETCH_COMPONENT)}
            >
              {FETCH_COMPONENT}
            </ComponentSelectButton>
            <ComponentSelectButton
              onClick={() => setComponent(INPUT_COMPONENT)}
            >
              {INPUT_COMPONENT}
            </ComponentSelectButton>
          </ComponentSelectContainer>
          {component === CLOCK_COMPONENT && <Clock />}
          {component === FETCH_COMPONENT && <Fetcher />}
          {component === INPUT_COMPONENT && <Input />}
        </main>
    </React.StrictMode>
  );
}

export default App;
