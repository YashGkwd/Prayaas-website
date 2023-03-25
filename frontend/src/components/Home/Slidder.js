import React, { useState } from 'react'
import "./Slidder.css"
 function Slidder({slides}) {
  const [curIndex, SetcurIndex] = useState(1);
  const next = ()=>{
    if(curIndex===2){
        SetcurIndex(0);
    }
    else{
        SetcurIndex(curIndex+1)
    }
  }

  const prev = ()=>{
    if(curIndex===0){
        SetcurIndex(2);
    }
    else{
        SetcurIndex(curIndex-1)
    }
  }
  return (
    <> 
       
    <div className='slide-container'>
        <div className='leftArr' onClick={prev}>◀ </div>
        <div className='rightArr' onClick={next}>▶ </div> 
        <div className='slide-container d-flex justify-content-center'>
        {slides[curIndex]}
        </div>
      
    </div>
   
    </>
  )
}

export default Slidder
