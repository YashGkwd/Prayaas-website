import React from 'react'

function ProgCard({title, img, content}) {
 

 
  return (
    <div>
       <div className="cardd"> 
          <div className="imgbox">
           <img  src={img} />
            
            <h2 className='prog-title mt-2'>{title}</h2>
           
          </div>
    
          <div className="prog-content">
            <p>
             {content}
            </p>
          </div>
        </div>
    </div>
  )
}

export default ProgCard
