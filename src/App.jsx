
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import App1 from "./Components/App1";
import App2 from "./Components/App2";
import App3 from "./Components/App3";
import App4 from "./Components/App4";
import App5 from "./Components/App5";
import App6 from "./Components/App6";
import App7 from "./Components/App7";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<App1 />}></Route>
        <Route path="/" element={<App1 />}></Route>
        <Route path="/app2" element={<App2 />}></Route>
        <Route path="/app3" element={<App3 />}></Route>
        <Route path="/app4" element={<App4 />}></Route>
         <Route path="/app5" element={<App5 />}></Route>
         <Route path="/app6" element={<App6 />}></Route>
         <Route path="/app7" element={<App7 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
