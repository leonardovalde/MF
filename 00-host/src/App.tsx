import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "navbar/Navbar";
import CounterComponent from "counter/CounterComponent";
import "./index.css";

const App = () => (
  <>
    <Navbar />
    <div className="App-container">
      <h2>Host App</h2>
      <CounterComponent />
    </div>
  </>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
