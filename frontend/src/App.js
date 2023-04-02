import React from 'react'
import Navbar2 from './components/Navbar/Navbar2'
import { BrowserRouter, Routes, Route
} from 'react-router-dom';
import Home from "./components/Home/Home";

import Contribute from "./components/Contribute/Contribute";
import Team from "./components/Team/Team";
import "./App.css"
import Events2 from './components/Events/Events2';
import "../src/components/Home/Home.css"
import Footer from "../src/components/Footer/Footer"

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="app-navbar"> 
    <Navbar2 />
    </div>
    <div className='app-component' >
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Events" element={<Events2/>}></Route>
    <Route path="/Contribute" element={<Contribute/>}></Route>    
    <Route path="/Team" element={<Team />}></Route>
    </Routes>
    </div>
    <Footer/>
  </div>
  
  </BrowserRouter>
    );
  };
  
  export default App;
  
