import logo from "./logo.svg";
import "./App.css";
import Router from "./components/router/Router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import signup from "./components/signup/signup";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
      <signup />
      <Analytics />
    </div>
  );
}

export default App;
