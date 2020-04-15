import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="nav-bar">
        <Link to="/">One</Link>
        <Link to="/two">Two</Link>
      </div>
      <React.Suspense fallback={<div>Loading ...</div>}>
        <Routes />
      </React.Suspense>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
