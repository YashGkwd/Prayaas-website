import React from 'react'
import Background from '../../assets/background.png'
import Foreground from '../../assets/foreground.png'
import Background4 from '../../assets/background4.jpg'
import "./Home.css"
import HeaderSocials from './HeaderSocials.jsx'
import {Parallax} from 'react-parallax'
import Card from "../Team/Card"
import Slider from './Slider'
function Home() {
  return (
    // <div>
    //   <div id="wrapper" > 
    //         <div className="container">
    //             <img src={Background} className="background" style={{width:'100vw', height:'150vh'}}/>
    //             <img src={Foreground} className="foreground" />
    //             <h1>ADVENTURE</h1>
    //         </div>

    //         <section>
    //             <h2 className="secHeading">Adventure Time</h2>
    //             <p className="text">
    //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur labore eius necessitatibus tenetur, at sequi! Atque ipsum consequuntur exercitationem illum aperiam explicabo repudiandae, ducimus soluta minus mollitia. Sequi, ullam eaque debitis sint corporis blanditiis, illo nisi temporibus necessitatibus optio non et modi quidem. At eius omnis maxime, magnam quaerat ab.
    //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reiciendis dolorum molestias dicta sequi optio illum cumque rerum reprehenderit pariatur in aliquam excepturi consequuntur illo et, quam est officia quidem expedita doloremque beatae iusto non. Consequuntur iste reiciendis temporibus dicta fuga eaque fugit eius repellendus enim vero expedita, nesciunt quam?
    //             </p>

    //             <div className="bg bg1">
    //             <img src={Background4} alt="" />
    //             <h2 className="desc">BIKING</h2>
    //             </div>


    //         </section>
    //     </div>
    // </div>
  
    <div className='Home'>
      <Parallax strength={600} bgImage={Background}>
        <div className='content'>
          <div className='text-content'>
            Normal Parallax
          </div>
        </div>

      </Parallax>
      <section>
                <h2 className="secHeading" style={{color:'red'}}>About Us</h2>
                <p className="text" style={{color:'black'}}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur labore eius necessitatibus tenetur, at sequi! Atque ipsum consequuntur exercitationem illum aperiam explicabo repudiandae, ducimus soluta minus mollitia. Sequi, ullam eaque debitis sint corporis blanditiis, illo nisi temporibus necessitatibus optio non et modi quidem. At eius omnis maxime, magnam quaerat ab.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reiciendis dolorum molestias dicta sequi optio illum cumque rerum reprehenderit pariatur in aliquam excepturi consequuntur illo et, quam est officia quidem expedita doloremque beatae iusto non. Consequuntur iste reiciendis temporibus dicta fuga eaque fugit eius repellendus enim vero expedita, nesciunt quam?
                </p>
             </section>
      <section>
      <h2 className="secHeading" style={{color:'green'}}>Our Work</h2>
      </section>

      
      <div className='slider-cont'>
     <Slider/> 
     </div>
 
    </div>

  )
}

export default Home
