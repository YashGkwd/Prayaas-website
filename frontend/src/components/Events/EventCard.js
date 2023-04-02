import React, { useState } from 'react'
import RegisterForm from './RegisterForm'


function EventCard({img,details,register,getReg}) {
  const [ reg, Setreg] = useState(true)
 
   const registerfun = () => {
    Setreg(!reg)
    getReg(reg);
   }

  return (
    <>
    <div className='event-card border border-5'>
        <div className='event-image' style={{backgroundImage:`url(${img})`,backgroundSize:"cover"}}>
          
        </div>
        <div className="event-detail">
        <div className='event-info justify-content-start'>
            <h2>{details.name}</h2>
            <h4>{details.date}</h4>
            <p>{details.para}</p>
                

        </div>
        <div className='regist-btn-cont'>
        {register?<button type="button" onClick={registerfun} class="register-btn">Register</button>:<p>coming soon</p>}
       
        </div>
               
                
        </div>


    </div>

      
    </>
  )
}

export default EventCard
