import { useState } from "react";
import "./App.css";
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

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
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container m3">
        <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
      </div> 
    </>
  );
}

export default App;
