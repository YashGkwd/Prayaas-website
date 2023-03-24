import React from 'react'
import "./Card.css"
function Card({title}) {
  return (
    <>
   
   
     <div className="container" >
      <img src="https://i.stack.imgur.com/5Kgaq.jpg?s=192&g=1" className="rounded-circle" alt="..."/>
      <div className='name-con text-start'>
        <h2>Prof Name</h2>
        <p>this is some info about prof from ECE dept  and something something</p>
        </div>
      </div>
    
    </>
  )
}

export default Card
