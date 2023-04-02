import React,{useState} from 'react';
import EventCard from './EventCard';
import "./Events2.css"
import bg1 from "../../assets/background1.jpg"
import RegisterForm from './RegisterForm';

function Events() {
  const [ reg, Setreg] = useState(false)
  function getReg(x){
    Setreg(x)
    console.log(x)
  }
 
  return (
    <>
    <div className='event-cont ' >
   { reg && <RegisterForm/>}
       <h2 className='event-title'>EVENTS at PRAYAAS</h2>
    </div>
 
    <EventCard img={bg1} details={{name:"prayass teaching", date:"12/4/23", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit  In at vehicula nulla, vel blandit nunc. Nunc dapibus risus nulla,  Donec nec orci sed risus posuere efficitur sit amet laoreet dolor."}}  register="false" getReg={getReg}/>
    <EventCard img={bg1} details={{name:"prayass teaching", date:"12/4/23", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit  In at vehicula nulla, vel blandit nunc. Nunc dapibus risus nulla,  Donec nec orci sed risus posuere efficitur sit amet laoreet dolor."}}  register="false"/>

    <EventCard img={bg1} details={{name:"prayass teaching", date:"12/4/23", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit  In at vehicula nulla, vel blandit nunc. Nunc dapibus risus nulla,  Donec nec orci sed risus posuere efficitur sit amet laoreet dolor."}}  />

    <EventCard img={bg1} details={{name:"prayass teaching", date:"12/4/23", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit  In at vehicula nulla, vel blandit nunc. Nunc dapibus risus nulla,  Donec nec orci sed risus posuere efficitur sit amet laoreet dolor."}}  />

    </>
  )
}

export default Events

