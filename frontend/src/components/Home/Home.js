import React from 'react'
import Background from '../../assets/background.png'
import Foreground from '../../assets/foreground.png'
import Background4 from '../../assets/background4.jpg'
import "./Home.css"
import HeaderSocials from './HeaderSocials.jsx'


const Home = () => {
  return (
      <div id="wrapper"> 
            <div class="container">
                <img src={Background} alt="" className='background' />
                {/* <img src={Foreground} alt="" className='foreground' /> */}
                <h1>Prayaas</h1>
                <HeaderSocials/>
            </div>
            <section>
                <h2 class="secHeading">About Us</h2>
                <p class="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur labore eius necessitatibus tenetur, at sequi! Atque ipsum consequuntur exercitationem illum aperiam explicabo repudiandae, ducimus soluta minus mollitia. Sequi, ullam eaque debitis sint corporis blanditiis, illo nisi temporibus necessitatibus optio non et modi quidem. At eius omnis maxime, magnam quaerat ab.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reiciendis dolorum molestias dicta sequi optio illum cumque rerum reprehenderit pariatur in aliquam excepturi consequuntur illo et, quam est officia quidem expedita doloremque beatae iusto non. Consequuntur iste reiciendis temporibus dicta fuga eaque fugit eius repellendus enim vero expedita, nesciunt quam?
                </p>
                <div class="bg bg1">
                    <h2 className="desc">What we do?</h2>
                    <p class="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur labore eius necessitatibus tenetur, at sequi! Atque ipsum consequuntur exercitationem illum aperiam explicabo repudiandae, ducimus soluta minus mollitia. Sequi, ullam eaque debitis sint corporis blanditiis, illo nisi temporibus necessitatibus optio non et modi quidem. At eius omnis maxime, magnam quaerat ab.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reiciendis dolorum molestias dicta sequi optio illum cumque rerum reprehenderit pariatur in aliquam excepturi consequuntur illo et, quam est officia quidem expedita doloremque beatae iusto non. Consequuntur iste reiciendis temporibus dicta fuga eaque fugit eius repellendus enim vero expedita, nesciunt quam?
                    </p>
                </div>
            </section>
      </div>
      
      
  )
}

export default Home