import React, { useState } from 'react'
import logo from '../../assets/background.png'
import './Navbar2.css';
import {NavLink} from "react-router-dom"
import {FaInstagramSquare} from 'react-icons/fa';
import {FaWindowClose} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
export default function Navbar() {
    const[navtrans,setNavtrans] = useState(true);
    const[mobmenu,setmobmenu] = useState(false);
const bgtrans=()=>{
    if(window.scrollY>=500){
        setNavtrans(false)
    }
    else{
        setNavtrans(true)
    }

    }
window.addEventListener("scroll",bgtrans);
  return (
    <div className={navtrans?"navbar2 trans": "navbar2"}>
       
        <div  className='logo' >
 {/* <img  src={logo} alt="" /> */}
        </div>
        <ul className="nav2-menu">
      
                <li> 
                    <NavLink to="/" >
                        Home  
                     </NavLink>
                    </li>
              
                    <li> 
                    <NavLink to="/Events"  >
                        Events 
                     </NavLink>
                    </li>
                    <li> 
                    <NavLink to="/Team#top"  >
                        Team
                     </NavLink>
                    </li>
                    {/* <li> 
                    <NavLink to="/Contribute" >
                        Contribute
                     </NavLink>
                    </li> */}
        </ul>
        <div className='hamburger' onClick={()=>setmobmenu(!mobmenu)}>{mobmenu?<FaWindowClose/>: <GiHamburgerMenu/>}</div>
       {/* -----mobmenu------ */}
       <div className="mobmenu"  style={mobmenu?{}:{visibility:"hidden"}}>
       <li> 
                    <NavLink to="/" >
                        Home  
                     </NavLink>
                    </li>
              
                    <li> 
                    <NavLink to="/Events" >
                        Events 
                     </NavLink>
                    </li>
                    <li> 
                    <NavLink to="/Team" >
                        Team
                     </NavLink>
                    </li>
                    {/* <li> 
                    <NavLink to="/Contribute" >
                        Contribute
                     </NavLink>
                    </li> */}
       </div>
        
    </div>
  );
}
