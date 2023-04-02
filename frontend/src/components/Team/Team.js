import React from 'react'
import  "./Team.css"
import Card from './Card'
import BigCard from './BigCard'
function Team() {
  return (
    <>
        <div className='team-cont d-flex justify-content-center align-items-end'>
        
          <h2 className='title '>OUR TEAM at PRAYAAS</h2>
        </div>
       
        <BigCard color={true } title="Proffesor Incharge"/>
      
         <BigCard title="Proffesor Incharge"/>
        <BigCard color={true} />
        <BigCard/> 
    </>
  )
}

export default Team
