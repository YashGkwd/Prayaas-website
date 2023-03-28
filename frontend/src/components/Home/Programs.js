import React from 'react'
import "./Programs.css"
import Background from '../../assets/background.png'
import Background1 from '../../assets/background1.jpg'
import Foreground from '../../assets/foreground.png'
import Background4 from '../../assets/background4.jpg'
import ProgCard from './ProgCard'


function Programs() {
    // const prg_card = ({title, img, content}) =>{
    //     return(
    //         <div className="card">
    //         <div className="imgbox">
    //           <img
    //             src={Background}
    //           />
    //           <h2 className='mt-3'>sgfhjdsf</h2>
    //         </div>
      
    //         <div className="content">
    //           <p>
    //             jdsahudjsdbjsabhdnasjdbnasjkdsad
    //           </p>
    //         </div>
    //       </div>
    //     )
    // }
  return (
    <div className='Programs'>
      <ProgCard title="Mountains"  img={Background} content="dtbdfbdfbdfgbdgb sdisajdhsahfsjafjsn fijsadoifaiofdiofhdoisf"/>
      <ProgCard title="Mountains"  img={Background} content="dtbdfbdfbdfgbdgb sdisajdhsahfsjafjsn fijsadoifaiofdiofhdoisf"/>
      <ProgCard title="Mountains"  img={Background} content="dtbdfbdfbdfgbdgb sdisajdhsahfsjafjsn fijsadoifaiofdiofhdoisf"/>
      <ProgCard title="Mountains"  img={Background} content="dtbdfbdfbdfgbdgb sdisajdhsahfsjafjsn fijsadoifaiofdiofhdoisf"/>
      <ProgCard title="Mountains"  img={Background} content="dtbdfbdfbdfgbdgb sdisajdhsahfsjafjsn fijsadoifaiofdiofhdoisf"/>
      <ProgCard title="Mountains"  img={Background} content="dtbdfbdfbdfgbdgb sdisajdhsahfsjafjsn fijsadoifaiofdiofhdoisf"/>
      
    </div>
  )
}

export default Programs
