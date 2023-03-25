import React from 'react'
import "./Slide.css"
function Slide({name , review}) {
  return (
    <>
      <div className='slide-card-cont shadow d-flex justify-content-start align-items-center'>
      <img  src="https://i.stack.imgur.com/5Kgaq.jpg?s=192&g=1" className="slide-img rounded-circle" alt="..."/>
      <div className=' review text-start'>
        <h2>{name}</h2>
        <p>{review}</p>
        </div>
      </div>
    </>
  )
}

export default Slide
