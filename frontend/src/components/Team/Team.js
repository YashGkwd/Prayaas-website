import React from 'react'
import  "./Team.css"
import Card from './Card'
import BigCard from './BigCard'
import social_sec from "../../assets/team/social_secretary.jpg"
import tea1 from "../../assets/team/treasurer_1.jpg"
import tea2 from "../../assets/team/tea2.jpg"
import sir1 from "../../assets/team/sir1.jpg"
import sir2 from "../../assets/team/sir2.png"
function Team() {
  return (
    <>
        <div className='team-cont d-flex justify-content-center align-items-end'>
        
          <h2 className='title '>OUR TEAM at PRAYAAS</h2>
        </div>
       
        <BigCard color={true }  card2="true" title="Proffesor Incharge"  img1={sir1} img2={sir2} card1Title="DR. G N Nimbarte" card2Title="DR. Dilip Peshwe" card1branch="Email: gnimbarte@hss.vnit.ac.in"  card2branch="Email: dilippeshwe@mme.vnit.ac.in"/>
      
         <BigCard title="Social Affairs Secretary" img1={social_sec} card1Title="Ayush Jain" card1batch="BATCH: 2019-2023" card1branch="DEPARTMENT: CIVIL ENGINEERING" card1email="EMAIL: socialsec@students.vnit.ac.in"/>
        <BigCard color={true} title="Treasures"  card2="true" img1={tea1} img2={tea2} card1Title="Rohan Hadke" card1batch="BATCH: 2020-2024" card1branch="DEPARTMENT: CHEMICAL ENGINEERING" card1email="Email: rohanhadke21@gmail.com"  card2Title="Kajal Yadav" card2batch="BATCH: 2020-2024" card2branch="DEPARTMENT: MINING ENGINEERING" card2email="EMAIL: kajalyadav03161@gmail.com"/>

       
    </>
  )
}

export default Team
