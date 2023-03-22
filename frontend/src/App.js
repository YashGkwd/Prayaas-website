import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route
} from 'react-router-dom';
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Contribute from "./components/Contribute/Contribute";
import Team from "./components/Team/Team";
import "./App.css"
import Event from './components/Events/Events';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Events" element={<Events/>}></Route>
    <Route path="/Contribute" element={<Contribute />}></Route>    
    <Route path="/Team" element={<Team />}></Route>
    </Routes>
  </div>
  
  </BrowserRouter>
    );
  };
  
  export default App;
  
