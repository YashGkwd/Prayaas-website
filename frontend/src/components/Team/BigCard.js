import React from 'react'
import "./BigCard.css"
import Card from './Card'
function BigCard({color,title}) {
  
  const clr = color?"bg-secondary bg-gradient bg-opacity-25":"";
  return (
    <>
    <div className={`bg ${clr} `}>
    <h2 className='team-title text-start'>{title}</h2>
     <div className={"card-con d-flex flex-row align-items-center"}>     
            <Card/>
            <Card/> 
          </div>
          </div>

    </>
  )
}

export default BigCard
