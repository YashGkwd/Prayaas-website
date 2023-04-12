import React from 'react'
import Background from '../../assets/background.png'
function ProgCard({title, img, content}) {
 

 
  return (
    <div>
       <div className="cardd"> 
          <div className="imgbox">
           <img style={(title=="Raksha Bandhan"?{width:"30vw"}:{})} src={img} />
            
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
