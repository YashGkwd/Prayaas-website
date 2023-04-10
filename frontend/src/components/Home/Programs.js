import React from 'react'
import "./Programs.css"
import bookbank from '../../assets/background.png'
import p_teach from '../../assets/background1.jpg'
import ngovisit from '../../assets/foreground.png'
import raksha from '../../assets/our work/raksha.jpg'
import ProgCard from './ProgCard'




function Programs() {
  

  return (
    <div className='Programs'>
      <ProgCard title="Prayaas Teaching"  img={p_teach} content="Team Prayaas is dedicated to providing academic support to government school students, preparing them for their scholarship exams. They aim to instill a love for learning and inspire curiosity in young minds. Their mission is to impart knowledge and ignite the flame of learning in pure and untarnished minds. Teaching is a privilege that carries immense responsibility but is deeply rewarding."/>
      <ProgCard title="Raksha Bandhan"  img={raksha} content="Prayaas celebrated Rakshabandhan with children from UPAY NGO, forming a strong bond based on love and compassion. Prayaas shared stories from their childhoods and distributed Prayaas books to the children, empowering them for their future. Celebrating Rakshabandhan strengthened bonds of brotherhood and sisterhood. The experience exemplified the power of love and connection, demonstrating that true bonds are formed from the heart."/>
      <ProgCard title="NGO Visits"  img={ngovisit} content="Prayas at VNIT organizes an annual NGO Visit event for its members to visit and interact with various NGOs. Members engage in discussions, learn about the mission, and gain insights into the challenges faced by the organizations. The event fosters a sense of social responsibility and encourages members to contribute towards building a better society. The NGO visit is a great way to learn about the important work being done by NGOs and witness their impact on society."/>
      <div className='progcardcont'>
      <ProgCard title="Book Bank"  img={bookbank} content=""/>
      </div>
      </div>
    
   
  )
}

export default Programs
