import { useState } from "react";
import "./App.css";
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes as Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = "#15202B";
      showAlert("Dark mode has been enabled","success");
    }

    else{
      setMode('light');      
      document.body.style.background = "white";
      showAlert("Light mode has been enabled","success");
    }
  }
  return (  
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container m3">
      {/* <Switch> */}
          {/* <Route exact path="/about"element={<About />}/> */}
            
          {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>}/> */}
          <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
        {/* </Switch> */}
      </div> 
      {/* </Router> */}
    </>
  );
}

export default App;
