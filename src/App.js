
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useEffect, useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');



  const [color, setColor] = useState({
    themeMode: "light",
    darkColor: "#f8f9fa",
    lightColor: "white"
  })
  const changeColor = (colorObject) => {
    setColor({
      themeMode: colorObject.themeMode,
      darkColor: colorObject.darkColor,
      lightColor: colorObject.lightColor
    });
    setMode(colorObject.themeMode)
    showAlert("Theme changed", "success");
  }


  useEffect(() => {
    const setColoredMode = () => {
      setMode(color.themeMode)
      document.body.style.backgroundColor = color.lightColor;
    }
    setColoredMode()
  }, [color])


  // Alert State
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  // Alert State END
  return (
    <Router>
      {/* Common elemets */}
      <Navbar title="TextUtils" mode={mode} color={color} darkColoredMode={changeColor} />
      <Alert alert={alert} />
      {/* Common elemets END */}

      {/* Routes */}
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter text to analyze below" mode={mode} color={color} showAlert={showAlert} />} />
        <Route exact path="/About" element={<About mode={mode}  color={color}/>} />
      </Routes>
      {/* Routes END */}
    </Router>
  );
}

export default App;
