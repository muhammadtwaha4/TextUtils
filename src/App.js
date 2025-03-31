

import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom"; 

function App() {

  const [mode,setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  

  const toggleMode=()=>{
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert('Dark mood has been anabled', "success")
      document.title = 'TextUtils - darkmood'
    }else{
      setMode('light');
      document.body.style.backgroundColor = "#e5eeff";
      showAlert('Light mood has been anabled', "success")
      document.title = 'TextUtils - lightmood'
    }
  }

  return (
    <>
    <Router>
  
  <Navbar title='TextUtils' aboutText='About Us' mode={mode} toggleMode={toggleMode}/>

  <Alert alert={alert}/>

  <div className="container my-3">
  <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={
                   <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />}
              />
    </Routes>
  </div>

  </Router>
    </>
  );
}

export default App;

