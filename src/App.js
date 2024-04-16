import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Services";
import Service1 from "./components/Services/Service1";
import Service2 from "./components/Services/Service2";
import Service3 from "./components/Services/Service3";
import Service4 from "./components/Services/Service4";
import Privacy from "./components/Privacy";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  
  const [language, setLanguage] = useState('Deutsch');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home language={language} setLanguage={setLanguage}/>} />
        <Route path="/about" element={<About  language={language} setLanguage={setLanguage}/>} />
        <Route path="/service" element={<Service  language={language} setLanguage={setLanguage}/>} />
        <Route path="/service1" element={<Service1  language={language} setLanguage={setLanguage}/>} />
        <Route path="/service2" element={<Service2  language={language} setLanguage={setLanguage}/>} />
        <Route path="/service3" element={<Service3  language={language} setLanguage={setLanguage}/>} />
        <Route path="/service4" element={<Service4  language={language} setLanguage={setLanguage}/>} />
        <Route path="/privacy" element={<Privacy  language={language} setLanguage={setLanguage}/>} />
        <Route path="/contact" element={<Contact  language={language} setLanguage={setLanguage}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
