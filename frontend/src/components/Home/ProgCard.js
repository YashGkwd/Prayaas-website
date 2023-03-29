import React from 'react'
import Background from '../../assets/background.png'
function ProgCard({title, img, content}) {
 

 
  return (
    <div>
       <div className="cardd">
          <div className="imgbox">
           <img src={img} />
            
          
            <h2 className='mt-2'>{title}</h2>
           
          </div>
    
          <div className="content">
            <p>
             {content}
            </p>
          </div>
        </div>
    </div>
  )
}

export default ProgCard
