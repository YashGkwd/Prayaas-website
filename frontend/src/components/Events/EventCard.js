import React, { useState } from 'react'
import RegisterForm from './RegisterForm'



function EventCard({img, details, register, getReg}) {
  const [ reg, Setreg] = useState(true)
  const [ readmore, Setreadmore] = useState(false)
  const handlereadmore = () => {
    Setreadmore(!readmore)
   }

   const registerfun = () => {
    Setreg(true)
    getReg(reg);
   }

  return (
    <>
    <div className='event-card border border-1'>
        <div className='event-image' style={{backgroundImage:`url(${img})`,backgroundSize:"cover"}}>
          
        </div>
        <div className="event-detail">
        <div className='event-info justify-content-start'>
            <h4>{details.name}</h4>
            {/* <h3>{details.date}</h3> */}
           {readmore?<p>{details.para}</p>:<p>{details.para.slice(0,400)+"......"}</p>} 
                

        </div>
        <div className='regist-btn-cont'>
         
        {register?<button type="button" onClick={registerfun} class="register-btn">Register</button>:<p>coming soon</p>}
        <button type="button" onClick={handlereadmore}class="readmore-btn">{readmore?"Read Less":"Read More"}</button>
        </div>
               
                
        </div>


    </div>

      
    </>
  )
}

export default EventCard
