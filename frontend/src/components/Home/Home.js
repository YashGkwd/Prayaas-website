import React from 'react'
import Background from '../../assets/background.png'
import Background1 from '../../assets/background1.jpg'
import Foreground from '../../assets/foreground.png'
import Background4 from '../../assets/background4.jpg'
import "./Home.css"
import HeaderSocials from './HeaderSocials.jsx'
import {Parallax} from 'react-parallax'
import Card from "../Team/Card"
import Slider from './Slider'
import Programs from './Programs'
import ExpSlider from './ExpSlider'
import ExpCard from './ExpCard'
import {BsDash} from 'react-icons/bs'
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
    //             <h2 className="home-secHeading">Adventure Time</h2>
    //             <p className="home-text">
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
      <div className='home-content'>
          <div className='home-text-content'>
            Prayass
            <h2><BsDash/>Social Club of VNIT Nagpur</h2>
          </div>
        </div>
      </Parallax>
     

      <section className='home-section'>
                <h2 className="home-secHeading" style={{color:'red'}}>About Us</h2>
                <p className="home-text" style={{color:'black'}}>     
        The idea of a contributing one's self to the society or in fact, repaying the society
         with what it has bestowed us is an urge that couldn't be trapped within for a long time.
          The bottled conscience gave rise to the group PRAYAAS.The thought was nurtured by 
         <br/> Mr. Pratyush Prabhakar, now an alumnus of VNITIn sept 2006, Prayaas came to existence 
          which now has grown into a concrete well planned activity supported by the Technical Education 
          students which Quality Improvement Program (TEQIP), Govt. of India.<br/>
           <br/><b>PRAYAAS </b>is an official
           social initiative program of VNIT Nagpur. This program is inspired by the vision of Dr. A.P.J.Abdul
            Kalam of making education compliant to societal needs and providing knowledge connectivity to rural India.
            </p> 
              </section>
      <section className='home-section'>
      <h2 className="home-secHeading" style={{color:'green'}}>Our Work</h2>
      <Programs/>
      </section>

    <section className='home-section'>
    <div>
    <h2 className="home-secHeading" style={{color:'green'}}>GALLERY</h2>
      <div className='slider-cont'>    
     <Slider/> 
     </div>
     </div>
     </section>
   
     <div >
    <h2 className="home-secHeading" style={{color:'green'}}>Experience </h2>
      <div className='exp-cont'>    
     <ExpSlider/> 
     {/* <ExpCard/> */}
     </div>
     </div>
    
 
    </div>

  )
}

export default Home
