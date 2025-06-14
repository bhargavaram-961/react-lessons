
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
import App8 from "./Components/App8";
import App9 from "./Components/App9";
import App10 from "./Components/App10";
import App11 from "./Components/App11";
import App12 from "./Components/App12";
import App13 from "./Components/App13";
import App14 from "./Components/App14";
import App15 from "./Components/App15";
import App16 from "./Components/App16";
import App17 from "./Components/App17";
import App18 from "./Components/App18";
import App19 from "./Components/App19";
import App20 from "./Components/App20";
import App21 from "./Components/App21";
import App22 from "./Components/App22";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
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
         <Route path="/app8" element={<App8 />}></Route>
         <Route path="/app9" element={<App9 />}></Route>
         <Route path="/app10" element={<App10 />}></Route>
         <Route path="/app11" element={<App11 />}></Route>
         <Route path="/app12" element={<App12 />}></Route>
         <Route path="/app13" element={<App13 />}></Route>
         <Route path="/app14" element={<App14 />}></Route>
         <Route path="/app15" element={<App15 />}></Route>
         <Route path="/app16" element={<App16 />}></Route>
         <Route path="/app17" element={<App17 />}></Route>
         <Route path="/app18" element={<App18 />}></Route>
         <Route path="/app19" element={<App19 />}></Route>
         <Route path="/app20" element={<App20 />}></Route>
         <Route path="/app21" element={<App21 />}></Route>
         <Route path="/app22" element={<App22 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
