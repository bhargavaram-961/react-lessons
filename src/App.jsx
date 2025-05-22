import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import App1 from "./Components/App1";
import App2 from "./Components/App2";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Test from "./Components/Test";
function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>React Lessons</h1>
        <Link to="/">App1</Link>-
        <Link to="/app2">App2</Link>-
        <Link to="/test">Test</Link>-
        <Link to="/product">Products</Link>-
      </header>
      <hr />
      <main>
        <Routes>
          <Route index element={<App1/>}></Route>
          <Route path="/" element={<App1/>}></Route>
          <Route path="/app2" element={<App2/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
        </Routes>
      </main>
      <hr />
      <footer>Copyright. All rights reserved.</footer>
    </BrowserRouter>
  );
}
export default App;