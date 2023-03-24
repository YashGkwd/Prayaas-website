import React from 'react'
import './Events.css'
import PERSON from '../../assets/background.png'
import {MdDateRange} from 'react-icons/md'

const About = () => {
  return (
    <section id="events">
        <h5>Get To Know the events</h5>
        <h2>Various Events</h2>

        <div className="container about_me">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={PERSON} alt="About Image" />
                </div>
            </div>

            <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdDateRange className='about__icon'/>
              <h2>15 March</h2>
              <h4>Event Name</h4>
              <small> VNIT</small>
            </article>

            <article className="about__card">
              <MdDateRange className='about__icon'/>
              <h2>18 March</h2>
              <h4>Event Name</h4>
              <small>VNIT</small>
            </article>

            <article className="about__card">
              <MdDateRange className='about__icon'/>
              <h2>23 March</h2>
              <h4>Event Name</h4>
              <small>VNIT</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In libero blanditiis temporibus quasi quam architecto sint sequi eligendi quibusdam? Porro magni recusandae sint et blanditiis soluta quidem sapiente eligendi veritatis.
          </p>
          <a href="#contact" className='btn btn-primary'>Know More</a>
        </div>
        </div>
    </section>
    )
}

export default About
