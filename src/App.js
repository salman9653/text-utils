import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Markdown from './components/Markdown';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode , setMode] = useState("light");
  const[alert, setAlert] = useState(null);
  function showAlert(message,type){
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  function toggleMode(){
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#243743";
      showAlert("Dark mode Applied" , "success");
     }else {
       setMode("light");
       document.body.style.backgroundColor = "white";
       showAlert("Light mode Applied" , "success");
     }
  }

  return (
    <BrowserRouter>
        <Navbar title="TeXt-Utils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route path="/" element={<Home heading="Enter Your Text" alert={showAlert} mode={mode} />} />
            <Route path="/markdown" element={<Markdown heading="Markdown Editor" alert={showAlert} mode={mode} />} />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
